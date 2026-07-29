<script lang="ts">
	import type { ParadigmSection } from '$lib/types';
	import { analyseColexification, type ClusterNode } from '$lib/colexification';
	import { getLanguage } from '$lib/data/languages';

	interface Props {
		paradigm: ParadigmSection;
	}
	let { paradigm }: Props = $props();

	const analysis = $derived(analyseColexification(paradigm));
	const labelOf = $derived(new Map(paradigm.axes.map((a) => [a.id, a.label])));

	const ROW = 32;
	const PAD_TOP = 12;
	const TREE_W = 210;
	const VIEW_W = 460;

	const layout = $derived.by(() => {
		const order = analysis.order;
		const y = new Map(order.map((id, i) => [id, PAD_TOP + i * ROW + ROW / 2]));
		// Merge height is a colexification rate: 1 sits at the leaves on the right,
		// 0 at the far left, so a join further left is a looser one.
		const maxRate = Math.max(0.001, ...analysis.pairs.map((p) => p.rate));
		const x = (rate: number) => TREE_W - (rate / maxRate) * (TREE_W - 6);

		const links: { d: string; height: number }[] = [];
		const walk = (node: ClusterNode): { x: number; y: number } => {
			if (node.id) return { x: TREE_W, y: y.get(node.id) ?? 0 };
			const [l, r] = node.children!;
			const a = walk(l);
			const b = walk(r);
			const nx = x(node.height);
			links.push({
				d: `M ${a.x} ${a.y} H ${nx} V ${b.y} H ${b.x}`,
				height: node.height
			});
			return { x: nx, y: (a.y + b.y) / 2 };
		};
		if (analysis.tree) walk(analysis.tree);

		return { order, y, links, height: PAD_TOP * 2 + order.length * ROW };
	});

	const topPairs = $derived(
		[...analysis.pairs].filter((p) => p.shared > 0).sort((a, b) => b.rate - a.rate)
	);

	// The column that shares a verb with the fewest others — the thing most
	// languages give a word of its own. Read off the data so it cannot go stale.
	const loneliest = $derived.by(() => {
		let worst: { id: string; total: number } | null = null;
		for (const id of analysis.axes) {
			const total = analysis.pairs
				.filter((p) => p.a === id || p.b === id)
				.reduce((sum, p) => sum + p.rate, 0);
			if (!worst || total < worst.total) worst = { id, total };
		}
		if (!worst) return null;
		const mine = analysis.pairs.filter((p) => p.a === worst!.id || p.b === worst!.id);
		const other = (p: (typeof mine)[number]) => (p.a === worst!.id ? p.b : p.a);
		return {
			id: worst.id,
			none: mine.filter((p) => p.shared === 0).map(other),
			some: mine
				.filter((p) => p.shared > 0)
				.sort((a, b) => b.rate - a.rate)
				.map((p) => ({ id: other(p), languages: p.languages }))
		};
	});

	const sentenceCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

	const listOf = (ids: string[]) => {
		const names = ids.map((id) => labelOf.get(id) ?? id);
		if (names.length < 2) return names.join('');
		return `${names.slice(0, -1).join(', ')} or ${names[names.length - 1]}`;
	};
</script>

<div class="flex flex-col gap-5">
	<div
		class="overflow-x-auto rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-4"
	>
		<svg
			viewBox="0 0 {VIEW_W} {layout.height}"
			width="100%"
			height={layout.height}
			preserveAspectRatio="xMinYMid meet"
			role="img"
			aria-label="Columns clustered by how often one verb covers both"
		>
			{#each layout.links as link, i (i)}
				<path
					d={link.d}
					fill="none"
					stroke="var(--color-ink-soft)"
					stroke-width="1.5"
					opacity="0.55"
				/>
			{/each}

			{#each layout.order as id (id)}
				{@const cy = layout.y.get(id) ?? 0}
				<circle cx={TREE_W} cy={cy} r="3.5" fill="var(--color-accent)" />
				<text
					x={TREE_W + 12}
					y={cy + 4}
					fill="var(--color-ink)"
					style="font-family: var(--font-sans); font-size: 13px;"
				>
					{labelOf.get(id)}
				</text>
			{/each}
		</svg>
	</div>

	<div class="flex flex-col gap-2">
		{#each topPairs as pair (pair.a + pair.b)}
			<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
				<span class="font-mono text-xs tabular-nums text-[color:var(--color-ink-soft)]">
					{Math.round(pair.rate * 100)}%
				</span>
				<span>
					{labelOf.get(pair.a)} · {labelOf.get(pair.b)}
				</span>
				<span class="text-xs text-[color:var(--color-ink-soft)]">
					{pair.shared} of {pair.support} —
					{pair.languages.map((c) => getLanguage(c).name).join(', ')}
				</span>
			</div>
		{/each}
	</div>

	{#if loneliest && loneliest.none.length}
		<p class="max-w-3xl text-sm text-[color:var(--color-ink-soft)]">
			{sentenceCase(labelOf.get(loneliest.id) ?? '')} sits at the far end. No language here uses its
			verb for {listOf(
				loneliest.none
			)}{#if loneliest.some.length}, and only {loneliest.some[0].languages
					.map((c) => getLanguage(c).name)
					.join(' and ')} give it the verb they give {labelOf.get(loneliest.some[0].id)}{/if}.
		</p>
	{/if}
</div>
