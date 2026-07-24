<script lang="ts">
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';

	type ThemeMode = 'auto' | 'light' | 'dark';

	let mode: ThemeMode = $state('auto');

	const next: Record<ThemeMode, ThemeMode> = { auto: 'light', light: 'dark', dark: 'auto' };

	const label = $derived(
		mode === 'auto'
			? m.theme_toggle_auto()
			: mode === 'light'
				? m.theme_toggle_light()
				: m.theme_toggle_dark()
	);

	function apply(nextMode: ThemeMode) {
		if (nextMode === 'auto') {
			delete document.documentElement.dataset.theme;
			localStorage.removeItem('theme');
		} else {
			document.documentElement.dataset.theme = nextMode;
			localStorage.setItem('theme', nextMode);
		}
	}

	onMount(() => {
		const stored = localStorage.getItem('theme');
		if (stored === 'light' || stored === 'dark') mode = stored;
	});

	function cycle() {
		mode = next[mode];
		apply(mode);
	}
</script>

<button
	type="button"
	onclick={cycle}
	aria-label={label}
	title={label}
	class="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] text-[color:var(--color-ink-soft)] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-ink)]"
>
	{#if mode === 'light'}
		<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
		</svg>
	{:else if mode === 'dark'}
		<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
		</svg>
	{:else}
		<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
			<circle cx="12" cy="12" r="9" />
			<path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
		</svg>
	{/if}
</button>
