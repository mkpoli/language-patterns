<script lang="ts">
	import type { Pattern } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';
	import { strategyColor } from '$lib/strategyColor';
	import CitationMark from './CitationMark.svelte';

	interface Props {
		pattern: Pattern;
	}
	let { pattern }: Props = $props();

	const strategyById = $derived(
		new Map(pattern.strategies.map((s) => [s.id, s]))
	);
	const attestations = $derived(pattern.attestations ?? []);

	const originLabel: Record<string, string> = {
		be: 'from BE',
		exist: 'from an existential root',
		have: 'from HAVE',
		comitative: 'from “with”',
		give: 'from GIVE',
		find: 'from FIND',
		posture: 'from a posture verb',
		stay: 'from “stay, remain”',
		deictic: 'from a deictic',
		locative: 'from locative morphology',
		article: 'from an article',
		opaque: 'no recoverable source'
	};

	const originTitle: Record<string, string> = {
		transparent: 'The source is still visible in the form.',
		established: 'The source is documented but no longer transparent.',
		unknown: 'No source has been established.'
	};
</script>

<div class="overflow-x-auto rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)]">
	<table class="w-full text-sm">
		<thead class="bg-[color:var(--color-surface-sunken)] text-left text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]">
			<tr>
				<th class="px-4 py-3">Language</th>
				<th class="px-4 py-3">Strategy</th>
				<th class="px-4 py-3">Expression</th>
				<th class="px-4 py-3">Origin &amp; overlap</th>
				<th class="px-4 py-3">Note</th>
			</tr>
		</thead>
		<tbody>
			{#each attestations as att, i (i)}
				{@const lang = getLanguage(att.language)}
				{@const strategy = strategyById.get(att.strategy)}
				{@const tokens = strategy ? strategyColor(strategy.color) : undefined}
				<tr class="border-t border-[color:var(--color-rule)]">
					<td class="px-4 py-3 align-top">
						<div class="font-medium">{lang.name}</div>
						<div class="text-xs text-[color:var(--color-ink-soft)]">{lang.family}</div>
					</td>
					<td class="px-4 py-3 align-top">
						{#if strategy}
							<span
								class="inline-block rounded-full px-2 py-0.5 text-xs"
								style:background={tokens?.soft}
								style:color={tokens?.textOn}
							>
								{strategy.label}
							</span>
						{/if}
					</td>
					<td class="px-4 py-3 align-top font-mono">{att.expression}</td>
					<td class="px-4 py-3 align-top text-xs text-[color:var(--color-ink-soft)]">
						{#if att.origin}
							<div title={originTitle[att.origin.evidence]}>
								{originLabel[att.origin.value]}{att.origin.evidence === 'unknown' ? '' : ` · ${att.origin.evidence}`}
							</div>
						{/if}
						{#if att.syncretism?.length}
							<div class="mt-1 flex flex-wrap gap-1">
								{#each att.syncretism as fn (fn)}
									<span class="rounded border border-[color:var(--color-rule)] px-1">{fn}</span>
								{/each}
							</div>
						{/if}
						{#if att.headAlsoLocates !== undefined}
							<div
								class="mt-1"
								title="Whether this predicate also states where something is, outside the existential clause."
							>
								{att.headAlsoLocates ? 'also states location' : 'existence only'}
							</div>
						{/if}
					</td>
					<td class="px-4 py-3 align-top text-[color:var(--color-ink-soft)]">
						<div>{att.note ?? ''}</div>
						{#if att.sources?.length}
							<div class="mt-1"><CitationMark citations={att.sources} /></div>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
