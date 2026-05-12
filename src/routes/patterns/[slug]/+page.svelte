<script lang="ts">
	import StrategyCard from '$lib/components/StrategyCard.svelte';
	import ComparisonTable from '$lib/components/ComparisonTable.svelte';
	import ExampleGloss from '$lib/components/ExampleGloss.svelte';
	import Bibliography from '$lib/components/Bibliography.svelte';
	import PolarityContrastTable from '$lib/components/PolarityContrastTable.svelte';
	import ParadigmGrid from '$lib/components/ParadigmGrid.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { SITE_NAME, SITE_URL } from '$lib/seo';
	import { getSource } from '$lib/data/sources';

	let { data } = $props();
	const pattern = $derived(data.pattern);

	const allCitations = $derived([
		...(pattern.sources ?? []),
		...(pattern.attestations ?? []).flatMap((a) => a.sources ?? []),
		...pattern.examples.flatMap((e) => e.sources ?? []),
		...(pattern.polarity?.sources ?? []),
		...(pattern.polarity?.contrasts ?? []).flatMap((c) => c.sources ?? []),
		...(pattern.polarity?.examples ?? []).flatMap((e) => e.sources ?? []),
		...(pattern.paradigm?.sources ?? []),
		...(pattern.paradigm?.cells ?? []).flatMap((c) => c.sources ?? [])
	]);

	let selectedSet: string | null = $state(null);
	const activeSet = $derived(selectedSet ?? pattern.exampleSets?.[0]?.id ?? '');
	const activeSetMeta = $derived(pattern.exampleSets?.find((s) => s.id === activeSet));
	const activeSetExamples = $derived(pattern.examples.filter((e) => e.set === activeSet));
	const ungroupedExamples = $derived(pattern.examples.filter((e) => !e.set));

	let selectedNegSet: string | null = $state(null);
	const activeNegSet = $derived(selectedNegSet ?? pattern.polarity?.exampleSets?.[0]?.id ?? '');
	const activeNegSetMeta = $derived(pattern.polarity?.exampleSets?.find((s) => s.id === activeNegSet));
	const activeNegSetExamples = $derived(
		(pattern.polarity?.examples ?? []).filter((e) => e.set === activeNegSet)
	);

	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'DefinedTerm',
		name: pattern.title,
		alternateName: pattern.shortTitle,
		description: pattern.summary,
		url: `${SITE_URL}/patterns/${pattern.slug}`,
		inDefinedTermSet: {
			'@type': 'DefinedTermSet',
			name: SITE_NAME,
			url: SITE_URL
		},
		mainEntityOfPage: `${SITE_URL}/patterns/${pattern.slug}`,
		about: pattern.category,
		citation: (pattern.sources ?? []).map((c) => {
			const s = getSource(c.source);
			return { '@type': 'CreativeWork', name: s.title, author: s.authors.join('; '), datePublished: String(s.year) };
		})
	});
</script>

<Seo
	title={pattern.title}
	description={pattern.summary}
	path={`/patterns/${pattern.slug}`}
	type="article"
	keywords={[pattern.title, pattern.shortTitle, ...pattern.category, 'linguistic typology', 'cross-linguistic']}
	{jsonLd}
/>

<article class="flex flex-col gap-10">
	<header class="flex flex-col gap-3">
		<div class="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]">
			<span class="rounded-full bg-[oklch(94%_0.04_230)] px-2 py-0.5">Pattern</span>
			{#each pattern.category as cat (cat)}
				<span>· {cat}</span>
			{/each}
		</div>
		<h1 class="font-serif text-4xl leading-tight">{pattern.title}</h1>
		<p class="text-lg italic text-[color:var(--color-ink-soft)]">{pattern.question}</p>
		<p class="max-w-3xl text-base">{pattern.summary}</p>
	</header>

	<section>
		<h2 class="mb-4 font-serif text-2xl">Strategies</h2>
		<div class="grid gap-4 lg:grid-cols-2">
			{#each pattern.strategies as strategy (strategy.id)}
				<StrategyCard {strategy} attestations={pattern.attestations ?? []} />
			{/each}
		</div>
	</section>

	{#if pattern.attestations?.length}
		<section>
			<h2 class="mb-4 font-serif text-2xl">Language comparison</h2>
			<ComparisonTable {pattern} />
		</section>
	{/if}

	{#if pattern.paradigm}
		<section>
			<h2 class="mb-4 font-serif text-2xl">{pattern.paradigm.title ?? 'Paradigm grid'}</h2>
			<ParadigmGrid paradigm={pattern.paradigm} strategies={pattern.strategies} />
		</section>
	{/if}

	<section>
		<div class="mb-4 flex flex-wrap items-end justify-between gap-3">
			<div>
				<h2 class="font-serif text-2xl">Examples</h2>
				<p class="text-sm text-[color:var(--color-ink-soft)]">
					Toggle between Natural / Literal / Gloss to see how each language conceptualises the same idea.
				</p>
			</div>

			{#if pattern.exampleSets?.length && pattern.exampleSets.length > 1}
				<div
					role="tablist"
					aria-label="Example set"
					class="inline-flex gap-1 rounded-full border border-[color:var(--color-rule)] bg-[oklch(96%_0.005_260)] p-1 text-sm"
				>
					{#each pattern.exampleSets as set (set.id)}
						{@const count = pattern.examples.filter((e) => e.set === set.id).length}
						<button
							type="button"
							role="tab"
							aria-selected={activeSet === set.id}
							onclick={() => (selectedSet = set.id)}
							class="rounded-full px-3 py-1.5 transition"
							class:bg-white={activeSet === set.id}
							class:shadow-sm={activeSet === set.id}
							class:font-medium={activeSet === set.id}
							class:text-[color:var(--color-ink-soft)]={activeSet !== set.id}
						>
							{set.label ?? set.id}
							<span class="ml-1 font-mono text-xs text-[color:var(--color-ink-soft)]">{count}</span>
						</button>
					{/each}
				</div>
			{/if}
		</div>

		{#if pattern.exampleSets?.length}
			{#if activeSetMeta}
				<div class="mb-4 border-l-2 border-[color:var(--color-rule)] pl-3">
					<h3 class="font-serif text-lg">{activeSetMeta.title}</h3>
					{#if activeSetMeta.description}
						<p class="text-sm text-[color:var(--color-ink-soft)]">{activeSetMeta.description}</p>
					{/if}
				</div>
			{/if}

			<div role="tabpanel" class="grid gap-4 lg:grid-cols-2">
				{#each activeSetExamples as example, i (`${activeSet}-${i}`)}
					<ExampleGloss {example} />
				{/each}
			</div>

			{#if ungroupedExamples.length}
				<div class="mt-6 grid gap-4 lg:grid-cols-2">
					{#each ungroupedExamples as example, i (i)}
						<ExampleGloss {example} />
					{/each}
				</div>
			{/if}
		{:else}
			<div class="grid gap-4 lg:grid-cols-2">
				{#each pattern.examples as example, i (i)}
					<ExampleGloss {example} />
				{/each}
			</div>
		{/if}
	</section>

	{#if pattern.polarity}
		<section class="rounded-3xl border border-dashed border-[color:var(--color-rule)] bg-[oklch(99%_0.003_260)] p-6">
			<header class="mb-4 flex flex-wrap items-baseline gap-3">
				<span class="rounded-full bg-[oklch(94%_0.04_15)] px-2 py-0.5 text-xs uppercase tracking-wide text-[oklch(28%_0.06_15)]">
					Polarity
				</span>
				<h2 class="font-serif text-2xl">{pattern.polarity.title ?? 'Polarity: positive ↔ negative'}</h2>
			</header>
			<p class="mb-6 max-w-3xl text-base">{pattern.polarity.summary}</p>

			<div class="mb-8">
				<h3 class="mb-3 font-serif text-xl">Affirmative ↔ negative contrasts</h3>
				<PolarityContrastTable contrasts={pattern.polarity.contrasts} />
			</div>

			{#if pattern.polarity.examples?.length}
				<div>
					<div class="mb-4 flex flex-wrap items-end justify-between gap-3">
						<div>
							<h3 class="font-serif text-xl">Negative examples</h3>
							{#if activeNegSetMeta?.description}
								<p class="text-sm text-[color:var(--color-ink-soft)]">{activeNegSetMeta.description}</p>
							{/if}
						</div>
						{#if pattern.polarity.exampleSets && pattern.polarity.exampleSets.length > 1}
							<div
								role="tablist"
								aria-label="Negative example set"
								class="inline-flex gap-1 rounded-full border border-[color:var(--color-rule)] bg-white p-1 text-sm"
							>
								{#each pattern.polarity.exampleSets as set (set.id)}
									{@const count = (pattern.polarity?.examples ?? []).filter((e) => e.set === set.id).length}
									<button
										type="button"
										role="tab"
										aria-selected={activeNegSet === set.id}
										onclick={() => (selectedNegSet = set.id)}
										class="rounded-full px-3 py-1.5 transition"
										class:bg-[oklch(96%_0.005_260)]={activeNegSet === set.id}
										class:font-medium={activeNegSet === set.id}
										class:text-[color:var(--color-ink-soft)]={activeNegSet !== set.id}
									>
										{set.label ?? set.id}
										<span class="ml-1 font-mono text-xs text-[color:var(--color-ink-soft)]">{count}</span>
									</button>
								{/each}
							</div>
						{/if}
					</div>

					{#if activeNegSetMeta}
						<div class="mb-4 border-l-2 border-[color:var(--color-rule)] pl-3">
							<h4 class="font-serif text-lg">{activeNegSetMeta.title}</h4>
						</div>
					{/if}

					<div role="tabpanel" class="grid gap-4 lg:grid-cols-2">
						{#each activeNegSetExamples as example, i (`${activeNegSet}-${i}`)}
							<ExampleGloss {example} />
						{/each}
					</div>
				</div>
			{/if}
		</section>
	{/if}

	<Bibliography citations={allCitations} />

	{#if pattern.related.length}
		<section>
			<h2 class="mb-4 font-serif text-2xl">Related patterns</h2>
			<ul class="flex flex-wrap gap-2">
				{#each pattern.related as rel (rel.slug)}
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
