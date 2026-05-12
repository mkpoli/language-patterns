<script lang="ts">
	import QuestionCard from '$lib/components/QuestionCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pathways } from '$lib/data';
	import { m } from '$lib/paraglide/messages.js';
</script>

<Seo
	title="Pathways"
	description="Directional and cyclic changes in language: Jespersen's Cycle, grammaticalization pathways, sound change routes — with comparative historical timelines."
	path="/pathways"
	keywords={['historical linguistics', 'grammaticalization', "Jespersen's Cycle", 'language change']}
/>

<section class="pb-8">
	<p class="text-xs uppercase tracking-widest text-[color:var(--color-ink-soft)]">Pathways</p>
	<h1 class="font-serif text-3xl">How languages change — directionally and recurrently</h1>
</section>

<section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each pathways as pathway (pathway.slug)}
		<QuestionCard
			question={pathway.question}
			title={pathway.title}
			summary={pathway.summary}
			href={`/pathways/${pathway.slug}`}
			category={['Cycles & Pathways']}
			kind="pathway"
		/>
	{/each}

	<QuestionCard
		question="How does /p/ disappear?"
		title={m.p_graveyard_title()}
		summary={m.p_graveyard_description()}
		href="https://p.languagepatterns.org"
		category={['Sound change']}
		kind="pathway"
		external
	/>
</section>
