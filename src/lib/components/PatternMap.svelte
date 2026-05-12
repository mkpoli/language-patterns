<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { Attestation, Strategy } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';
	import { strategyColor } from '$lib/strategyColor';

	interface Props {
		attestations: Attestation[];
		strategies: Strategy[];
		height?: string;
	}
	let { attestations, strategies, height = '480px' }: Props = $props();

	let container: HTMLDivElement | undefined = $state();
	let cleanup: (() => void) | null = null;

	const strategyById = $derived(new Map(strategies.map((s) => [s.id, s])));

	// Group: one marker per (language, strategy) pair. Languages with multiple
	// attestations (e.g. English in non-possession uses two strategies) get
	// slightly offset markers so they don't stack on top of one another.
	const points = $derived.by(() => {
		interface Point {
			code: string;
			lat: number;
			lng: number;
			strategy?: Strategy;
			expression: string;
			note?: string;
		}
		const byLangCount = new Map<string, number>();
		const out: Point[] = [];
		for (const att of attestations) {
			const lang = getLanguage(att.language);
			if (lang.lat == null || lang.lng == null) continue;
			const seen = byLangCount.get(att.language) ?? 0;
			byLangCount.set(att.language, seen + 1);
			// Offset duplicates by ~1° in a small spiral
			const dx = seen === 0 ? 0 : Math.cos(seen * 2.4) * 1.4;
			const dy = seen === 0 ? 0 : Math.sin(seen * 2.4) * 1.4;
			out.push({
				code: att.language,
				lat: lang.lat + dy,
				lng: lang.lng + dx,
				strategy: strategyById.get(att.strategy),
				expression: att.expression,
				note: att.note
			});
		}
		return out;
	});

	function escapeHtml(s: string): string {
		return s.replace(/[&<>"']/g, (c) =>
			({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
		);
	}

	onMount(async () => {
		if (!container) return;

		// CSS — static-imported so it's bundled
		await import('maplibre-gl/dist/maplibre-gl.css');
		const maplibregl = await import('maplibre-gl');

		const map = new maplibregl.Map({
			container,
			style: 'https://tiles.openfreemap.org/styles/positron',
			center: [20, 25],
			zoom: 1.4,
			minZoom: 1,
			maxZoom: 10,
			attributionControl: { compact: true }
		});

		map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
		map.scrollZoom.disable();

		map.once('load', () => {
			for (const p of points) {
				const lang = getLanguage(p.code);
				const tokens = p.strategy ? strategyColor(p.strategy.color) : null;
				const el = document.createElement('div');
				el.setAttribute('aria-label', lang.name);
				el.style.width = '16px';
				el.style.height = '16px';
				el.style.borderRadius = '999px';
				el.style.boxShadow = '0 1px 4px oklch(0% 0 0 / 0.25)';
				el.style.border = '2px solid white';
				el.style.background = tokens?.band ?? 'oklch(70% 0.03 260)';
				el.style.cursor = 'pointer';

				const popupHtml = `
					<div style="font-family: var(--font-sans); min-width: 180px;">
						<div style="font-weight: 600;">${escapeHtml(lang.name)}</div>
						<div style="font-size: 11px; color: oklch(45% 0.02 260);">${escapeHtml(lang.family)}</div>
						<div style="margin-top: 6px; font-family: var(--font-mono); font-size: 13px;">${escapeHtml(p.expression)}</div>
						${p.strategy ? `<div style="margin-top: 4px; display: inline-block; padding: 2px 6px; border-radius: 999px; font-size: 10px; background: ${tokens?.soft}; color: ${tokens?.textOn};">${escapeHtml(p.strategy.label)}</div>` : ''}
						${p.note ? `<div style="margin-top: 4px; font-size: 11px; color: oklch(45% 0.02 260);">${escapeHtml(p.note)}</div>` : ''}
					</div>
				`;
				const popup = new maplibregl.Popup({ offset: 14, closeButton: false }).setHTML(popupHtml);

				new maplibregl.Marker({ element: el })
					.setLngLat([p.lng, p.lat])
					.setPopup(popup)
					.addTo(map);
			}
		});

		cleanup = () => map.remove();
	});

	onDestroy(() => cleanup?.());
</script>

<div class="flex flex-col gap-3">
	<div
		bind:this={container}
		class="overflow-hidden rounded-2xl border border-[color:var(--color-rule)] bg-[oklch(96%_0.005_260)]"
		style:height
		style:width="100%"
	></div>

	<!-- Strategy legend -->
	<div class="flex flex-wrap gap-2 text-xs">
		{#each strategies as s (s.id)}
			{@const tokens = strategyColor(s.color)}
			<span class="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-rule)] bg-white px-2 py-1">
				<span class="inline-block h-3 w-3 rounded-full" style:background={tokens.band}></span>
				{s.label}
			</span>
		{/each}
	</div>

	<p class="text-xs text-[color:var(--color-ink-soft)]">
		Marker positions are approximate cultural centres — they are not territorial claims. Tiles: <a class="underline" href="https://openfreemap.org" target="_blank" rel="noopener">OpenFreeMap</a> · <a class="underline" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a>.
	</p>
</div>

<style>
	/* Allow popup to use our color tokens */
	:global(.maplibregl-popup-content) {
		padding: 12px 14px;
		border-radius: 12px;
		box-shadow: 0 4px 16px oklch(0% 0 0 / 0.08);
	}
</style>
