<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { Attestation, Strategy } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';
	import { strategyColor } from '$lib/strategyColor';

	import { m } from '$lib/paraglide/messages.js';

	export interface MapMarker {
		code: string;
		expression?: string;
		note?: string;
		color?: Strategy['color'];
		size?: number;
		links?: { href: string; label: string }[];
		/** Legend entry this marker belongs to. Set it to make the legend filter. */
		group?: string;
	}

	interface Props {
		attestations?: Attestation[];
		strategies?: Strategy[];
		markers?: MapMarker[];
		legend?: { id?: string; label: string; color: Strategy['color'] }[];
		height?: string;
	}
	let { attestations, strategies, markers, legend, height = '480px' }: Props = $props();

	let container: HTMLDivElement | undefined = $state();
	let cleanup: (() => void) | null = null;

	const strategyById = $derived(new Map((strategies ?? []).map((s) => [s.id, s])));

	const legendItems = $derived(
		legend ?? (strategies ?? []).map((s) => ({ id: s.id, label: s.label, color: s.color }))
	);

	// Group: one marker per (language, strategy) pair. Languages with multiple
	// attestations (e.g. English in non-possession uses two strategies) get
	// slightly offset markers so they don't stack on top of one another.
	const points = $derived.by(() => {
		interface Point {
			code: string;
			lat: number;
			lng: number;
			color?: Strategy['color'];
			strategy?: Strategy;
			expression: string;
			note?: string;
			size?: number;
			links?: { href: string; label: string }[];
			group?: string;
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
				const dx = n === 0 ? 0 : Math.cos(n * 2.4) * 1.4;
				const dy = n === 0 ? 0 : Math.sin(n * 2.4) * 1.4;
				out.push({
					code: mk.code,
					lat: lang.lat + dy,
					lng: lang.lng + dx,
					color: mk.color,
					expression: mk.expression ?? '',
					note: mk.note,
					size: mk.size,
					links: mk.links,
					group: mk.group
				});
			}
			return out;
		}

		const byLangCount = new Map<string, number>();
		const out: Point[] = [];
		for (const att of attestations ?? []) {
			const lang = getLanguage(att.language);
			if (lang.lat == null || lang.lng == null) continue;
			const seen = byLangCount.get(att.language) ?? 0;
			byLangCount.set(att.language, seen + 1);
			// Offset duplicates by ~1° in a small spiral
			const dx = seen === 0 ? 0 : Math.cos(seen * 2.4) * 1.4;
			const dy = seen === 0 ? 0 : Math.sin(seen * 2.4) * 1.4;
			const strat = strategyById.get(att.strategy);
			out.push({
				code: att.language,
				lat: lang.lat + dy,
				lng: lang.lng + dx,
				color: strat?.color,
				strategy: strat,
				expression: att.expression,
				note: att.note,
				group: att.strategy
			});
		}
		return out;
	});

	// The legend doubles as a filter wherever points carry a group. Markers
	// supplied without one (the pathway map buckets several sets into a single
	// dot) keep a static legend rather than a control that half works.
	//
	// An empty selection means every group shows. The first click on a chip
	// isolates that group, so reaching one strategy costs one click rather than
	// switching the other five off; later clicks add and remove groups, and
	// clearing the last one returns to the full map.
	let selected = $state<string[]>([]);

	const countByGroup = $derived.by(() => {
		const counts = new Map<string, number>();
		for (const p of points) {
			if (p.group == null) continue;
			counts.set(p.group, (counts.get(p.group) ?? 0) + 1);
		}
		return counts;
	});

	const filterable = $derived(
		legendItems.some((item) => item.id != null && countByGroup.has(item.id))
	);

	const visiblePoints = $derived(
		filterable && selected.length
			? points.filter((p) => p.group != null && selected.includes(p.group))
			: points
	);

	function toggleGroup(id: string) {
		if (!selected.length) {
			selected = [id];
		} else if (selected.includes(id)) {
			selected = selected.length === 1 ? [] : selected.filter((s) => s !== id);
		} else {
			selected = [...selected, id];
		}
	}

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
	<div
		bind:this={container}
		class="overflow-hidden rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface-sunken)]"
		style:height
		style:width="100%"
	></div>

	<!-- Legend. Doubles as a filter when the points carry a group. -->
	{#if legendItems.length}
		<div class="flex flex-wrap items-center gap-2 text-xs">
			{#each legendItems as item, i (item.id ?? `${item.color}-${i}`)}
				{@const tokens = strategyColor(item.color)}
				{@const count = item.id != null ? countByGroup.get(item.id) : undefined}
				{#if filterable && item.id != null}
					{@const active = !selected.length || selected.includes(item.id)}
					<button
						type="button"
						onclick={() => toggleGroup(item.id!)}
						aria-pressed={active}
						class="inline-flex items-center gap-1.5 rounded-full border px-2 py-1 transition-opacity {active
							? 'border-[color:var(--color-rule)] bg-[color:var(--color-surface)]'
							: 'border-dashed border-[color:var(--color-rule)] opacity-45'}"
					>
						<span class="inline-block h-3 w-3 rounded-full" style:background={tokens.band}></span>
						{item.label}
						{#if count}
							<span class="font-mono text-[10px] text-[color:var(--color-ink-soft)]">{count}</span>
						{/if}
					</button>
				{:else}
					<span
						class="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] px-2 py-1"
					>
						<span class="inline-block h-3 w-3 rounded-full" style:background={tokens.band}></span>
						{item.label}
					</span>
				{/if}
			{/each}

			{#if filterable && selected.length}
				<button
					type="button"
					onclick={() => (selected = [])}
					class="rounded-full border border-[color:var(--color-rule)] px-2 py-1 text-[color:var(--color-ink-soft)] hover:border-[color:var(--color-accent)]"
				>
					{m.legend_show_all()}
				</button>
			{/if}
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
	/* Allow popup to use our color tokens */
	:global(.maplibregl-popup-content) {
		padding: 12px 14px;
		border-radius: 12px;
		background: var(--color-surface);
		color: var(--color-ink);
		box-shadow: 0 4px 16px var(--color-shadow);
	}

	:global(.maplibregl-popup-tip) {
		border-top-color: var(--color-surface);
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
