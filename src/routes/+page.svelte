<script lang="ts">
	import QuestionCard from '$lib/components/QuestionCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { topics } from '$lib/data';
	import { SITE_NAME, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_URL } from '$lib/seo';
	import { m } from '$lib/paraglide/messages.js';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: SITE_NAME,
		url: SITE_URL,
		description: SITE_DESCRIPTION,
		potentialAction: {
			'@type': 'SearchAction',
			target: `${SITE_URL}/?q={search_term_string}`,
			'query-input': 'required name=search_term_string'
		}
	};
</script>

<Seo
	title={SITE_NAME}
	description={SITE_DESCRIPTION}
	path="/"
	keywords={SITE_KEYWORDS}
	{jsonLd}
/>

<section class="flex flex-col gap-4 pb-10">
	<p class="text-xs uppercase tracking-widest text-[color:var(--color-ink-soft)]">
		{m.home_eyebrow()}
	</p>
	<h1 class="font-serif text-4xl leading-tight sm:text-5xl">
		{m.home_title()}
	</h1>
	<p class="max-w-2xl text-base text-[color:var(--color-ink-soft)]">
		{m.home_subtitle()}
	</p>
</section>

<section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each topics as topic (topic.slug)}
		<QuestionCard
			question={topic.question}
			title={topic.title}
			summary={topic.summary}
			href={`/${topic.kind === 'pattern' ? 'patterns' : 'pathways'}/${topic.slug}`}
			category={topic.category}
			kind={topic.kind}
		/>
	{/each}
</section>
