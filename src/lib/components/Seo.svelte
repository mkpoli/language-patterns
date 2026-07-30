<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import { OG_LOCALE, SITE_NAME, SITE_URL, TWITTER_HANDLE, alternates, canonical, truncate } from '$lib/seo';

	interface Props {
		title: string;
		description: string;
		path: string;
		type?: 'website' | 'article';
		image?: string;
		keywords?: string[];
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
		noIndex?: boolean;
	}
	let {
		title,
		description,
		path,
		type = 'website',
		image,
		keywords,
		jsonLd,
		noIndex = false
	}: Props = $props();

	const locale = $derived(getLocale());
	const url = $derived(canonical(path, locale));
	const localeAlternates = $derived(alternates(path));
	const fullTitle = $derived(title === SITE_NAME ? title : `${title} · ${SITE_NAME}`);
	const desc = $derived(truncate(description));
	const ogImage = $derived(image ?? `${SITE_URL}/og.png`);
	const ld = $derived(jsonLd ? JSON.stringify(jsonLd) : null);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={desc} />
	{#if keywords?.length}<meta name="keywords" content={keywords.join(', ')} />{/if}
	<link rel="canonical" href={url} />
	{#each localeAlternates as alt (alt.hreflang)}
		<link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
	{/each}
	{#if noIndex}<meta name="robots" content="noindex,nofollow" />{/if}

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={desc} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:locale" content={OG_LOCALE[locale]} />
	{#each localeAlternates.filter((a) => a.hreflang !== 'x-default' && a.hreflang !== locale) as alt (alt.hreflang)}
		<meta property="og:locale:alternate" content={OG_LOCALE[alt.hreflang as keyof typeof OG_LOCALE]} />
	{/each}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={ogImage} />
	{#if TWITTER_HANDLE}<meta name="twitter:site" content={TWITTER_HANDLE} />{/if}

	{#if ld}
		{@html `<script type="application/ld+json">${ld.replace(/</g, '\\u003c')}<\/script>`}
	{/if}
</svelte:head>
