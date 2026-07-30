<script lang="ts">
	import type { Citation } from '$lib/types';
	import { getSource, formatAuthorYear, formatFullCitation } from '$lib/data/sources';

	interface Props {
		citations: Citation[] | undefined;
	}
	let { citations }: Props = $props();
</script>

{#if citations && citations.length}
	<span class="inline-flex flex-wrap gap-1 align-baseline">
		{#each citations as cite, i (i)}
			{@const source = getSource(cite.source)}
			<a
				href={`#ref-${cite.source}`}
				class="rounded-md border border-[color:var(--color-rule)] bg-[color:var(--color-surface-sunken)] px-1.5 py-0.5 font-mono text-[10px] whitespace-nowrap text-[color:var(--color-ink-soft)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-ink)]"
				title={formatFullCitation(source) + (cite.locator ? ` — ${cite.locator}` : '')}
			>
				{formatAuthorYear(source)}{cite.locator ? `: ${cite.locator}` : ''}
			</a>
		{/each}
	</span>
{/if}
