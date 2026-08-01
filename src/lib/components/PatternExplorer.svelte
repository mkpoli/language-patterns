<script lang="ts">
	import { patterns } from '$lib/data';
	import { patternPoints, shares, wall } from '$lib/home';
	import WorldMap from '$lib/components/WorldMap.svelte';
	import { strategyColor } from '$lib/strategyColor';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { localized, sortTags } from '$lib/data/tags';

	let active = $state(0);
	let tabs: HTMLButtonElement[] = $state([]);

	const pattern = $derived(patterns[active]);
	const split = $derived(shares(pattern));
	const total = $derived(split.reduce((sum, s) => sum + s.count, 0));
	const sample = $derived(wall(pattern));
	const points = $derived(patternPoints(pattern));
	const showsForms = $derived(sample.cells.some((c) => c.form));

	function move(event: KeyboardEvent, index: number) {
		const step =
			event.key === 'ArrowDown' || event.key === 'ArrowRight'
				? 1
				: event.key === 'ArrowUp' || event.key === 'ArrowLeft'
					? -1
					: 0;
		if (step === 0) return;
		event.preventDefault();
		active = (index + step + patterns.length) % patterns.length;
		tabs[active]?.focus();
	}
</script>

<div
	class="grid gap-px overflow-hidden rounded-3xl border border-[color:var(--color-rule)] bg-[color:var(--color-rule)] lg:grid-cols-[minmax(0,19rem)_1fr]"
>
	<div
		role="tablist"
		aria-label={m.nav_patterns()}
		class="flex gap-px overflow-x-auto bg-[color:var(--color-rule)] lg:flex-col lg:overflow-visible"
	>
		{#each patterns as p, i (p.slug)}
			{@const tag = sortTags(p.tags).map((t) => localized(t.label))[0]}
			<button
				bind:this={tabs[i]}
				role="tab"
				type="button"
				id={`tab-${p.slug}`}
				aria-selected={i === active}
				aria-controls="pattern-panel"
				tabindex={i === active ? 0 : -1}
				onclick={() => (active = i)}
				onkeydown={(e) => move(e, i)}
				class="flex-1 px-5 py-4 text-left text-sm whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[color:var(--color-accent)] lg:whitespace-normal"
				class:bg-[color:var(--color-surface)]={i === active}
				class:bg-[color:var(--color-surface-sunken)]={i !== active}
			>
				<span
					class="block font-medium"
					class:text-[color:var(--color-ink)]={i === active}
					class:text-[color:var(--color-ink-soft)]={i !== active}>{p.title}</span
				>
				{#if tag !== p.title}
					<span class="mt-0.5 hidden text-xs text-[color:var(--color-ink-faint)] lg:block">
						{tag}
					</span>
				{/if}
			</button>
		{/each}
	</div>

	<div
		id="pattern-panel"
		role="tabpanel"
		aria-labelledby={`tab-${pattern.slug}`}
		tabindex="-1"
		class="flex flex-col gap-5 bg-[color:var(--color-surface)] p-6 sm:p-8"
	>
		<div class="flex flex-col gap-2">
			<h3 class="font-serif text-2xl leading-tight sm:text-3xl">{pattern.question}</h3>
			<p class="line-clamp-2 max-w-3xl text-sm text-[color:var(--color-ink-soft)]">
				{pattern.summary}
			</p>
		</div>

		<div class="flex flex-col gap-2">
			<div
				class="flex h-10 overflow-hidden rounded-xl border border-[color:var(--color-rule)]"
				role="img"
				aria-label={m.section_strategies()}
			>
				{#each split as s (s.id)}
					{@const tone = strategyColor(s.color)}
					<div
						class="flex min-w-9 items-center justify-center border-[color:var(--color-paper)] not-last:border-r"
						style:width={`${(s.count / total) * 100}%`}
						style:background={tone.band}
						style:color={tone.textOn}
						title={`${s.label} · ${s.count}`}
					>
						<span class="text-sm font-semibold">{s.count}</span>
					</div>
				{/each}
			</div>
			<ul class="flex flex-wrap gap-1.5">
				{#each split as s (s.id)}
					{@const tone = strategyColor(s.color)}
					<li
						class="rounded-full border px-2.5 py-0.5 text-xs"
						style:background={tone.soft}
						style:border-color={tone.border}
						style:color={tone.textOn}
					>
						{s.label}
					</li>
				{/each}
			</ul>
		</div>

		{#if points.length}
			<div
				class="map mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface-sunken)]"
			>
				<WorldMap
					{points}
					animateKey={pattern.slug}
					radius={7}
					graticule
					label={m.home_map_label()}
				/>
			</div>
		{/if}

		{#key pattern.slug}
			<ul class="wall flex flex-wrap gap-2">
				{#each sample.cells as cell, i (cell.key)}
					<li
						style:--i={Math.min(i, 30)}
						style:background={strategyColor(cell.color).soft}
						style:border-color={strategyColor(cell.color).border}
						style:color={strategyColor(cell.color).textOn}
						class="rounded-xl border px-3 py-2"
						title={cell.strategy}
					>
						{#if cell.form}
							<span class="block text-[0.65rem] tracking-wide uppercase opacity-70"
								>{cell.language}</span
							>
							<span class="block font-serif text-lg leading-snug">{cell.form}</span>
						{:else}
							<span class="block font-serif text-base leading-snug">{cell.language}</span>
						{/if}
					</li>
				{/each}
				{#if sample.hidden > 0}
					<li class="self-center px-2 text-sm text-[color:var(--color-ink-faint)]">
						{m.home_wall_more({ count: sample.hidden })}
					</li>
				{/if}
			</ul>
		{/key}

		<div
			class="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--color-rule)] pt-4 text-sm"
		>
			<p class="text-[color:var(--color-ink-soft)]">
				{showsForms
					? m.home_wall_hint_forms({ count: sample.languages })
					: m.home_wall_hint_types({ count: sample.languages })}
			</p>
			<a
				href={localizeHref(`/patterns/${pattern.slug}`)}
				class="group font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
			>
				{m.home_open_entry()}
				<span class="inline-block transition-transform group-hover:translate-x-1">→</span>
			</a>
		</div>
	</div>
</div>

<style>
	.map {
		--map-land: var(--color-rule);
	}

	.wall li {
		animation: rise 320ms ease-out backwards;
		animation-delay: calc(var(--i, 0) * 14ms);
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.wall li {
			animation: none;
		}
	}
</style>
