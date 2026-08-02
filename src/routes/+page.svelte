<script lang="ts">
	import FeaturedRotator from '$lib/components/FeaturedRotator.svelte';
	import SentenceSets from '$lib/components/SentenceSets.svelte';
	import PatternExplorer from '$lib/components/PatternExplorer.svelte';
	import PathwayTrack from '$lib/components/PathwayTrack.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import HeroFigure from '$lib/components/HeroFigure.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { pathways } from '$lib/data';
	import { scale } from '$lib/home';
	import { featured } from '$lib/featured.svelte';
	import { SITE_NAME, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_URL } from '$lib/seo';
	import { m } from '$lib/paraglide/messages.js';

	const counts = scale();

	const figures = [
		{ value: counts.languages, label: m.home_stat_languages() },
		{ value: counts.families, label: m.home_stat_families() },
		{ value: counts.forms, label: m.home_stat_forms() },
		{ value: counts.sentences, label: m.home_stat_sentences() },
		{ value: counts.patterns, label: m.home_stat_patterns() },
		{ value: counts.pathways, label: m.home_stat_pathways() }
	];

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

<Seo title={SITE_NAME} description={SITE_DESCRIPTION} path="/" keywords={SITE_KEYWORDS} {jsonLd} />

<section
	class="relative grid gap-8 overflow-hidden pb-10 lg:grid-cols-[1fr_minmax(0,34rem)] lg:items-start lg:gap-12"
>
	<p
		class="pointer-events-none absolute -top-4 -left-6 -z-10 max-w-[60rem] font-serif leading-[0.95] text-[color:var(--color-ink)] opacity-[0.055] select-none"
		style="font-size: clamp(3.5rem, 11vw, 8rem)"
		aria-hidden="true"
		lang="en"
	>
		{featured.caption}
	</p>
	<div class="flex flex-col gap-4 lg:self-center">
		<p class="text-xs tracking-widest text-[color:var(--color-ink-soft)] uppercase">
			{m.home_eyebrow()}
		</p>
		<h1 class="font-serif text-4xl leading-tight sm:text-5xl">
			{m.home_title()}
		</h1>
		<p class="max-w-xl text-base text-[color:var(--color-ink-soft)]">
			{m.home_subtitle()}
		</p>
		<a
			href={localizeHref('/atlas')}
			class="group mt-1 inline-flex items-center gap-2 self-start border-b border-[color:var(--color-rule)] pb-1 text-sm hover:border-[color:var(--color-accent)]"
		>
			{m.home_atlas_cta()}
			<span class="transition-transform group-hover:translate-x-1">→</span>
		</a>
		<div class="mt-4 max-w-md">
			<HeroFigure />
		</div>
	</div>
	<FeaturedRotator />
</section>

<dl
	class="mb-14 grid grid-cols-3 gap-4 border-y border-[color:var(--color-rule)] py-6 lg:grid-cols-6"
>
	{#each figures as figure (figure.label)}
		<div class="flex flex-col-reverse items-center gap-0.5 text-center">
			<dt class="text-xs tracking-wide text-[color:var(--color-ink-faint)] uppercase">
				{figure.label}
			</dt>
			<dd class="font-serif text-3xl leading-tight">{figure.value}</dd>
		</div>
	{/each}
</dl>

<section class="flex flex-col gap-5 pb-14">
	<header class="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
		<div class="flex flex-col gap-1">
			<p class="text-xs tracking-widest text-[color:var(--color-ink-faint)] uppercase">
				{m.nav_patterns()}
			</p>
			<h2 class="font-serif text-2xl leading-snug">{m.home_patterns_heading()}</h2>
		</div>
		<a
			href={localizeHref('/patterns')}
			class="text-sm text-[color:var(--color-ink-soft)] underline-offset-4 hover:text-[color:var(--color-ink)] hover:underline"
		>
			{m.home_all_patterns()} →
		</a>
	</header>
	<PatternExplorer />
</section>

<section class="flex flex-col gap-5 pb-14">
	<header class="flex flex-col gap-1">
		<p class="text-xs tracking-widest text-[color:var(--color-ink-faint)] uppercase">
			{m.section_examples()}
		</p>
		<h2 class="font-serif text-2xl leading-snug">{m.home_sentences_heading()}</h2>
		<p class="max-w-2xl text-sm text-[color:var(--color-ink-soft)]">{m.home_sentences_hint()}</p>
	</header>
	<SentenceSets />
</section>

<section class="flex flex-col gap-5 pb-10">
	<header class="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
		<div class="flex flex-col gap-1">
			<p class="text-xs tracking-widest text-[color:var(--color-ink-faint)] uppercase">
				{m.nav_pathways()}
			</p>
			<h2 class="font-serif text-2xl leading-snug">{m.home_pathways_heading()}</h2>
		</div>
		<a
			href={localizeHref('/pathways')}
			class="text-sm text-[color:var(--color-ink-soft)] underline-offset-4 hover:text-[color:var(--color-ink)] hover:underline"
		>
			{m.home_all_pathways()} →
		</a>
	</header>
	<div class="grid gap-4 md:grid-cols-2">
		{#each pathways as pathway (pathway.slug)}
			<PathwayTrack {pathway} />
		{/each}
	</div>
</section>
