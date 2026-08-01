<script lang="ts">
	import { fade } from 'svelte/transition';
	import { slides } from '$lib/home';
	import { featured } from '$lib/featured.svelte';
	import WorldMap from '$lib/components/WorldMap.svelte';
	import { strategyColor } from '$lib/strategyColor';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';

	const frames = slides();
	const DWELL = 7000;

	let index = $state(0);
	let hovered = $state(false);
	let focused = $state(false);
	let held = $state(false);
	let reduced = $state(false);
	/** Bumped whenever the dwell timer restarts, so the fill restarts with it. */
	let cycle = $state(0);

	let panel = $state<HTMLElement | null>(null);

	const paused = $derived(hovered || focused);
	const frame = $derived(frames[index]);

	$effect(() => {
		featured.caption = frame?.caption ?? '';
	});

	$effect(() => {
		const query = window.matchMedia('(prefers-reduced-motion: reduce)');
		reduced = query.matches;
		const onChange = (event: MediaQueryListEvent) => (reduced = event.matches);
		query.addEventListener('change', onChange);
		return () => query.removeEventListener('change', onChange);
	});

	$effect(() => {
		// `cycle` is read so a jump or a resume re-arms the timer with a full dwell.
		if (cycle < 0 || reduced || paused || held || frames.length < 2) return;
		const timer = setInterval(() => {
			index = (index + 1) % frames.length;
		}, DWELL);
		return () => clearInterval(timer);
	});

	function select(i: number) {
		index = i;
		// Restart the dwell, so a chosen entry gets its full turn.
		cycle += 1;
	}

	/**
	 * Hover and focus each hold the panel on their own, so leaving with the
	 * pointer cannot resume a panel the keyboard is still inside. On the last
	 * one to leave, the timer and the fill start over together.
	 */
	function setHovered(value: boolean) {
		hovered = value;
		if (!value && !focused) cycle += 1;
	}

	function releaseFocus(event: FocusEvent) {
		// focusout also fires when focus moves between the panel's own controls.
		const next = event.relatedTarget;
		if (next instanceof Node && panel?.contains(next)) return;
		focused = false;
		if (!hovered) cycle += 1;
	}

	function toggleHold() {
		held = !held;
		if (!held) cycle += 1;
	}

	function year(value: number): string {
		return value < 0 ? m.year_bce({ year: -value }) : String(value);
	}
</script>

{#if frame}
	<section
		class="flex flex-col overflow-hidden rounded-3xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)]"
		aria-label={m.home_featured_aria()}
		bind:this={panel}
		style:--dwell={`${DWELL}ms`}
		onpointerenter={() => setHovered(true)}
		onpointerleave={() => setHovered(false)}
		onfocusin={() => (focused = true)}
		onfocusout={releaseFocus}
	>
		<div class="flex flex-col gap-1.5 px-6 pt-6 pb-4">
			<p class="text-xs tracking-widest text-[color:var(--color-ink-faint)] uppercase">
				{frame.kind === 'pattern' ? m.nav_patterns() : m.nav_pathways()}
			</p>
			<h2 class="font-serif text-xl leading-snug" lang="en">{frame.question}</h2>
			<p class="text-sm text-[color:var(--color-ink-soft)]" lang="en">{frame.caption}</p>
		</div>

		<div
			class="map relative border-t border-[color:var(--color-rule)] bg-[color:var(--color-surface-sunken)]"
		>
			<WorldMap points={frame.map} animateKey={frame.slug} radius={8} />
			<span class="absolute right-3 bottom-2 text-[0.65rem] text-[color:var(--color-ink-faint)]">
				{m.home_map_count({ count: frame.map.length })}
			</span>
		</div>

		{#key frame.slug}
			<ul class="slide flex min-h-[14rem] flex-col" in:fade={{ duration: 320 }}>
				{#each frame.rows as row, i (row.key)}
					{@const tone = strategyColor(row.color)}
					<li
						style:--i={i}
						style:box-shadow={`inset 3px 0 0 0 ${tone.band}`}
						class="flex flex-col gap-1 border-t border-[color:var(--color-rule)] px-5 py-3 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4 sm:gap-y-1 sm:px-6 sm:py-2.5"
					>
						<div
							class="flex gap-2 text-xs text-[color:var(--color-ink-soft)] sm:block sm:w-28 sm:shrink-0"
							lang="en"
						>
							<span>{row.label}</span>
							{#if row.sub}
								<span class="text-[color:var(--color-ink-faint)]">{row.sub}</span>
							{/if}
						</div>
						<div class="min-w-0 flex-1">
							<p class="font-serif text-lg leading-snug" dir="auto">
								{#if row.mark}
									{row.mark.before}<mark
										style:background={tone.soft}
										style:color={tone.textOn}
										class="rounded px-0.5"
										title={row.chip}>{row.mark.hit}</mark
									>{row.mark.after}
								{:else}
									{row.primary}
								{/if}
							</p>
							{#if row.secondary}
								<p class="text-xs text-[color:var(--color-ink-soft)]" lang="en">{row.secondary}</p>
							{/if}
						</div>
						{#if row.chip}
							<span
								style:background={tone.soft}
								style:border-color={tone.border}
								style:color={tone.textOn}
								class="self-start rounded-full border px-2 py-0.5 text-[0.65rem] sm:shrink-0"
								lang="en"
							>
								{row.chip}
							</span>
						{:else if row.year !== undefined}
							<span class="shrink-0 text-xs text-[color:var(--color-ink-faint)]">
								{year(row.year)}
							</span>
						{/if}
					</li>
				{/each}
			</ul>
		{/key}

		<div
			class="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-[color:var(--color-rule)] bg-[color:var(--color-surface-sunken)] px-6 py-3"
		>
			<div class="flex items-center gap-1">
				<button
					type="button"
					onclick={() => select((index - 1 + frames.length) % frames.length)}
					aria-label={m.home_previous_entry()}
					class="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--color-rule)] text-sm transition hover:border-[color:var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
				>
					←
				</button>
				<button
					type="button"
					onclick={toggleHold}
					aria-pressed={held}
					aria-label={held ? m.home_resume_rotation() : m.home_pause_rotation()}
					class="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--color-rule)] text-xs transition hover:border-[color:var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
				>
					{held ? '▶' : '❚❚'}
				</button>
				<button
					type="button"
					onclick={() => select((index + 1) % frames.length)}
					aria-label={m.home_next_entry()}
					class="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--color-rule)] text-sm transition hover:border-[color:var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
				>
					→
				</button>
			</div>

			<div class="flex flex-wrap items-center gap-1.5">
				{#each frames as f, i (f.slug)}
					<button
						type="button"
						onclick={() => select(i)}
						aria-label={f.question}
						aria-current={i === index}
						title={f.question}
						class="group -my-1 flex h-7 items-center px-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
					>
						<span
							class="block h-1.5 overflow-hidden rounded-full bg-[color:var(--color-rule)] transition-all duration-300 group-hover:bg-[color:var(--color-ink-faint)]"
							class:w-6={i === index}
							class:w-1.5={i !== index}
						>
							{#if i === index}
								{#key cycle}
									<span
										class="tick block h-full rounded-full bg-[color:var(--color-ink)]"
										class:paused={paused || held || reduced || frames.length < 2}
									></span>
								{/key}
							{/if}
						</span>
					</button>
				{/each}
			</div>
			<a
				href={localizeHref(`/${frame.kind === 'pattern' ? 'patterns' : 'pathways'}/${frame.slug}`)}
				class="group shrink-0 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
			>
				{m.home_open_entry()}
				<span class="inline-block transition-transform group-hover:translate-x-1">→</span>
			</a>
		</div>
	</section>
{/if}

<style>
	.tick {
		width: 100%;
		animation: dwell var(--dwell, 7000ms) linear forwards;
	}

	.tick.paused {
		animation-play-state: paused;
	}

	@keyframes dwell {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	.map {
		--map-land: var(--color-rule);
	}

	.slide li {
		animation: reveal 420ms ease-out backwards;
		animation-delay: calc(var(--i, 0) * 45ms);
	}

	@keyframes reveal {
		from {
			opacity: 0;
			transform: translateX(10px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.slide li,
		.tick {
			animation: none;
		}
	}
</style>
