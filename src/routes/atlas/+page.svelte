<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
	import PatternMap, { type MapMarker } from '$lib/components/PatternMap.svelte';
	import { patterns, pathways, getLanguage } from '$lib/data';
	import { strategyColor, colorForIndex } from '$lib/strategyColor';
	import type { Strategy } from '$lib/types';
	import { m } from '$lib/paraglide/messages.js';

	type Color = Strategy['color'];

	// One color per example set, assigned in exampleSets declaration order —
	// same palette ordering as the pathway pages. Slate marks languages that
	// appear in several sets (or none).
	const SET_PALETTE = ['emerald', 'violet', 'sky', 'amber', 'rose'] as const;

	interface Chip {
		id: string;
		label: string;
		color: Color;
	}

	// One plotted record: a language attested under a color-coded group
	// (strategy for patterns, example set for pathways, topic in all-mode).
	interface PlottedRecord {
		code: string;
		group: string;
		color: Color;
		expression?: string;
		transliteration?: string;
	}

	let topic = $state('all');
	let hidden = $state<string[]>([]);
	let urlReady = $state(false);

	const topicEntry = $derived.by(() => {
		const p = patterns.find((x) => x.slug === topic);
		if (p) return { kind: 'pattern' as const, value: p };
		const w = pathways.find((x) => x.slug === topic);
		if (w) return { kind: 'pathway' as const, value: w };
		return null;
	});

	const records = $derived.by((): PlottedRecord[] => {
		if (!topicEntry) {
			// All topics: one record per (topic, language).
			const out: PlottedRecord[] = [];
			const all = [
				...patterns.map((p) => ({
					slug: p.slug,
					codes: (p.attestations ?? []).map((a) => a.language)
				})),
				...pathways.map((w) => ({ slug: w.slug, codes: (w.examples ?? []).map((e) => e.language) }))
			];
			all.forEach((t, i) => {
				for (const code of new Set(t.codes)) {
					const lang = getLanguage(code);
					if (lang.lat == null || lang.lng == null) continue;
					out.push({ code, group: t.slug, color: colorForIndex(i) });
				}
			});
			return out;
		}
		if (topicEntry.kind === 'pattern') {
			const p = topicEntry.value;
			const stratById = new Map(p.strategies.map((s) => [s.id, s]));
			return (p.attestations ?? []).flatMap((a) => {
				const lang = getLanguage(a.language);
				if (lang.lat == null || lang.lng == null) return [];
				const strat = stratById.get(a.strategy);
				return [
					{
						code: a.language,
						group: a.strategy,
						color: strat?.color ?? ('slate' as Color),
						expression: a.expression,
						transliteration: a.transliteration
					}
				];
			});
		}
		const w = topicEntry.value;
		const setColor = new Map(
			(w.exampleSets ?? []).map((s, i) => [s.id, SET_PALETTE[i % SET_PALETTE.length] as Color])
		);
		return (w.examples ?? []).flatMap((e) => {
			const lang = getLanguage(e.language);
			if (lang.lat == null || lang.lng == null) return [];
			return [
				{
					code: e.language,
					group: e.set ?? '',
					color: (e.set ? setColor.get(e.set) : undefined) ?? ('slate' as Color),
					expression: e.original,
					transliteration: e.transliteration
				}
			];
		});
	});

	const visible = $derived(records.filter((r) => !hidden.includes(r.group)));

	const chips = $derived.by((): Chip[] => {
		if (!topicEntry) {
			const slugs = [...patterns.map((p) => p.slug), ...pathways.map((w) => w.slug)];
			const titles = new Map([
				...patterns.map((p) => [p.slug, p.shortTitle] as const),
				...pathways.map((w) => [w.slug, w.shortTitle] as const)
			]);
			return slugs.map((slug, i) => ({
				id: slug,
				label: titles.get(slug) ?? slug,
				color: colorForIndex(i)
			}));
		}
		if (topicEntry.kind === 'pattern') {
			const used = new Set(records.map((r) => r.group));
			return topicEntry.value.strategies
				.filter((s) => used.has(s.id))
				.map((s) => ({ id: s.id, label: s.label, color: s.color }));
		}
		const w = topicEntry.value;
		const used = new Set(records.map((r) => r.group));
		const out: Chip[] = [];
		(w.exampleSets ?? []).forEach((s, i) => {
			if (used.has(s.id)) {
				out.push({ id: s.id, label: s.label ?? s.id, color: SET_PALETTE[i % SET_PALETTE.length] });
			}
		});
		if (used.has('')) out.push({ id: '', label: m.legend_ungrouped(), color: 'slate' });
		return out;
	});

	const markers = $derived.by((): MapMarker[] => {
		if (topicEntry?.kind === 'pattern') {
			// One marker per attestation; PatternMap offsets duplicates.
			const noteById = new Map(chips.map((c) => [c.id, c.label]));
			return visible.map((r) => ({
				code: r.code,
				expression: r.expression,
				transliteration: r.transliteration,
				color: r.color,
				note: noteById.get(r.group)
			}));
		}
		if (topicEntry?.kind === 'pathway') {
			const byCode = new Map<string, { expressions: string[]; groups: Set<string> }>();
			for (const r of visible) {
				let b = byCode.get(r.code);
				if (!b) {
					b = { expressions: [], groups: new Set() };
					byCode.set(r.code, b);
				}
				if (r.expression) b.expressions.push(r.expression);
				if (r.group) b.groups.add(r.group);
			}
			const labelById = new Map(chips.map((c) => [c.id, c.label]));
			return [...byCode.entries()].map(([code, b]) => {
				const groups = [...b.groups];
				return {
					code,
					expression: b.expressions.join('  ·  '),
					color:
						groups.length === 1
							? (chips.find((c) => c.id === groups[0])?.color ?? 'slate')
							: ('slate' as Color),
					note: groups.length ? groups.map((g) => labelById.get(g) ?? g).join(' · ') : undefined
				};
			});
		}
		// All topics: one neutral marker per language, sized by topic count.
		const byCode = new Map<string, string[]>();
		for (const r of visible) {
			const list = byCode.get(r.code) ?? [];
			list.push(r.group);
			byCode.set(r.code, list);
		}
		const titles = new Map<string, { label: string; href: string }>([
			...patterns.map(
				(p): [string, { label: string; href: string }] => [
					p.slug,
					{ label: p.shortTitle, href: `/patterns/${p.slug}` }
				]
			),
			...pathways.map(
				(w): [string, { label: string; href: string }] => [
					w.slug,
					{ label: w.shortTitle, href: `/pathways/${w.slug}` }
				]
			)
		]);
		return [...byCode.entries()].map(([code, slugs]) => ({
			code,
			color: 'slate' as Color,
			size: 14 + Math.min(slugs.length, 6) * 3,
			links: slugs
				.map((s) => titles.get(s))
				.filter((t): t is { label: string; href: string } => Boolean(t))
		}));
	});

	interface FamilyRow {
		family: string;
		total: number;
		segments: { color: Color; count: number }[];
	}

	const familyRows = $derived.by((): FamilyRow[] => {
		const byFamily = new Map<string, Map<Color, number>>();
		for (const r of visible) {
			const family = getLanguage(r.code).family.split('›')[0].trim();
			let seg = byFamily.get(family);
			if (!seg) {
				seg = new Map();
				byFamily.set(family, seg);
			}
			seg.set(r.color, (seg.get(r.color) ?? 0) + 1);
		}
		return [...byFamily.entries()]
			.map(([family, seg]) => ({
				family,
				total: [...seg.values()].reduce((a, b) => a + b, 0),
				segments: [...seg.entries()].map(([color, count]) => ({ color, count }))
			}))
			.sort((a, b) => b.total - a.total);
	});
	const familyMax = $derived(Math.max(1, ...familyRows.map((r) => r.total)));

	function selectTopic(slug: string) {
		topic = slug;
		hidden = [];
	}

	function toggleChip(id: string) {
		hidden = hidden.includes(id) ? hidden.filter((h) => h !== id) : [...hidden, id];
	}

	onMount(() => {
		const q = page.url.searchParams.get('topic');
		if (q && (patterns.some((p) => p.slug === q) || pathways.some((w) => w.slug === q))) {
			topic = q;
		}
		urlReady = true;
	});

	// Keep the query string in sync for deep links; replaceState so filter
	// clicks don't pile up in history.
	$effect(() => {
		if (!urlReady) return;
		const url = new URL(page.url);
		if (topic === 'all') url.searchParams.delete('topic');
		else url.searchParams.set('topic', topic);
		const target = url.pathname + url.search;
		if (target !== page.url.pathname + page.url.search) {
			goto(target, { replaceState: true, noScroll: true, keepFocus: true });
		}
	});
</script>

<Seo title={m.atlas_title()} description={m.atlas_subtitle()} path="/atlas" />

<section class="flex flex-col gap-4 pb-8">
	<p class="text-xs uppercase tracking-widest text-[color:var(--color-ink-soft)]">{m.nav_atlas()}</p>
	<h1 class="font-serif text-3xl">{m.atlas_title()}</h1>
	<p class="max-w-3xl text-[color:var(--color-ink-soft)]">{m.atlas_subtitle()}</p>
</section>

<section class="mb-10 grid gap-4 lg:grid-cols-[15rem_1fr]">
	<!-- Topic filter panel -->
	<aside
		class="flex flex-col gap-4 self-start rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-4"
		aria-label={m.atlas_filter_topics()}
	>
		<h2 class="text-xs uppercase tracking-widest text-[color:var(--color-ink-soft)]">
			{m.atlas_filter_topics()}
		</h2>
		<button
			type="button"
			onclick={() => selectTopic('all')}
			class="rounded-lg px-3 py-1.5 text-left text-sm {topic === 'all'
				? 'bg-[color:var(--color-surface-sunken)] font-semibold'
				: 'text-[color:var(--color-ink-soft)] hover:bg-[color:var(--color-surface-sunken)]'}"
			aria-pressed={topic === 'all'}
		>
			{m.atlas_all_topics()}
		</button>
		{#each [{ kind: 'pattern', list: patterns }, { kind: 'pathway', list: pathways }] as g (g.kind)}
			<div class="flex flex-col gap-1">
				<p class="px-3 text-xs text-[color:var(--color-ink-soft)]">
					{g.kind === 'pattern' ? m.nav_patterns() : m.nav_pathways()}
				</p>
				{#each g.list as t (t.slug)}
					<button
						type="button"
						onclick={() => selectTopic(t.slug)}
						class="rounded-lg px-3 py-1.5 text-left text-sm {topic === t.slug
							? 'bg-[color:var(--color-surface-sunken)] font-semibold'
							: 'text-[color:var(--color-ink-soft)] hover:bg-[color:var(--color-surface-sunken)]'}"
						aria-pressed={topic === t.slug}
					>
						{t.shortTitle}
					</button>
				{/each}
			</div>
		{/each}
	</aside>

	<div class="min-w-0">
		<PatternMap {markers} legend={[]} height="70vh" />

		<!-- Legend doubles as a filter: click a chip to toggle its markers. -->
		{#if chips.length}
			<div class="mt-3 flex flex-wrap gap-2 text-xs">
				{#each chips as chip (chip.id)}
					{@const tokens = strategyColor(chip.color)}
					{@const active = !hidden.includes(chip.id)}
					<button
						type="button"
						onclick={() => toggleChip(chip.id)}
						aria-pressed={active}
						class="inline-flex items-center gap-1.5 rounded-full border px-2 py-1 transition-opacity {active
							? 'border-[color:var(--color-rule)] bg-[color:var(--color-surface)]'
							: 'border-dashed border-[color:var(--color-rule)] opacity-45'}"
					>
						<span class="inline-block h-3 w-3 rounded-full" style:background={tokens.band}></span>
						{chip.label}
					</button>
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- Distribution by family -->
{#if familyRows.length}
	<section class="mb-10 flex flex-col gap-3">
		<h2 class="font-serif text-2xl">{m.atlas_by_family()}</h2>
		<div class="flex flex-col gap-2">
			{#each familyRows as row (row.family)}
				<div
					class="grid grid-cols-[7rem_1fr_2.5rem] items-center gap-3 text-sm sm:grid-cols-[10rem_1fr_2.5rem]"
				>
					<span class="truncate text-[color:var(--color-ink-soft)]">{row.family}</span>
					<div
						class="flex h-4 overflow-hidden rounded-full bg-[color:var(--color-surface-sunken)]"
						style:width="{Math.max(4, (row.total / familyMax) * 100)}%"
					>
						{#each row.segments as seg (seg.color)}
							<div
								style:width="{(seg.count / row.total) * 100}%"
								style:background={strategyColor(seg.color).band}
								title={String(seg.count)}
							></div>
						{/each}
					</div>
					<span class="text-right text-xs text-[color:var(--color-ink-soft)]">{row.total}</span>
				</div>
			{/each}
		</div>
	</section>
{/if}
