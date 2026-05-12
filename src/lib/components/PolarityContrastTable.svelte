<script lang="ts">
	import type { PolarityContrast, PolarityRelation } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';
	import { strategyColor } from '$lib/strategyColor';
	import CitationMark from './CitationMark.svelte';

	interface Props {
		contrasts: PolarityContrast[];
	}
	let { contrasts }: Props = $props();

	const relationMeta: Record<PolarityRelation, { label: string; color: 'sky' | 'rose' | 'amber'; hint: string }> = {
		'same-with-negator': {
			label: 'Same form + negator',
			color: 'sky',
			hint: 'Same existential predicate, with a regular clausal or pre-predicate negator.'
		},
		suppletive: {
			label: 'Suppletive',
			color: 'rose',
			hint: 'A distinct lexical item for negative existence — no morphological relationship to the affirmative.'
		},
		compound: {
			label: 'Compound negator',
			color: 'amber',
			hint: 'A negator dedicated to (or fused with) the existential, used in this construction only.'
		}
	};

	const grouped = $derived.by(() => {
		const groups: Record<PolarityRelation, PolarityContrast[]> = {
			'same-with-negator': [],
			suppletive: [],
			compound: []
		};
		for (const c of contrasts) groups[c.relation].push(c);
		return groups;
	});

	const ordering: PolarityRelation[] = ['suppletive', 'compound', 'same-with-negator'];
</script>

<div class="flex flex-col gap-8">
	{#each ordering as rel (rel)}
		{@const items = grouped[rel]}
		{#if items.length}
			{@const meta = relationMeta[rel]}
			{@const tokens = strategyColor(meta.color)}
			<section>
				<header class="mb-3 flex flex-wrap items-baseline gap-3">
					<span
						class="rounded-full px-3 py-1 text-sm font-medium"
						style:background={tokens.soft}
						style:color={tokens.textOn}
					>
						{meta.label}
						<span class="ml-1 font-mono text-xs opacity-70">{items.length}</span>
					</span>
					<p class="text-sm text-[color:var(--color-ink-soft)]">{meta.hint}</p>
				</header>

				<div class="overflow-x-auto rounded-2xl border border-[color:var(--color-rule)] bg-white">
					<table class="w-full text-sm">
						<thead class="bg-[oklch(96%_0.005_260)] text-left text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]">
							<tr>
								<th class="px-4 py-3">Language</th>
								<th class="px-4 py-3">Affirmative</th>
								<th class="px-4 py-3">Negative</th>
								<th class="px-4 py-3">Note</th>
							</tr>
						</thead>
						<tbody>
							{#each items as c (c.language + c.affirmative)}
								{@const lang = getLanguage(c.language)}
								<tr class="border-t border-[color:var(--color-rule)]">
									<td class="px-4 py-3 align-top">
										<div class="font-medium">{lang.name}</div>
										<div class="text-xs text-[color:var(--color-ink-soft)]">{lang.family}</div>
									</td>
									<td class="px-4 py-3 align-top font-mono">{c.affirmative}</td>
									<td class="px-4 py-3 align-top font-mono" style:color={tokens.textOn}>{c.negative}</td>
									<td class="px-4 py-3 align-top text-[color:var(--color-ink-soft)]">
										{#if c.note}<div>{c.note}</div>{/if}
										{#if c.sources?.length}
											<div class="mt-1"><CitationMark citations={c.sources} /></div>
										{/if}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>
		{/if}
	{/each}
</div>
