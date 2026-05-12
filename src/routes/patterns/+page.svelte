<script lang="ts">
	import QuestionCard from '$lib/components/QuestionCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { patterns } from '$lib/data';
</script>

<Seo
	title="Patterns"
	description="Browse cross-linguistic patterns: existence expressions, non-possession, indefinites, and more — with comparison tables and aligned examples across many languages."
	path="/patterns"
	keywords={['typology', 'linguistic patterns', 'cross-linguistic', 'comparison']}
/>

<section class="pb-8">
	<p class="text-xs uppercase tracking-widest text-[color:var(--color-ink-soft)]">Patterns</p>
	<h1 class="font-serif text-3xl">How languages express the same idea differently</h1>
</section>

<section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each patterns as pattern (pattern.slug)}
		<QuestionCard
			question={pattern.question}
			title={pattern.title}
			summary={pattern.summary}
			href={`/patterns/${pattern.slug}`}
			category={pattern.category}
			kind="pattern"
		/>
	{/each}
</section>
