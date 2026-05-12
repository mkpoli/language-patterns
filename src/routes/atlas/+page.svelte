<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PatternMap from '$lib/components/PatternMap.svelte';
	import QuestionCard from '$lib/components/QuestionCard.svelte';
	import { patterns } from '$lib/data';

	// For each pattern with attestations + coords, the map is embedded on its own page.
	// On the Atlas index, we surface the first pattern that has map data as a preview
	// and link out to the rest.
	const mappable = patterns.filter((p) => (p.attestations?.length ?? 0) > 0);
	const featured = mappable[0];
</script>

<Seo
	title="Atlas"
	description="Geographic distribution of recurring linguistic patterns across the world's languages, plotted on an interactive map."
	path="/atlas"
/>

<section class="flex flex-col gap-4 pb-8">
	<p class="text-xs uppercase tracking-widest text-[color:var(--color-ink-soft)]">Atlas</p>
	<h1 class="font-serif text-3xl">Geographic distribution of recurring patterns</h1>
	<p class="max-w-3xl text-[color:var(--color-ink-soft)]">
		Each pattern page embeds its own map. The preview below shows the distribution of strategies for the featured pattern; jump to a pattern to see its full map, comparison table, and example sentences.
	</p>
</section>

{#if featured}
	<section class="mb-10">
		<div class="mb-3 flex items-baseline justify-between gap-3">
			<h2 class="font-serif text-2xl">{featured.title}</h2>
			<a class="text-sm underline" href={`/patterns/${featured.slug}`}>Open the full page →</a>
		</div>
		<PatternMap attestations={featured.attestations ?? []} strategies={featured.strategies} height="540px" />
	</section>
{/if}

<section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each mappable as p (p.slug)}
		<QuestionCard
			question={p.question}
			title={p.title}
			summary={p.summary}
			href={`/patterns/${p.slug}`}
			category={p.category}
			kind="pattern"
		/>
	{/each}
</section>
