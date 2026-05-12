<script lang="ts">
	import type { Pathway, Stage } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';
	import CitationMark from './CitationMark.svelte';

	interface Props {
		stage: Stage;
		pathway: Pathway;
	}
	let { stage, pathway }: Props = $props();

	const languagesAtStage = $derived.by(() => {
		const codes = new Set<string>();
		for (const band of pathway.bands) {
			if (band.stageId === stage.id) codes.add(band.language);
		}
		return [...codes].map(getLanguage);
	});
</script>

<article class="flex flex-col gap-3 rounded-2xl border border-[color:var(--color-rule)] bg-white p-5">
	<header class="flex items-center gap-3">
		<span
			class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(95%_0.005_260)] font-mono text-sm"
		>
			{stage.number}
		</span>
		<h3 class="text-lg font-semibold">{stage.label}</h3>
	</header>
	<code class="self-start rounded bg-[oklch(96%_0.005_260)] px-2 py-1 font-mono text-xs">
		{stage.schematic}
	</code>
	<p class="text-sm text-[color:var(--color-ink-soft)]">{stage.description}</p>

	{#if languagesAtStage.length}
		<footer class="flex flex-wrap gap-1.5 pt-2">
			{#each languagesAtStage as lang (lang.code)}
				<span class="inline-flex items-center gap-1 rounded-full border border-[color:var(--color-rule)] px-2 py-0.5 text-xs">
					<span>{lang.name}</span>
				</span>
			{/each}
		</footer>
	{/if}

	{#if stage.sources?.length}
		<div class="border-t border-[color:var(--color-rule)] pt-2"><CitationMark citations={stage.sources} /></div>
	{/if}
</article>
