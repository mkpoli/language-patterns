<script lang="ts">
	import TagList from './TagList.svelte';
	import type { TagId } from '$lib/data';
	import { m } from '$lib/paraglide/messages.js';

	interface Props {
		question: string;
		title: string;
		summary: string;
		href: string;
		tags?: TagId[];
		/** Shown beside the kind chip when an entry has no tags of its own. */
		note?: string;
		kind: 'pattern' | 'pathway';
		external?: boolean;
	}
	let { question, title, summary, href, tags = [], note, kind, external = false }: Props = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener' : undefined}
	class="group flex flex-col gap-3 rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-6 transition hover:-translate-y-0.5 hover:border-[color:var(--color-accent)] hover:shadow-md"
>
	<div class="flex items-center gap-2 text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]">
		<span
			class="rounded-full px-2 py-0.5"
			class:bg-[color:var(--color-sky-soft)]={kind === 'pattern'}
			class:bg-[color:var(--color-violet-soft)]={kind === 'pathway'}
		>
			{kind === 'pattern' ? m.label_pattern() : m.label_pathway()}
		</span>
		{#if note}
			<span>{note}</span>
		{/if}
	</div>
	<h3 class="font-serif text-2xl leading-tight">
		<span class="text-[color:var(--color-ink-soft)]">{question}</span>
	</h3>
	<p class="text-sm text-[color:var(--color-ink-soft)]">{summary}</p>
	{#if tags.length}
		<TagList {tags} variant="inline" max={4} />
	{/if}
	<div class="mt-auto flex items-center justify-between pt-2 text-sm">
		<span class="font-medium">{title}</span>
		<span class="transition" class:group-hover:translate-x-1={!external} class:group-hover:-translate-y-0.5={external}>
			{external ? '↗' : '→'}
		</span>
	</div>
</a>
