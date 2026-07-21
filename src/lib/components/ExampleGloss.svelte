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
		mode === 'natural'
			? m.example_natural()
			: mode === 'literal'
				? m.example_literal()
				: m.example_gloss()
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
		<p class="mt-1 text-sm text-[color:var(--color-ink-soft)] italic">
			{example.transliteration}
		</p>
	{/if}

	<dl class="mt-4 grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1 text-sm">
		<dt class="font-mono text-xs tracking-wide text-[color:var(--color-ink-soft)] uppercase">
			{headlineLabel}
		</dt>
		<dd class="font-medium">{headlineText}</dd>
	</dl>

	{#if example.illustration}
		<div class="mt-4 border-t border-[color:var(--color-rule)] pt-3">
			<div
				class="mb-1.5 font-mono text-[10px] tracking-[0.12em] text-[color:var(--color-ink-soft)] uppercase"
			>
				In context
			</div>
			<p class="font-serif text-base leading-snug">{example.illustration.original}</p>
			{#if example.illustration.transliteration}
				<p class="mt-0.5 text-xs text-[color:var(--color-ink-soft)] italic">
					{example.illustration.transliteration}
				</p>
			{/if}
			<dl class="mt-2 grid grid-cols-[max-content_1fr] gap-x-3 gap-y-0.5 text-xs">
				{#if example.illustration.natural}
					<dt
						class="font-mono text-[10px] tracking-wide text-[color:var(--color-ink-soft)] uppercase"
					>
						means
					</dt>
					<dd class="font-medium">{example.illustration.natural}</dd>
				{/if}
				{#if example.illustration.literal}
					<dt
						class="font-mono text-[10px] tracking-wide text-[color:var(--color-ink-soft)] uppercase"
					>
						lit.
					</dt>
					<dd class="text-[color:var(--color-ink-soft)]">{example.illustration.literal}</dd>
				{/if}
				{#if example.illustration.gloss}
					<dt
						class="font-mono text-[10px] tracking-wide text-[color:var(--color-ink-soft)] uppercase"
					>
						gloss
					</dt>
					<dd class="font-mono text-[color:var(--color-ink-soft)]">{example.illustration.gloss}</dd>
				{/if}
			</dl>
		</div>
	{/if}

	{#if example.sources?.length}
		<footer class="mt-3 border-t border-[color:var(--color-rule)] pt-2">
			<CitationMark citations={example.sources} />
		</footer>
	{/if}
</article>
