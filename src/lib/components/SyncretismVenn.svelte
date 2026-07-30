<script lang="ts">
	import type { Attestation, LocationalFunction } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';
	import Expression from './Expression.svelte';

	interface Props {
		attestations?: Attestation[];
	}
	let { attestations = [] }: Props = $props();

	const ORDER: LocationalFunction[] = ['location', 'existence', 'possession'];

	/** Canonical key for a syncretism set, so 'existence,location' and the reverse agree. */
	function keyOf(set: LocationalFunction[]): string {
		return ORDER.filter((f) => set.includes(f)).join('+');
	}

	// Three circles of equal radius whose centres form an equilateral triangle:
	// every pairwise overlap is the same size, so no region reads as privileged.
	const R = 140;
	const CIRCLES = [
		{ fn: 'location' as const, cx: 230, cy: 190, color: 'var(--color-sky-band)' },
		{ fn: 'existence' as const, cx: 370, cy: 190, color: 'var(--color-emerald-band)' },
		{ fn: 'possession' as const, cx: 300, cy: 311, color: 'var(--color-amber-band)' }
	];

	// One anchor per region, placed where that region is widest.
	const REGIONS: { key: string; label: string; x: number; y: number }[] = [
		{ key: 'location', label: 'Location only', x: 172, y: 160 },
		{ key: 'existence', label: 'Existence only', x: 428, y: 160 },
		{ key: 'possession', label: 'Possession only', x: 300, y: 372 },
		{ key: 'location+existence', label: 'Location + existence', x: 300, y: 145 },
		{ key: 'location+possession', label: 'Location + possession', x: 212, y: 276 },
		{ key: 'existence+possession', label: 'Existence + possession', x: 388, y: 276 },
		{ key: 'location+existence+possession', label: 'All three', x: 300, y: 232 }
	];

	const byRegion = $derived.by(() => {
		const map = new Map<string, Attestation[]>();
		for (const att of attestations) {
			if (!att.syncretism?.length) continue;
			const k = keyOf(att.syncretism);
			if (!map.has(k)) map.set(k, []);
			map.get(k)!.push(att);
		}
		return map;
	});

	const populated = $derived(REGIONS.filter((r) => byRegion.get(r.key)?.length));
	const uncoded = $derived(attestations.filter((a) => !a.syncretism?.length));

	let active = $state<string | null>(null);
</script>

<figure class="m-0 space-y-4">
	<figcaption class="sr-only">
		Languages grouped by which of location, existence and possession share one predicate.
	</figcaption>

	<div class="overflow-x-auto">
		<svg
			viewBox="0 0 600 500"
			class="mx-auto block h-auto w-full max-w-[600px] min-w-[420px]"
			role="img"
			aria-label="Venn diagram of which languages use one predicate for location, existence and possession"
		>
			{#each CIRCLES as c (c.fn)}
				<circle cx={c.cx} cy={c.cy} r={R} fill={c.color} fill-opacity="0.38" />
			{/each}
			{#each CIRCLES as c (c.fn)}
				<circle
					cx={c.cx}
					cy={c.cy}
					r={R}
					fill="none"
					stroke="var(--color-rule)"
					stroke-width="1"
				/>
			{/each}

			<!-- Circle names sit outside the shape so they never collide with counts. -->
			<text x="150" y="34" class="venn-title" text-anchor="middle">LOCATION</text>
			<text x="450" y="34" class="venn-title" text-anchor="middle">EXISTENCE</text>
			<text x="300" y="482" class="venn-title" text-anchor="middle">POSSESSION</text>

			{#each populated as r (r.key)}
				{@const items = byRegion.get(r.key) ?? []}
				<g
					class="venn-region"
					class:is-active={active === r.key}
					role="button"
					tabindex="0"
					aria-label="{r.label}: {items.length} languages"
					onmouseenter={() => (active = r.key)}
					onmouseleave={() => (active = null)}
					onfocus={() => (active = r.key)}
					onblur={() => (active = null)}
				>
					<circle cx={r.x} cy={r.y} r="19" fill="var(--color-surface)" fill-opacity="0.82" />
					<text x={r.x} y={r.y + 6} class="venn-count" text-anchor="middle">{items.length}</text>
				</g>
			{/each}
		</svg>
	</div>

	<div class="grid gap-3 sm:grid-cols-2">
		{#each populated as r (r.key)}
			{@const items = byRegion.get(r.key) ?? []}
			<div
				class="rounded-xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-3 transition-colors"
				class:ring-2={active === r.key}
				style:--tw-ring-color="var(--color-ink-soft)"
				onmouseenter={() => (active = r.key)}
				onmouseleave={() => (active = null)}
				role="presentation"
			>
				<div class="text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]">
					{r.label} · {items.length}
				</div>
				<div class="mt-2 flex flex-wrap gap-1.5">
					{#each items as att (`${att.language}:${att.expression}`)}
						<span
							class="inline-flex items-baseline gap-1 rounded-full border border-[color:var(--color-rule)] px-2 py-0.5 text-xs"
							title={att.expression}
						>
							<span class="font-medium">{getLanguage(att.language).name}</span>
							<Expression
								text={att.expression}
								transliteration={att.transliteration}
								class="text-[color:var(--color-ink-soft)]"
							/>
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	{#if uncoded.length}
		<p class="text-xs text-[color:var(--color-ink-soft)]">
			Not yet coded for overlap: {uncoded.map((a) => getLanguage(a.language).name).join(', ')}.
		</p>
	{/if}
</figure>

<style>
	.venn-title {
		font-size: 12px;
		letter-spacing: 0.08em;
		fill: var(--color-ink-soft);
	}
	.venn-count {
		font-size: 16px;
		font-weight: 600;
		fill: var(--color-ink);
	}
	.venn-region {
		cursor: default;
		outline: none;
	}
	.venn-region circle {
		transition: fill-opacity 120ms ease;
	}
	.venn-region.is-active circle {
		fill-opacity: 1;
	}
</style>
