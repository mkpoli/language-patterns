<script lang="ts">
	import { page } from '$app/state';
	import { locales, getLocale, localizeHref, deLocalizeHref, type Locale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';

	const labels: Record<Locale, string> = {
		en: 'English',
		zh: '中文',
		ja: '日本語'
	};

	const current = $derived(getLocale());

	// Each locale points at the same page under its own prefix, so the choice is
	// a normal link: shareable, openable in a new tab, visible to a crawler.
	// Pathname only — a query string is unreadable while prerendering.
	const bare = $derived(deLocalizeHref(page.url.pathname));
</script>

<nav aria-label={m.language_switcher_label()} class="inline-flex gap-1 rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-0.5 text-xs">
	{#each locales as locale (locale)}
		<a
			href={localizeHref(bare, { locale })}
			hreflang={locale}
			lang={locale}
			data-sveltekit-reload
			aria-current={current === locale ? 'true' : undefined}
			class="rounded-full px-2 py-1 transition"
			class:bg-[color:var(--color-sky-soft)]={current === locale}
			class:font-medium={current === locale}
			class:text-[color:var(--color-ink-soft)]={current !== locale}
		>
			{labels[locale]}
		</a>
	{/each}
</nav>
