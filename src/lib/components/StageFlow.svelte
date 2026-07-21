<script lang="ts">
	import type { Language, Pathway, Stage } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';

	interface Props {
		stages: Stage[];
		pathway: Pathway;
	}
	let { stages, pathway }: Props = $props();

	function languagesAt(stage: Stage): Language[] {
		const codes = new Set<string>();
		for (const band of pathway.bands) {
			if (band.stageId === stage.id) codes.add(band.language);
		}
		return [...codes].map(getLanguage);
	}
</script>

<ol class="flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-0">
	{#each stages as stage, i (stage.id)}
		{#if i > 0}
			<li aria-hidden="true" class="flex shrink-0 items-center justify-center py-1 lg:px-2 lg:py-0">
				<svg
					class="h-5 w-5 text-[color:var(--color-ink-soft)] lg:hidden"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M12 5v14M6 13l6 6 6-6" />
				</svg>
				<span class="hidden items-center lg:flex">
					<span class="h-px w-5 bg-[color:var(--color-rule)]"></span>
					<svg
						class="-ml-px h-4 w-4 text-[color:var(--color-ink-soft)]"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M5 12h14M13 6l6 6-6 6" />
					</svg>
				</span>
			</li>
		{/if}
		<li
			class="group flex flex-1 flex-col gap-2.5 rounded-2xl border border-[color:var(--color-rule)] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[oklch(80%_0.02_260)] hover:shadow-[0_6px_20px_oklch(0%_0_0/0.05)]"
		>
			<div class="flex items-center gap-3">
				<span
					class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-rule)] font-serif text-xl text-[color:var(--color-ink)] transition-colors group-hover:border-[color:var(--color-ink)]"
				>
					{stage.number}
				</span>
				<h3 class="font-serif text-xl leading-tight">{stage.label}</h3>
			</div>
			<code class="self-start rounded bg-[oklch(96%_0.005_260)] px-2 py-1 font-mono text-xs">
				{stage.schematic}
			</code>
			<p class="text-sm text-[color:var(--color-ink-soft)]">{stage.description}</p>
			{#if languagesAt(stage).length}
				<div class="mt-auto flex flex-wrap gap-1.5 pt-2">
					{#each languagesAt(stage) as lang (lang.code)}
						<span
							class="inline-flex items-center rounded-full border border-[color:var(--color-rule)] px-2 py-0.5 text-xs"
						>
							{lang.name}
						</span>
					{/each}
				</div>
			{/if}
		</li>
	{/each}
</ol>
