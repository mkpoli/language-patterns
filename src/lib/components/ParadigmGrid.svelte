<script lang="ts">
	import type { ParadigmSection, Pattern } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';
	import { strategyColor } from '$lib/strategyColor';
	import CitationMark from './CitationMark.svelte';

	interface Props {
		paradigm: ParadigmSection;
		strategies: Pattern['strategies'];
	}
	let { paradigm, strategies }: Props = $props();

	const strategyById = $derived(new Map(strategies.map((s) => [s.id, s])));

	const languages = $derived.by(() => {
		const order: string[] = [];
		const seen = new Set<string>();
		for (const c of paradigm.cells) {
			if (!seen.has(c.language)) {
				seen.add(c.language);
				order.push(c.language);
			}
		}
		return order;
	});

	const cellAt = $derived.by(() => {
		const map = new Map<string, (typeof paradigm.cells)[number]>();
		for (const c of paradigm.cells) map.set(`${c.language}:${c.axis}`, c);
		return map;
	});
</script>

<div class="flex flex-col gap-6">
	{#if paradigm.summary}
		<p class="max-w-3xl text-base">{paradigm.summary}</p>
	{/if}

	<div class="overflow-x-auto rounded-2xl border border-[color:var(--color-rule)] bg-white">
		<table class="w-full text-sm">
			<thead class="bg-[oklch(96%_0.005_260)] text-left text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]">
				<tr>
					<th class="sticky left-0 z-10 bg-[oklch(96%_0.005_260)] px-4 py-3">Language</th>
					{#each paradigm.axes as ax (ax.id)}
						<th class="px-4 py-3">
							<div class="font-medium text-[color:var(--color-ink)]">{ax.label}</div>
							{#if ax.description}
								<div class="font-normal normal-case text-[10px] leading-snug text-[color:var(--color-ink-soft)]">
									{ax.description}
								</div>
							{/if}
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each languages as code (code)}
					{@const lang = getLanguage(code)}
					<tr class="border-t border-[color:var(--color-rule)] align-top">
						<th scope="row" class="sticky left-0 z-10 bg-white px-4 py-3 text-left">
							<div class="font-medium">{lang.name}</div>
							<div class="text-xs font-normal text-[color:var(--color-ink-soft)]">{lang.family}</div>
						</th>
						{#each paradigm.axes as ax (ax.id)}
							{@const cell = cellAt.get(`${code}:${ax.id}`)}
							{@const strategy = cell?.strategy ? strategyById.get(cell.strategy) : undefined}
							{@const tokens = strategy ? strategyColor(strategy.color) : undefined}
							<td class="px-4 py-3" style:background={tokens ? tokens.soft : 'transparent'}>
								{#if cell}
									<div class="font-mono text-[13px]" style:color={tokens?.textOn}>{cell.form}</div>
									{#if strategy}
										<div class="mt-1 text-[10px] font-medium uppercase tracking-wide" style:color={tokens?.textOn} style:opacity={0.7}>
											{strategy.label}
										</div>
									{/if}
									{#if cell.note}
										<div class="mt-1 text-[11px] leading-snug text-[color:var(--color-ink-soft)]">{cell.note}</div>
									{/if}
									{#if cell.sources?.length}
										<div class="mt-1"><CitationMark citations={cell.sources} /></div>
									{/if}
								{:else}
									<span class="text-[color:var(--color-ink-soft)]">—</span>
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
