<script lang="ts">
	import type { Strategy, Attestation } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';
	import { strategyColor } from '$lib/strategyColor';

	interface Props {
		strategy: Strategy;
		attestations?: Attestation[];
	}
	let { strategy, attestations = [] }: Props = $props();

	const tokens = $derived(strategyColor(strategy.color));
	const langs = $derived(attestations.filter((a) => a.strategy === strategy.id));
</script>

<article
	class="flex flex-col gap-3 rounded-2xl border p-5"
	style:background={tokens.soft}
	style:border-color={tokens.border}
>
	<header class="flex items-baseline justify-between gap-3">
		<h3 class="text-lg font-semibold" style:color={tokens.textOn}>{strategy.label}</h3>
		<code class="rounded bg-white/60 px-2 py-1 font-mono text-xs text-[color:var(--color-ink)]">
			{strategy.schematic}
		</code>
	</header>

	<p class="text-sm text-[color:var(--color-ink)]">{strategy.description}</p>

	{#if langs.length}
		<div class="flex flex-wrap gap-1.5 pt-2">
			{#each langs as att (att.language)}
				{@const lang = getLanguage(att.language)}
				<span
					class="inline-flex items-center gap-1 rounded-full border border-white/70 bg-white/80 px-2 py-0.5 text-xs"
					title={att.expression}
				>
					<span class="font-medium">{lang.name}</span>
					<span class="text-[color:var(--color-ink-soft)]">·</span>
					<span class="font-mono">{att.expression}</span>
				</span>
			{/each}
		</div>
	{/if}
</article>
