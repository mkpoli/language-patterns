<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '$lib/seo';

	let { children } = $props();

	const orgJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: SITE_NAME,
		url: SITE_URL,
		description: SITE_DESCRIPTION,
		inLanguage: 'en',
		publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#fafaf5" />
	<meta name="format-detection" content="telephone=no" />
	{@html `<script type="application/ld+json">${JSON.stringify(orgJsonLd)}<\/script>`}
</svelte:head>

<div class="mx-auto flex min-h-screen max-w-6xl flex-col px-6">
	<header class="flex items-center justify-between border-b border-[color:var(--color-rule)] py-4">
		<a href="/" class="flex items-center gap-3">
			<svg viewBox="0 0 40 40" class="h-8 w-8" aria-hidden="true">
				<circle cx="20" cy="20" r="18" fill="oklch(94% 0.04 230)" />
				<path d="M10 22 Q15 12 20 22 T 30 22" fill="none" stroke="oklch(45% 0.1 230)" stroke-width="2" stroke-linecap="round" />
				<circle cx="14" cy="24" r="2" fill="oklch(75% 0.1 75)" />
				<circle cx="20" cy="20" r="2" fill="oklch(75% 0.1 155)" />
				<circle cx="26" cy="24" r="2" fill="oklch(70% 0.1 295)" />
			</svg>
			<div>
				<div class="font-serif text-lg font-semibold leading-tight">Language Patterns</div>
				<div class="text-xs text-[color:var(--color-ink-soft)]">
					Recurring patterns across languages, space, and time.
				</div>
			</div>
		</a>
		<nav class="flex items-center gap-4 text-sm">
			<a href="/patterns" class="hover:underline">Patterns</a>
			<a href="/pathways" class="hover:underline">Pathways</a>
			<a href="/atlas" class="hover:underline">Atlas</a>
		</nav>
	</header>

	<main class="flex-1 py-10">
		{@render children()}
	</main>

	<footer class="border-t border-[color:var(--color-rule)] py-6 text-xs text-[color:var(--color-ink-soft)]">
		Language Patterns — PoC. Cross-linguistic typology and diachrony. Seed data is illustrative; sources to be added.
	</footer>
</div>
