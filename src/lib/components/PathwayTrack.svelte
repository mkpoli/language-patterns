<script lang="ts">
	import { strip, track } from '$lib/home';
	import { colorForIndex, strategyColor } from '$lib/strategyColor';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import type { Pathway } from '$lib/types';

	let { pathway }: { pathway: Pathway } = $props();

	const route = $derived(track(pathway));
	const bars = $derived(strip(pathway));

	let scrubbed = $state<number | null>(null);
	const at = $derived(scrubbed ?? bars?.to ?? 0);

	function year(value: number): string {
		return value < 0 ? m.year_bce({ year: -value }) : String(value);
	}

	/** Bands are positioned in percent of the span, so the head is too. */
	function head(value: number): number {
		if (!bars) return 0;
		return ((value - bars.from) / (bars.to - bars.from)) * 100;
	}

	function live(band: { left: number; width: number }): boolean {
		const p = head(at);
		return p >= band.left - 0.01 && p <= band.left + band.width + 0.01;
	}
</script>

<article
	class="group flex flex-col gap-4 rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-6 transition focus-within:border-[color:var(--color-accent)] hover:border-[color:var(--color-accent)] hover:shadow-md"
>
	<h3 class="font-serif text-xl leading-tight">
		<a
			href={localizeHref(`/pathways/${pathway.slug}`)}
			class="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
		>
			{pathway.question}
		</a>
	</h3>

	{#if route}
		<div class="flex flex-col gap-2">
			<div class="flex items-baseline gap-2 text-xs text-[color:var(--color-ink-soft)]">
				<span class="font-medium text-[color:var(--color-ink)]">{route.language}</span>
				<span>{year(route.from)} – {year(route.to)}</span>
			</div>
			<ol class="flex flex-wrap items-stretch gap-1.5">
				{#each route.steps as step, i (step.number)}
					{@const tone = strategyColor(colorForIndex(i))}
					{#if i > 0}
						<li class="self-center text-[color:var(--color-ink-faint)]" aria-hidden="true">→</li>
					{/if}
					<li
						style:background={tone.soft}
						style:border-color={tone.border}
						style:color={tone.textOn}
						class="rounded-lg border px-2.5 py-1.5"
						title={step.label}
					>
						<span class="block font-serif text-base leading-snug">{step.form}</span>
						<span class="block text-[0.65rem] opacity-70">{year(step.year)}</span>
					</li>
				{/each}
			</ol>
		</div>
	{/if}

	{#if bars && bars.rows.length > 1}
		<div class="flex flex-col gap-2">
			<div class="relative">
				<div class="grid grid-cols-[5rem_1fr] items-center gap-x-2 gap-y-1.5">
					{#each bars.rows as row (row.language)}
						<span class="truncate text-[0.65rem] text-[color:var(--color-ink-soft)]" lang="en">
							{row.language}
						</span>
						<div class="relative h-2.5 rounded-full bg-[color:var(--color-surface-sunken)]">
							{#each row.bands as band (band.key)}
								{@const tone = strategyColor(band.color)}
								<span
									style:left={`${band.left}%`}
									style:width={`${Math.max(band.width, 1.5)}%`}
									style:background={tone.band}
									class="absolute inset-y-0 rounded-full transition-opacity"
									class:opacity-85={scrubbed === null || live(band)}
									class:opacity-20={scrubbed !== null && !live(band)}
									title={band.form}
								></span>
							{/each}
						</div>
					{/each}
				</div>
				{#if scrubbed !== null}
					<div
						class="pointer-events-none absolute inset-y-0 right-0 left-[5.5rem]"
						aria-hidden="true"
					>
						<span
							class="absolute inset-y-0 w-px bg-[color:var(--color-ink)]"
							style:left={`${head(at)}%`}
						></span>
					</div>
				{/if}
			</div>

			<label class="grid grid-cols-[5rem_1fr] items-center gap-x-2">
				<span class="sr-only">{m.home_scrub_label()}</span>
				<span
					class="text-right text-[0.6rem] text-[color:var(--color-ink-faint)]"
					aria-hidden="true">{year(bars.from)}</span
				>
				<span class="flex items-center gap-2">
					<input
						type="range"
						min={bars.from}
						max={bars.to}
						step="10"
						value={at}
						oninput={(e) => (scrubbed = Number(e.currentTarget.value))}
						class="scrub h-1 flex-1 cursor-ew-resize appearance-none rounded-full bg-[color:var(--color-rule)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
					/>
					<span class="w-10 text-[0.6rem] text-[color:var(--color-ink-faint)]" aria-hidden="true">
						{scrubbed === null ? year(bars.to) : year(at)}
					</span>
				</span>
			</label>
		</div>
	{/if}

	<p class="text-sm text-[color:var(--color-ink-soft)]">{pathway.summary}</p>

	<a
		href={localizeHref(`/pathways/${pathway.slug}`)}
		class="mt-auto flex items-center justify-between pt-1 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
	>
		<span>{pathway.title}</span>
		<span class="transition-transform group-hover:translate-x-1">→</span>
	</a>
</article>

<style>
	.scrub::-webkit-slider-thumb {
		appearance: none;
		height: 0.85rem;
		width: 0.85rem;
		border-radius: 9999px;
		background: var(--color-ink);
		border: 2px solid var(--color-surface);
	}

	.scrub::-moz-range-thumb {
		height: 0.85rem;
		width: 0.85rem;
		border: 2px solid var(--color-surface);
		border-radius: 9999px;
		background: var(--color-ink);
	}
</style>
