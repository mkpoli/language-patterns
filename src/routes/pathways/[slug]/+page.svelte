<script lang="ts">
	import StageCard from '$lib/components/StageCard.svelte';
	import CycleDiagram from '$lib/components/CycleDiagram.svelte';
	import HistoricalTimeline from '$lib/components/HistoricalTimeline.svelte';
	import Bibliography from '$lib/components/Bibliography.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { SITE_NAME, SITE_URL } from '$lib/seo';
	import { getSource } from '$lib/data/sources';

	let { data } = $props();
	const pathway = $derived(data.pathway);

	const allCitations = $derived([
		...(pathway.sources ?? []),
		...pathway.stages.flatMap((s) => s.sources ?? []),
		...pathway.bands.flatMap((b) => b.sources ?? [])
	]);

	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'DefinedTerm',
		name: pathway.title,
		alternateName: pathway.shortTitle,
		description: pathway.summary,
		url: `${SITE_URL}/pathways/${pathway.slug}`,
		inDefinedTermSet: {
			'@type': 'DefinedTermSet',
			name: SITE_NAME,
			url: SITE_URL
		},
		mainEntityOfPage: `${SITE_URL}/pathways/${pathway.slug}`,
		about: ['historical linguistics', 'grammaticalization', pathway.kind],
		citation: (pathway.sources ?? []).map((c) => {
			const s = getSource(c.source);
			return { '@type': 'CreativeWork', name: s.title, author: s.authors.join('; '), datePublished: String(s.year) };
		})
	});
</script>

<Seo
	title={pathway.title}
	description={pathway.summary}
	path={`/pathways/${pathway.slug}`}
	type="article"
	keywords={[pathway.title, pathway.shortTitle, 'historical linguistics', 'language change', 'grammaticalization']}
	{jsonLd}
/>

<article class="flex flex-col gap-10">
	<header class="flex flex-col gap-3">
		<div class="flex items-center gap-2 text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]">
			<span class="rounded-full bg-[oklch(94%_0.04_295)] px-2 py-0.5">Pathway</span>
			<span>· {pathway.kind}</span>
		</div>
		<h1 class="font-serif text-4xl leading-tight">{pathway.title}</h1>
		<p class="text-lg italic text-[color:var(--color-ink-soft)]">{pathway.question}</p>
		<p class="max-w-3xl text-base">{pathway.summary}</p>
	</header>

	<section class="grid gap-8 lg:grid-cols-[1fr_minmax(0,400px)] lg:items-start">
		<div>
			<h2 class="mb-4 font-serif text-2xl">Stages</h2>
			<div class="grid gap-4 sm:grid-cols-2">
				{#each pathway.stages as stage (stage.id)}
					<StageCard {stage} {pathway} />
				{/each}
			</div>
		</div>
		<div>
			<h2 class="mb-4 font-serif text-2xl">The cycle</h2>
			<CycleDiagram stages={pathway.stages} />
		</div>
	</section>

	<section>
		<h2 class="mb-1 font-serif text-2xl">Comparative historical timeline</h2>
		<p class="mb-4 max-w-3xl text-sm text-[color:var(--color-ink-soft)]">
			How expressions overlap, compete, and replace one another across languages. Hover any band for the full date range and note.
		</p>
		<HistoricalTimeline {pathway} />
	</section>

	<Bibliography citations={allCitations} />

	{#if pathway.related.length}
		<section>
			<h2 class="mb-4 font-serif text-2xl">Related patterns</h2>
			<ul class="flex flex-wrap gap-2">
				{#each pathway.related as rel (rel.slug)}
					<li>
						<a
							href={`/${rel.kind === 'pattern' ? 'patterns' : 'pathways'}/${rel.slug}`}
							class="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-rule)] bg-white px-3 py-1.5 text-sm hover:border-[oklch(70%_0.05_260)]"
						>
							<span class="text-xs text-[color:var(--color-ink-soft)]">
								{rel.kind === 'pattern' ? 'Pattern' : 'Pathway'}
							</span>
							{rel.label}
							<span>→</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</article>
