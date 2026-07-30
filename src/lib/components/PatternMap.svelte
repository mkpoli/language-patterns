<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { Attestation, ParadigmSection, Strategy } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';
	import { strategyColor } from '$lib/strategyColor';
	import { orderedAxes } from '$lib/colexification';

	import { m } from '$lib/paraglide/messages.js';

	export interface MapMarker {
		code: string;
		expression?: string;
		transliteration?: string;
		note?: string;
		color?: Strategy['color'];
		size?: number;
		links?: { href: string; label: string }[];
	}

	interface Props {
		attestations?: Attestation[];
		strategies?: Strategy[];
		markers?: MapMarker[];
		legend?: { id?: string; label: string; color: Strategy['color'] }[];
		/**
		 * When given, the map plots one language's form per selected column —
		 * how each language says that one thing — instead of a single
		 * representative expression per language.
		 */
		paradigm?: ParadigmSection;
		height?: string;
	}
	let { attestations, strategies, markers, legend, paradigm, height = '480px' }: Props = $props();

	let container: HTMLDivElement | undefined = $state();
	let cleanup: (() => void) | null = null;

	const strategyById = $derived(new Map((strategies ?? []).map((s) => [s.id, s])));

	const legendItems = $derived(
		legend ?? (strategies ?? []).map((s) => ({ id: s.id, label: s.label, color: s.color }))
	);

	interface Point {
		code: string;
		lat: number;
		lng: number;
		color?: Strategy['color'];
		strategy?: Strategy;
		expression: string;
		transliteration?: string;
		note?: string;
		size?: number;
		links?: { href: string; label: string }[];
	}

	// A paradigm turns the map into one column at a time: pick a thing, and every
	// dot is that language's way of saying it. Each language contributes at most
	// one cell per column, so nothing has to be offset.
	const columns = $derived(
		paradigm
			? orderedAxes(paradigm).filter((ax) => paradigm.cells.some((c) => c.axis === ax.id))
			: []
	);

	let selected = $state<string | null>(null);
	const activeColumn = $derived(
		columns.length
			? (columns.find((c) => c.id === selected)?.id ?? columns[0].id)
			: null
	);

	const countByColumn = $derived.by(() => {
		const counts = new Map<string, number>();
		for (const c of paradigm?.cells ?? []) {
			const lang = getLanguage(c.language);
			if (lang.lat == null || lang.lng == null) continue;
			counts.set(c.axis, (counts.get(c.axis) ?? 0) + 1);
		}
		return counts;
	});

	// Offsets duplicates by ~1° in a small spiral, for the modes where one
	// language can contribute several dots.
	function spiral(n: number): [number, number] {
		return n === 0 ? [0, 0] : [Math.cos(n * 2.4) * 1.4, Math.sin(n * 2.4) * 1.4];
	}

	const points = $derived.by(() => {
		if (activeColumn != null && paradigm) {
			const out: Point[] = [];
			for (const c of paradigm.cells) {
				if (c.axis !== activeColumn) continue;
				const lang = getLanguage(c.language);
				if (lang.lat == null || lang.lng == null) continue;
				const strat = c.strategy ? strategyById.get(c.strategy) : undefined;
				out.push({
					code: c.language,
					lat: lang.lat,
					lng: lang.lng,
					color: strat?.color,
					strategy: strat,
					expression: c.form,
					transliteration: c.transliteration,
					note: c.note
				});
			}
			return out;
		}

		if (markers?.length) {
			const seen = new Map<string, number>();
			const out: Point[] = [];
			for (const mk of markers) {
				const lang = getLanguage(mk.code);
				if (lang.lat == null || lang.lng == null) continue;
				const key = `${lang.lat.toFixed(1)},${lang.lng.toFixed(1)}`;
				const n = seen.get(key) ?? 0;
				seen.set(key, n + 1);
				const [dx, dy] = spiral(n);
				out.push({
					code: mk.code,
					lat: lang.lat + dy,
					lng: lang.lng + dx,
					color: mk.color,
					expression: mk.expression ?? '',
					transliteration: mk.transliteration,
					note: mk.note,
					size: mk.size,
					links: mk.links
				});
			}
			return out;
		}

		// One marker per (language, strategy) pair. Languages using more than one
		// strategy get slightly offset markers so they don't stack.
		const byLangCount = new Map<string, number>();
		const out: Point[] = [];
		for (const att of attestations ?? []) {
			const lang = getLanguage(att.language);
			if (lang.lat == null || lang.lng == null) continue;
			const seen = byLangCount.get(att.language) ?? 0;
			byLangCount.set(att.language, seen + 1);
			const [dx, dy] = spiral(seen);
			const strat = strategyById.get(att.strategy);
			out.push({
				code: att.language,
				lat: lang.lat + dy,
				lng: lang.lng + dx,
				color: strat?.color,
				strategy: strat,
				expression: att.expression,
				transliteration: att.transliteration,
				note: att.note
			});
		}
		return out;
	});

	const visiblePoints = $derived(points);

	// Colour key: only the strategies actually on the map right now.
	const keyItems = $derived.by(() => {
		if (activeColumn == null) return legendItems;
		const used = new Set(points.map((p) => p.strategy?.id).filter(Boolean));
		return legendItems.filter((item) => item.id != null && used.has(item.id));
	});

	function escapeHtml(s: string): string {
		return s.replace(
			/[&<>"']/g,
			(c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
		);
	}

	let mapInstance: import('maplibre-gl').Map | null = $state.raw(null);
	let markerHandles: import('maplibre-gl').Marker[] = [];
	let maplibreModule: typeof import('maplibre-gl') | null = null;
	let dark = $state(false);
	let appliedStyle: string | null = null;

	const STYLE_LIGHT = 'https://tiles.openfreemap.org/styles/positron';
	const STYLE_DARK = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

	function resolvedDark(): boolean {
		const t = document.documentElement.dataset.theme;
		if (t === 'light' || t === 'dark') return t === 'dark';
		return matchMedia('(prefers-color-scheme: dark)').matches;
	}

	function syncMarkers() {
		const maplibregl = maplibreModule;
		const map = mapInstance;
		if (!maplibregl || !map) return;

		for (const h of markerHandles) h.remove();
		markerHandles = [];

		for (const p of visiblePoints) {
			const lang = getLanguage(p.code);
			const tokens = p.color ? strategyColor(p.color) : null;
			const size = p.size ?? 16;
			const el = document.createElement('div');
			el.setAttribute('aria-label', lang.name);
			el.style.width = `${size}px`;
			el.style.height = `${size}px`;
			el.style.borderRadius = '999px';
			el.style.boxShadow = '0 1px 4px var(--color-shadow)';
			el.style.border = '2px solid var(--color-on-band)';
			el.style.background = tokens?.band ?? 'var(--color-slate-band)';
			el.style.cursor = 'pointer';

			const popupHtml = `
				<div style="font-family: var(--font-sans); min-width: 180px; color: var(--color-ink);">
					<div style="font-weight: 600;">${escapeHtml(lang.name)}</div>
					<div style="font-size: 11px; color: var(--color-ink-soft);">${escapeHtml(lang.family)}</div>
					<div style="margin-top: 6px; font-family: var(--font-mono); font-size: 13px;">${escapeHtml(p.expression)}</div>
					${p.transliteration ? `<div style="margin-top: 2px; font-size: 12px; font-style: italic; color: var(--color-ink-soft);">${escapeHtml(p.transliteration)}</div>` : ''}
					${p.strategy ? `<div style="margin-top: 4px; display: inline-block; padding: 2px 6px; border-radius: 999px; font-size: 10px; background: ${tokens?.soft}; color: ${tokens?.textOn};">${escapeHtml(p.strategy.label)}</div>` : ''}
					${p.note ? `<div style="margin-top: 4px; font-size: 11px; color: var(--color-ink-soft);">${escapeHtml(p.note)}</div>` : ''}
					${p.links?.length ? `<div style="margin-top: 6px; display: flex; flex-direction: column; gap: 2px;">${p.links.map((l) => `<a href="${escapeHtml(l.href)}" style="font-size: 12px; color: var(--color-ink); text-decoration: underline;">${escapeHtml(l.label)}</a>`).join('')}</div>` : ''}
				</div>
			`;
			const popup = new maplibregl.Popup({ offset: 14, closeButton: false }).setHTML(popupHtml);

			markerHandles.push(
				new maplibregl.Marker({ element: el }).setLngLat([p.lng, p.lat]).setPopup(popup).addTo(map)
			);
		}
	}

	onMount(async () => {
		if (!container) return;
		let disposed = false;

		dark = resolvedDark();
		const mq = matchMedia('(prefers-color-scheme: dark)');
		const syncTheme = () => (dark = resolvedDark());
		mq.addEventListener('change', syncTheme);
		const themeObserver = new MutationObserver(syncTheme);
		themeObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		// Registered before the awaits: unmounting mid-import must still detach
		// the theme listeners (an async onMount return value is never used as
		// the lifecycle cleanup).
		cleanup = () => {
			disposed = true;
			mq.removeEventListener('change', syncTheme);
			themeObserver.disconnect();
		};

		// CSS — static-imported so it's bundled
		await import('maplibre-gl/dist/maplibre-gl.css');
		const maplibregl = await import('maplibre-gl');
		if (disposed || !container) return;
		maplibreModule = maplibregl;

		appliedStyle = dark ? STYLE_DARK : STYLE_LIGHT;
		const map = new maplibregl.Map({
			container,
			style: appliedStyle,
			center: [20, 25],
			zoom: 1.4,
			minZoom: 1,
			maxZoom: 10,
			attributionControl: { compact: true }
		});

		map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
		map.scrollZoom.disable();

		map.once('load', () => {
			mapInstance = map;
		});

		// The canvas keeps the size the container had at construction; follow
		// later layout changes (grid settling, panel collapse, viewport resize).
		const resizeObserver = new ResizeObserver(() => map.resize());
		resizeObserver.observe(container);

		cleanup = () => {
			disposed = true;
			mapInstance = null;
			markerHandles = [];
			resizeObserver.disconnect();
			mq.removeEventListener('change', syncTheme);
			themeObserver.disconnect();
			map.remove();
		};
	});

	onDestroy(() => cleanup?.());

	// Redraws markers whenever the data props change (client-side navigation
	// reuses this component across pattern/pathway pages).
	$effect(() => {
		void visiblePoints;
		syncMarkers();
	});

	// Swap base tiles when the theme flips. Markers are DOM elements and
	// survive setStyle untouched. appliedStyle guards against re-sending the
	// style the map was created with when mapInstance is first assigned.
	$effect(() => {
		const want = dark ? STYLE_DARK : STYLE_LIGHT;
		if (mapInstance && want !== appliedStyle) {
			appliedStyle = want;
			mapInstance.setStyle(want);
		}
	});
</script>

<div class="flex flex-col gap-3">
	{#if columns.length > 1}
		<div
			role="tablist"
			aria-label={m.map_item_switcher()}
			class="inline-flex flex-wrap gap-1 self-start rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface-sunken)] p-1 text-sm"
		>
			{#each columns as column (column.id)}
				{@const on = activeColumn === column.id}
				<button
					type="button"
					role="tab"
					aria-selected={on}
					onclick={() => (selected = column.id)}
					class="rounded-full px-3 py-1.5 transition"
					class:bg-[color:var(--color-surface)]={on}
					class:shadow-sm={on}
					class:font-medium={on}
					class:text-[color:var(--color-ink-soft)]={!on}
				>
					{column.label}
					<span class="ml-1 font-mono text-xs text-[color:var(--color-ink-soft)]"
						>{countByColumn.get(column.id)}</span
					>
				</button>
			{/each}
		</div>
	{/if}

	<div
		bind:this={container}
		class="overflow-hidden rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface-sunken)]"
		style:height
		style:width="100%"
	></div>

	{#if keyItems.length}
		<div class="flex flex-wrap items-center gap-2 text-xs">
			{#each keyItems as item, i (item.id ?? `${item.color}-${i}`)}
				{@const tokens = strategyColor(item.color)}
				<span
					class="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] px-2 py-1"
				>
					<span class="inline-block h-3 w-3 rounded-full" style:background={tokens.band}></span>
					{item.label}
				</span>
			{/each}
		</div>
	{/if}

	<p class="text-xs text-[color:var(--color-ink-soft)]">
		Marker positions are approximate cultural centres — they are not territorial claims. Tiles: <a
			class="underline"
			href="https://openfreemap.org"
			target="_blank"
			rel="noopener">OpenFreeMap</a
		>
		·
		<a
			class="underline"
			href="https://www.openstreetmap.org/copyright"
			target="_blank"
			rel="noopener">© OpenStreetMap contributors</a
		>
		· Dark tiles:
		<a class="underline" href="https://carto.com/attributions" target="_blank" rel="noopener"
			>© CARTO</a
		>.
	</p>
</div>

<style>
	/* Allow popup to use our color tokens. !important for the same reason as the
	   attribution control below: the vendor stylesheet is injected at runtime
	   after component CSS, so its `background: #fff` otherwise wins the tie and
	   leaves light text on a white popup in dark mode. */
	:global(.maplibregl-popup-content) {
		padding: 12px 14px;
		border-radius: 12px;
		background: var(--color-surface) !important;
		color: var(--color-ink) !important;
		box-shadow: 0 4px 16px var(--color-shadow);
	}

	:global(.maplibregl-popup-tip) {
		border-top-color: var(--color-surface) !important;
	}

	/* MapLibre's bundled controls ship light-only defaults; retheme via tokens. */
	:global(.maplibregl-ctrl-group) {
		background: var(--color-surface);
		box-shadow: 0 1px 4px var(--color-shadow);
	}

	:global(.maplibregl-ctrl-group button + button) {
		border-top: 1px solid var(--color-rule);
	}

	:global(.maplibregl-ctrl button .maplibregl-ctrl-icon),
	:global(.maplibregl-ctrl-attrib-button) {
		filter: var(--map-icon-filter, none);
	}

	/* !important: the vendor stylesheet is injected at runtime after component
	   CSS, so it wins every specificity tie. */
	:global(.maplibregl-ctrl.maplibregl-ctrl-attrib) {
		background: color-mix(in oklch, var(--color-surface) 85%, transparent) !important;
		color: var(--color-ink-soft) !important;
	}

	:global(.maplibregl-ctrl-attrib a) {
		color: var(--color-ink-soft);
	}
</style>
