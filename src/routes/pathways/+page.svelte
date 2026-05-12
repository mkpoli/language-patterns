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
</section>

<section class="mt-12 border-t border-[color:var(--color-rule)] pt-8">
	<h2 class="mb-4 font-serif text-2xl">{m.sister_sites_heading()}</h2>
	<a
		href="https://p.languagepatterns.org"
		target="_blank"
		rel="noopener"
		class="group flex flex-col gap-3 rounded-2xl border border-dashed border-[color:var(--color-rule)] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[oklch(70%_0.05_260)] hover:shadow-md sm:max-w-md"
	>
		<div class="flex items-center gap-2 text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]">
			<span class="rounded-full bg-[oklch(94%_0.04_15)] px-2 py-0.5">Sound change · external</span>
		</div>
		<h3 class="font-serif text-2xl leading-tight">{m.p_graveyard_title()}</h3>
		<p class="text-sm text-[color:var(--color-ink-soft)]">{m.p_graveyard_description()}</p>
		<div class="mt-auto flex items-center justify-between pt-2 text-sm">
			<span class="font-mono text-xs">{m.p_graveyard_cta()}</span>
			<span class="transition group-hover:translate-x-1">↗</span>
		</div>
	</a>
</section>
