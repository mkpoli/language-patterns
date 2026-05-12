<script lang="ts">
	// Stub. The world-atlas view from design ref 2 is a deferred TODO — see CLAUDE.md.
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Atlas"
	description="Geographic distribution of recurring linguistic patterns across the world. Planned: filter by pattern, family, region, and time layer."
	path="/atlas"
	noIndex
/>

<section class="flex flex-col gap-4 pb-8">
	<p class="text-xs uppercase tracking-widest text-[color:var(--color-ink-soft)]">Atlas</p>
	<h1 class="font-serif text-3xl">Geographic distribution of recurring patterns</h1>
	<p class="max-w-3xl text-[color:var(--color-ink-soft)]">
		An interactive world map view is planned but not yet built. It will let you filter by pattern, strategy, family, region, and time layer — and inspect where each strategy clusters geographically.
	</p>
</section>

<section class="rounded-2xl border border-dashed border-[color:var(--color-rule)] bg-white p-10">
	<div class="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
		<svg viewBox="0 0 200 100" class="h-24 w-auto opacity-50" aria-hidden="true">
			<ellipse cx="100" cy="50" rx="80" ry="30" fill="none" stroke="oklch(70% 0.05 230)" stroke-dasharray="3 3" stroke-width="1.5" />
			<circle cx="60" cy="40" r="4" fill="oklch(78% 0.08 230)" />
			<circle cx="120" cy="55" r="4" fill="oklch(82% 0.12 75)" />
			<circle cx="150" cy="35" r="4" fill="oklch(78% 0.1 155)" />
			<circle cx="85" cy="62" r="4" fill="oklch(75% 0.09 295)" />
		</svg>
		<h2 class="font-serif text-2xl">Coming next round</h2>
		<p class="text-sm text-[color:var(--color-ink-soft)]">
			Planned: MapLibre + Natural Earth boundaries, an atlas filter panel, pattern legend with strategy counts, and a “by language family” distribution widget. Until then, browse the
			<a class="underline" href="/patterns">patterns</a> and the comparative
			<a class="underline" href="/pathways/jespersens-cycle">historical timeline</a>.
		</p>
	</div>
</section>
