<script lang="ts">
	import type { SwitchOffSection, SwitchOffRelation } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';
	import { strategyColor } from '$lib/strategyColor';
	import CitationMark from './CitationMark.svelte';

	interface Props {
		section: SwitchOffSection;
	}
	let { section }: Props = $props();

	const meta: Record<
		SwitchOffRelation,
		{ label: string; color: 'sky' | 'rose' | 'amber'; hint: string }
	> = {
		mirrored: {
			label: 'The same image, reversed',
			color: 'sky',
			hint: 'The off verb undoes the on verb without leaving its domain: what was opened is closed, what was kindled is extinguished.'
		},
		'domain-switch': {
			label: 'A different image',
			color: 'rose',
			hint: 'The off verb comes from somewhere the on verb never went. A light that was attached is extinguished; one that was opened is killed.'
		},
		particle: {
			label: 'One verb, two particles',
			color: 'amber',
			hint: 'The verb stays put and the particle carries the direction, so the pair has no separate off-verb to place.'
		}
	};

	const order: SwitchOffRelation[] = ['mirrored', 'domain-switch', 'particle'];

	const grouped = $derived.by(() => {
		const out: { relation: SwitchOffRelation; pairs: SwitchOffSection['pairs'] }[] = [];
		for (const relation of order) {
			const pairs = section.pairs.filter((p) => p.relation === relation);
			if (pairs.length) out.push({ relation, pairs });
		}
		return out;
	});
</script>

<div class="flex flex-col gap-6">
	<p class="max-w-3xl text-base">{section.summary}</p>

	{#each grouped as group (group.relation)}
		{@const m = meta[group.relation]}
		{@const tokens = strategyColor(m.color)}
		<div class="flex flex-col gap-2">
			<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
				<span
					class="rounded-full px-2 py-0.5 text-xs font-medium"
					style:background={tokens.soft}
					style:color={tokens.textOn}
				>
					{m.label}
				</span>
				<span class="font-mono text-xs text-[color:var(--color-ink-soft)]">{group.pairs.length}</span>
			</div>
			<p class="max-w-3xl text-sm text-[color:var(--color-ink-soft)]">{m.hint}</p>

			<div
				class="overflow-x-auto rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)]"
			>
				<table class="w-full text-sm">
					<thead
						class="bg-[color:var(--color-surface-sunken)] text-left text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]"
					>
						<tr>
							<th class="px-4 py-2.5">Language</th>
							<th class="px-4 py-2.5">On</th>
							<th class="px-4 py-2.5">Off</th>
							<th class="px-4 py-2.5">The off verb otherwise means</th>
						</tr>
					</thead>
					<tbody>
						{#each group.pairs as pair (pair.language)}
							{@const lang = getLanguage(pair.language)}
							<tr class="border-t border-[color:var(--color-rule)] align-top">
								<th scope="row" class="whitespace-nowrap px-4 py-2.5 text-left font-medium">
									{lang.name}
								</th>
								<td class="px-4 py-2.5 font-mono text-[13px]">{pair.on}</td>
								<td class="px-4 py-2.5 font-mono text-[13px]">{pair.off}</td>
								<td class="px-4 py-2.5 text-[color:var(--color-ink-soft)]">
									{pair.offSense}
									{#if pair.note}
										<div class="text-xs">{pair.note}</div>
									{/if}
									{#if pair.sources?.length}
										<div class="mt-1"><CitationMark citations={pair.sources} /></div>
									{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{/each}
</div>
