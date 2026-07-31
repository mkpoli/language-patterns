<script lang="ts">
	import type { Citation } from '$lib/types';
	import { getSource, formatAuthorYear, formatFullCitation } from '$lib/data/sources';
	import { m } from '$lib/paraglide/messages.js';

	interface Props {
		citations: Citation[] | undefined;
		/** Render a [citation needed] mark alongside whatever sources are on record. */
		citationNeeded?: boolean;
	}
	let { citations, citationNeeded = false }: Props = $props();
</script>

{#if (citations && citations.length) || citationNeeded}
	<span class="inline-flex flex-wrap gap-1 align-baseline">
		{#each citations ?? [] as cite, i (i)}
			{@const source = getSource(cite.source)}
			<a
				href={`#ref-${cite.source}`}
				class="rounded-md border border-[color:var(--color-rule)] bg-[color:var(--color-surface-sunken)] px-1.5 py-0.5 font-mono text-[10px] whitespace-nowrap text-[color:var(--color-ink-soft)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-ink)]"
				title={formatFullCitation(source) + (cite.locator ? ` — ${cite.locator}` : '')}
			>
				{formatAuthorYear(source)}{cite.locator ? `: ${cite.locator}` : ''}
			</a>
		{/each}
		{#if citationNeeded}
			<span
				class="rounded-md border border-dashed border-[color:var(--color-rule)] px-1.5 py-0.5 text-[10px] italic whitespace-nowrap text-[color:var(--color-ink-soft)]"
				title={m.citation_needed_hint()}
			>
				{m.citation_needed()}
			</span>
		{/if}
	</span>
{/if}
