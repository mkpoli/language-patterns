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

	const illustrationRows = $derived(
		example.illustration
			? [
					{
						label: m.example_natural(),
						text: example.illustration.natural,
						mono: false,
						soft: false
					},
					{
						label: m.example_literal(),
						text: example.illustration.literal,
						mono: false,
						soft: true
					},
					{ label: m.example_gloss(), text: example.illustration.gloss, mono: true, soft: true }
				].filter((r) => r.text)
			: []
	);
</script>

<article class="rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-5">
	<header class="mb-3 flex items-center justify-between gap-3">
		<div class="flex items-baseline gap-2">
			<span class="font-medium">{lang.name}</span>
			{#if lang.endonym}
				<span class="font-serif text-sm text-[color:var(--color-ink-soft)]">· {lang.endonym}</span>
			{/if}
		</div>
		<div class="flex gap-1 rounded-full bg-[color:var(--color-surface-sunken)] p-1 text-xs">
			{#each modes as m (m.id)}
				<button
					type="button"
					class="rounded-full px-3 py-1 transition"
					class:bg-[color:var(--color-surface)]={mode === m.id}
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
				{m.example_in_context()}
			</div>
			<p class="font-serif text-base leading-snug">{example.illustration.original}</p>
			{#if example.illustration.transliteration}
				<p class="mt-0.5 text-xs text-[color:var(--color-ink-soft)] italic">
					{example.illustration.transliteration}
				</p>
			{/if}
			<dl class="mt-2 grid grid-cols-[max-content_1fr] gap-x-3 gap-y-0.5 text-xs">
				{#each illustrationRows as row (row.label)}
					<dt
						class="font-mono text-[10px] tracking-wide text-[color:var(--color-ink-soft)] uppercase"
					>
						{row.label}
					</dt>
					<dd
						class:font-medium={!row.soft}
						class:font-mono={row.mono}
						class:text-[color:var(--color-ink-soft)]={row.soft}
					>
						{row.text}
					</dd>
				{/each}
			</dl>
		</div>
	{/if}

	{#if example.sources?.length || example.citationNeeded}
		<footer class="mt-3 border-t border-[color:var(--color-rule)] pt-2">
			<CitationMark citations={example.sources} citationNeeded={example.citationNeeded} />
		</footer>
	{/if}
</article>
