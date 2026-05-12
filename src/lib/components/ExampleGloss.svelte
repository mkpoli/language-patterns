<script lang="ts">
	import type { Example } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';
	import { m } from '$lib/paraglide/messages.js';
	import CitationMark from './CitationMark.svelte';

	interface Props {
		example: Example;
	}
	let { example }: Props = $props();
	type Mode = 'natural' | 'literal' | 'gloss';
	let mode: Mode = $state<Mode>('natural');

	const lang = $derived(getLanguage(example.language));
	const headlineLabel = $derived(
		mode === 'natural' ? m.example_natural() : mode === 'literal' ? m.example_literal() : m.example_gloss()
	);
	const headlineText = $derived(
		mode === 'natural'
			? example.natural
			: mode === 'literal'
				? example.literal
				: (example.gloss ?? '— no gloss provided —')
	);

	const modes = $derived([
		{ id: 'natural' as Mode, label: m.example_natural() },
		{ id: 'literal' as Mode, label: m.example_literal() },
		{ id: 'gloss' as Mode, label: m.example_gloss() }
	]);
</script>

<article class="rounded-2xl border border-[color:var(--color-rule)] bg-white p-5">
	<header class="mb-3 flex items-center justify-between gap-3">
		<div class="flex items-baseline gap-2">
			<span class="font-medium">{lang.name}</span>
			{#if lang.endonym}
				<span class="font-serif text-sm text-[color:var(--color-ink-soft)]">· {lang.endonym}</span>
			{/if}
		</div>
		<div class="flex gap-1 rounded-full bg-[oklch(96%_0.005_260)] p-1 text-xs">
			{#each modes as m (m.id)}
				<button
					type="button"
					class="rounded-full px-3 py-1 transition"
					class:bg-white={mode === m.id}
					class:shadow-sm={mode === m.id}
					onclick={() => (mode = m.id)}
				>
					{m.label}
				</button>
			{/each}
		</div>
	</header>

	<p class="font-serif text-xl leading-snug">{example.original}</p>
	{#if example.transliteration}
		<p class="mt-1 text-sm italic text-[color:var(--color-ink-soft)]">
			{example.transliteration}
		</p>
	{/if}

	<dl class="mt-4 grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1 text-sm">
		<dt class="font-mono text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]">
			{headlineLabel}
		</dt>
		<dd class="font-medium">{headlineText}</dd>
	</dl>

	{#if example.sources?.length}
		<footer class="mt-3 border-t border-[color:var(--color-rule)] pt-2">
			<CitationMark citations={example.sources} />
		</footer>
	{/if}
</article>
