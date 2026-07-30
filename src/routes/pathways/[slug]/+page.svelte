<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import StageCard from '$lib/components/StageCard.svelte';
	import CycleDiagram from '$lib/components/CycleDiagram.svelte';
	import HistoricalTimeline from '$lib/components/HistoricalTimeline.svelte';
	import ExampleGloss from '$lib/components/ExampleGloss.svelte';
	import Bibliography from '$lib/components/Bibliography.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import Corrections from '$lib/components/Corrections.svelte';
	import TagList from '$lib/components/TagList.svelte';
	import Toc from '$lib/components/toc/Toc.svelte';
	import { SITE_NAME, SITE_URL } from '$lib/seo';
	import { getSource } from '$lib/data/sources';
	import StageFlow from '$lib/components/StageFlow.svelte';
	import PatternMap from '$lib/components/PatternMap.svelte';
	import { getLanguage } from '$lib/data/languages';
	import { sortTags } from '$lib/data';
	import { m } from '$lib/paraglide/messages.js';

	let { data } = $props();
	const pathway = $derived(data.pathway);

	let selectedSet: string | null = $state(null);
	const activeSet = $derived(selectedSet ?? pathway.exampleSets?.[0]?.id ?? '');
	const activeSetMeta = $derived(pathway.exampleSets?.find((s) => s.id === activeSet));
	const activeSetExamples = $derived((pathway.examples ?? []).filter((e) => e.set === activeSet));
	const ungroupedExamples = $derived((pathway.examples ?? []).filter((e) => !e.set));

	const timelineStartYear = $derived.by(() => {
		if (!pathway.bands.length) return 1000;
		const min = Math.min(...pathway.bands.map((b) => b.uncertaintyStart ?? b.start));
		return Math.floor((min - 50) / 200) * 200;
	});
	const timelineEndYear = $derived.by(() => {
		if (!pathway.bands.length) return 2000;
		const max = Math.max(...pathway.bands.map((b) => b.uncertaintyEnd ?? b.end));
		return Math.ceil((max + 50) / 200) * 200;
	});

	// One color per example set, assigned in exampleSets declaration order.
	// Slate is reserved for languages attested in more than one set (or none).
	const SET_PALETTE = ['emerald', 'violet', 'sky', 'amber', 'rose'] as const;
	type SetColor = (typeof SET_PALETTE)[number] | 'slate';

	const setColorById = $derived.by(() => {
		const map = new Map<string, SetColor>();
		(pathway.exampleSets ?? []).forEach((s, i) => {
			map.set(s.id, SET_PALETTE[i % SET_PALETTE.length]);
		});
		return map;
	});

	const setLabelById = $derived(
		new Map((pathway.exampleSets ?? []).map((s) => [s.id, s.label ?? s.id]))
	);

	const mapMarkers = $derived.by(() => {
		interface Bucket {
			code: string;
			expressions: string[];
			groups: Set<string>;
		}
		const byCode = new Map<string, Bucket>();
		for (const e of pathway.examples ?? []) {
			const lang = getLanguage(e.language);
			if (lang.lat == null || lang.lng == null) continue;
			let bucket = byCode.get(e.language);
			if (!bucket) {
				bucket = { code: e.language, expressions: [], groups: new Set() };
				byCode.set(e.language, bucket);
			}
			bucket.expressions.push(e.original);
			if (e.set) bucket.groups.add(e.set);
		}
		return [...byCode.values()].map((b) => {
			const setIds = [...b.groups];
			const color: SetColor =
				setIds.length === 1 ? (setColorById.get(setIds[0]) ?? 'slate') : 'slate';
			const note = setIds.length
				? setIds.map((id) => setLabelById.get(id) ?? id).join(' · ')
				: undefined;
			return { code: b.code, expression: b.expressions.join('  ·  '), note, color };
		});
	});

	const mapLegend = $derived.by(() => {
		const usedSets = new Set(
			(pathway.examples ?? []).map((e) => e.set).filter((s): s is string => Boolean(s))
		);
		const items: { label: string; color: SetColor }[] = [];
		for (const s of pathway.exampleSets ?? []) {
			if (usedSets.has(s.id)) {
				items.push({ label: s.label ?? s.id, color: setColorById.get(s.id) ?? 'slate' });
			}
		}
		if (mapMarkers.some((mk) => mk.color === 'slate')) {
			const anyMultiSet = mapMarkers.some((mk) => mk.color === 'slate' && mk.note);
			items.push({
				label: anyMultiSet ? m.legend_several_sets() : m.legend_ungrouped(),
				color: 'slate'
			});
		}
		return items;
	});

	const tagLabels = $derived(sortTags(pathway.tags).map((t) => t.label));

	const allCitations = $derived([
		...(pathway.sources ?? []),
		...pathway.stages.flatMap((s) => s.sources ?? []),
		...pathway.bands.flatMap((b) => b.sources ?? []),
		...(pathway.examples ?? []).flatMap((e) => e.sources ?? [])
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
		about: [...tagLabels, 'historical linguistics', pathway.kind],
		citation: (pathway.sources ?? []).map((c) => {
			const s = getSource(c.source);
			return {
				'@type': 'CreativeWork',
				name: s.title,
				author: s.authors.join('; '),
				datePublished: String(s.year)
			};
		})
	});
</script>

<Seo
	title={pathway.title}
	description={pathway.summary}
	path={`/pathways/${pathway.slug}`}
	type="article"
	keywords={[
		pathway.title,
		pathway.shortTitle,
		...tagLabels,
		'historical linguistics',
		'language change'
	]}
	{jsonLd}
/>

<article class="flex flex-col gap-10">
	<header class="flex flex-col gap-3">
		<div
			class="flex items-center gap-2 text-xs tracking-wide text-[color:var(--color-ink-soft)] uppercase"
		>
			<span class="rounded-full bg-[color:var(--color-violet-soft)] px-2 py-0.5">{m.label_pathway()}</span>
			<span>· {pathway.kind}</span>
		</div>
		<h1 class="font-serif text-4xl leading-tight">{pathway.title}</h1>
		<p class="text-lg text-[color:var(--color-ink-soft)] italic">{pathway.question}</p>
		<p class="max-w-3xl text-base">{pathway.summary}</p>
		<TagList tags={pathway.tags} />
	</header>

	<Toc />

	{#if pathway.kind === 'cycle'}
		<section class="grid gap-8 lg:grid-cols-[1fr_minmax(0,400px)] lg:items-start">
			<div>
				<h2 class="mb-4 font-serif text-2xl">{m.section_stages()}</h2>
				<div class="grid gap-4 sm:grid-cols-2">
					{#each pathway.stages as stage (stage.id)}
						<StageCard {stage} {pathway} />
					{/each}
				</div>
			</div>
			<div>
				<h2 class="mb-4 font-serif text-2xl">{m.section_cycle()}</h2>
				<CycleDiagram stages={pathway.stages} />
			</div>
		</section>
	{:else}
		<section>
			<h2 class="mb-4 font-serif text-2xl">{m.section_stages()}</h2>
			<StageFlow stages={pathway.stages} {pathway} />
		</section>
	{/if}

	{#if pathway.examples?.length}
		<section>
			<div class="mb-4 flex flex-wrap items-end justify-between gap-3">
				<div>
					<h2 class="font-serif text-2xl">{m.section_crosslinguistic_evidence()}</h2>
					{#if pathway.evidenceNote}
						<p class="max-w-3xl text-sm text-[color:var(--color-ink-soft)]">
							{pathway.evidenceNote}
						</p>
					{/if}
				</div>

				{#if pathway.exampleSets?.length && pathway.exampleSets.length > 1}
					<div
						role="tablist"
						aria-label="Example set"
						class="inline-flex gap-1 rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-surface-sunken)] p-1 text-sm"
					>
						{#each pathway.exampleSets as set (set.id)}
							{@const count = (pathway.examples ?? []).filter((e) => e.set === set.id).length}
							<button
								type="button"
								role="tab"
								aria-selected={activeSet === set.id}
								onclick={() => (selectedSet = set.id)}
								class="rounded-full px-3 py-1.5 transition"
								class:bg-[color:var(--color-surface)]={activeSet === set.id}
								class:shadow-sm={activeSet === set.id}
								class:font-medium={activeSet === set.id}
								class:text-[color:var(--color-ink-soft)]={activeSet !== set.id}
							>
								{set.label ?? set.id}
								<span class="ml-1 font-mono text-xs text-[color:var(--color-ink-soft)]"
									>{count}</span
								>
							</button>
						{/each}
					</div>
				{/if}
			</div>

			{#if pathway.exampleSets?.length}
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
					{#each pathway.examples as example, i (`${example.language}-${i}`)}
						<ExampleGloss {example} />
					{/each}
				</div>
			{/if}
		</section>
	{/if}

	{#if mapMarkers.length}
		<section>
			<h2 class="mb-1 font-serif text-2xl">{m.section_geographic_distribution()}</h2>
			<p class="mb-4 max-w-3xl text-sm text-[color:var(--color-ink-soft)]">
				{m.section_geographic_distribution_hint_sets()}
			</p>
			<PatternMap markers={mapMarkers} legend={mapLegend} />
		</section>
	{/if}

	{#if pathway.bands.length}
		<section>
			<h2 class="mb-1 font-serif text-2xl">{m.section_comparative_timeline()}</h2>
			<p class="mb-4 max-w-3xl text-sm text-[color:var(--color-ink-soft)]">
				{m.section_comparative_timeline_hint()}
			</p>
			<HistoricalTimeline {pathway} startYear={timelineStartYear} endYear={timelineEndYear} />
		</section>
	{/if}

	{#if pathway.neighboringShifts?.length}
		<section>
			<h2 class="mb-1 font-serif text-2xl">{m.section_neighboring_shifts()}</h2>
			<p class="mb-4 max-w-3xl text-sm text-[color:var(--color-ink-soft)]">
				{m.section_neighboring_shifts_hint()}
			</p>
			<ul class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
				{#each pathway.neighboringShifts as shift (shift.url)}
					<li
						class="rounded-lg border border-[color:var(--color-rule)] bg-white px-3 py-2 text-sm"
					>
						<a href={shift.url} class="font-mono font-medium hover:underline">
							{shift.schematic}
						</a>
						<span class="ml-1 text-xs text-[color:var(--color-ink-soft)]">
							{#if shift.realizations != null}{shift.realizations}×{/if}
							{#if shift.status === 'proposed'}({m.status_proposed()}){/if}
						</span>
						{#if shift.note}
							<p class="mt-1 text-xs text-[color:var(--color-ink-soft)]">{shift.note}</p>
						{/if}
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	<Bibliography citations={allCitations} />

	{#if pathway.related.length}
		<section>
			<h2 class="mb-4 font-serif text-2xl">{m.section_related_patterns()}</h2>
			<ul class="flex flex-wrap gap-2">
				{#each pathway.related as rel (rel.slug)}
					<li>
						<a
							href={localizeHref(`/${rel.kind === 'pattern' ? 'patterns' : 'pathways'}/${rel.slug}`)}
							class="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] px-3 py-1.5 text-sm hover:border-[color:var(--color-accent)]"
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

	<Corrections kind="pathway" slug={pathway.slug} title={pathway.title} />
</article>
