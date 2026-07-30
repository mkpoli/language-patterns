<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import QuestionCard from '$lib/components/QuestionCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { getFacet, localized, tagIndex } from '$lib/data';
	import { strategyColor } from '$lib/strategyColor';
	import { m } from '$lib/paraglide/messages.js';

	let { data } = $props();
	const tag = $derived(data.tag);
	const facet = $derived(getFacet(tag.facet));
	const label = $derived(localized(tag.label));
	const definition = $derived(localized(tag.definition));
	const facetLabel = $derived(localized(facet.label));
	const color = $derived(strategyColor(facet.color));
	const siblings = $derived(
		(tagIndex.find((g) => g.facet.id === tag.facet)?.entries ?? []).filter(
			(e) => e.tag.id !== tag.id
		)
	);
</script>

<Seo
	title={`${label} — ${facetLabel}`}
	description={`${definition} ${data.topics.length} topic${data.topics.length === 1 ? '' : 's'} on Language Patterns carry this tag.`}
	path={`/tags/${tag.id}`}
	keywords={[label, tag.label.en, facetLabel, 'linguistic typology', 'cross-linguistic']}
/>

<article class="flex flex-col gap-8">
	<header class="flex flex-col gap-3">
		<p class="text-xs tracking-widest text-[color:var(--color-ink-soft)] uppercase">
			<a href={localizeHref("/tags")} class="hover:underline">{m.nav_tags()}</a>
			· {facetLabel}
		</p>
		<h1 class="font-serif text-4xl leading-tight">
			<span
				class="rounded-full border px-3 py-1"
				style={`background:${color.soft};border-color:${color.border};color:${color.textOn}`}
			>
				{label}
			</span>
		</h1>
		<p class="max-w-3xl text-base text-[color:var(--color-ink-soft)]">{definition}</p>
	</header>

	<section>
		<h2 class="mb-4 font-serif text-2xl">{m.tags_topics_heading()}</h2>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.topics as topic (topic.slug)}
				<QuestionCard
					question={topic.question}
					title={topic.title}
					summary={topic.summary}
					href={localizeHref(`/${topic.kind === 'pattern' ? 'patterns' : 'pathways'}/${topic.slug}`)}
					tags={topic.tags}
					kind={topic.kind}
				/>
			{/each}
		</div>
	</section>

	{#if siblings.length}
		<section>
			<h2 class="mb-3 font-serif text-xl">{m.tags_more_in_facet()}</h2>
			<div class="flex flex-wrap gap-2">
				{#each siblings as sibling (sibling.tag.id)}
					<a
						href={localizeHref(`/tags/${sibling.tag.id}`)}
						title={localized(sibling.tag.definition)}
						class="rounded-full border px-3 py-1 text-sm transition hover:brightness-95 dark:hover:brightness-125"
						style={`background:${color.soft};border-color:${color.border};color:${color.textOn}`}
					>
						{localized(sibling.tag.label)}
						<span class="opacity-60">{sibling.count}</span>
					</a>
				{/each}
			</div>
		</section>
	{/if}
</article>
