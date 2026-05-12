<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { SITE_URL, SITE_DESCRIPTION } from '$lib/seo';
	import { m } from '$lib/paraglide/messages.js';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

	let { children } = $props();

	const orgJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: m.site_name(),
		url: SITE_URL,
		description: SITE_DESCRIPTION,
		inLanguage: 'en',
		publisher: { '@type': 'Organization', name: m.site_name(), url: SITE_URL }
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/" />
	<meta name="theme-color" content="#fafaf5" />
	<meta name="format-detection" content="telephone=no" />
	{@html `<script type="application/ld+json">${JSON.stringify(orgJsonLd)}<\/script>`}
</svelte:head>

<div class="mx-auto flex min-h-screen max-w-6xl flex-col px-6">
	<header class="flex flex-wrap items-center justify-between gap-3 border-b border-[color:var(--color-rule)] py-4">
		<a href="/" class="flex items-center gap-3">
			<svg viewBox="0 0 40 40" class="h-8 w-8" aria-hidden="true">
				<circle cx="20" cy="20" r="18" fill="oklch(94% 0.04 230)" />
				<path
					d="M10 22 Q15 12 20 22 T 30 22"
					fill="none"
					stroke="oklch(45% 0.1 230)"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<circle cx="14" cy="24" r="2" fill="oklch(75% 0.1 75)" />
				<circle cx="20" cy="20" r="2" fill="oklch(75% 0.1 155)" />
				<circle cx="26" cy="24" r="2" fill="oklch(70% 0.1 295)" />
			</svg>
			<div>
				<div class="font-serif text-lg font-semibold leading-tight">{m.site_name()}</div>
				<div class="text-xs text-[color:var(--color-ink-soft)]">{m.site_tagline()}</div>
			</div>
		</a>
		<nav class="flex items-center gap-4 text-sm">
			<a href="/patterns" class="hover:underline">{m.nav_patterns()}</a>
			<a href="/pathways" class="hover:underline">{m.nav_pathways()}</a>
			<a href="/atlas" class="hover:underline">{m.nav_atlas()}</a>
			<LanguageSwitcher />
		</nav>
	</header>

	<main class="flex-1 py-10">{@render children()}</main>

	<footer class="flex flex-col gap-1 border-t border-[color:var(--color-rule)] py-6 text-xs text-[color:var(--color-ink-soft)]">
		<div>{m.footer_text()}</div>
		<div>{@html m.footer_license_html()}</div>
	</footer>
</div>
