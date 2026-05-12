<script lang="ts">
	import { locales, getLocale, setLocale, type Locale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';

	const labels: Record<Locale, string> = {
		en: 'English',
		zh: '中文',
		ja: '日本語'
	};

	function switchTo(locale: Locale) {
		// Paraglide setLocale handles the cookie and triggers a reload by default.
		setLocale(locale);
	}

	const current = $derived(getLocale());
</script>

<div role="group" aria-label={m.language_switcher_label()} class="inline-flex gap-1 rounded-full border border-[color:var(--color-rule)] bg-white p-0.5 text-xs">
	{#each locales as locale (locale)}
		<button
			type="button"
			class="rounded-full px-2 py-1 transition"
			class:bg-[oklch(94%_0.04_230)]={current === locale}
			class:font-medium={current === locale}
			class:text-[color:var(--color-ink-soft)]={current !== locale}
			aria-pressed={current === locale}
			onclick={() => switchTo(locale)}
		>
			{labels[locale]}
		</button>
	{/each}
</div>
