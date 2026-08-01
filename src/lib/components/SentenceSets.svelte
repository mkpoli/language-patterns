<script lang="ts">
	import { sentenceSets } from '$lib/home';
	import { strategyColor } from '$lib/strategyColor';
	import { m } from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';

	const sets = sentenceSets();
	let active = $state(0);
	const set = $derived(sets[active]);
</script>

{#if set}
	<div class="flex flex-col gap-5">
		<div class="flex flex-wrap gap-2">
			{#each sets as option, i (option.key)}
				<button
					type="button"
					onclick={() => (active = i)}
					aria-pressed={i === active}
					class="rounded-full border px-3 py-1.5 text-left font-serif text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
					class:border-[color:var(--color-accent)]={i === active}
					class:bg-[color:var(--color-surface)]={i === active}
					class:border-[color:var(--color-rule)]={i !== active}
					class:text-[color:var(--color-ink-soft)]={i !== active}
					lang="en"
				>
					{option.title}
				</button>
			{/each}
		</div>

		<div class="flex flex-wrap items-center gap-1.5 text-xs">
			{#each set.legend as entry (entry.label)}
				{@const tone = strategyColor(entry.color)}
				<span
					class="rounded-full border px-2.5 py-0.5"
					style:background={tone.soft}
					style:border-color={tone.border}
					style:color={tone.textOn}
				>
					{entry.label}
				</span>
			{/each}
			<span class="ms-auto text-[color:var(--color-ink-faint)]">
				{m.home_map_count({ count: set.rows.length })}
			</span>
		</div>

		{#key set.key}
			<ul class="sentences lg:columns-2 lg:gap-x-10">
				{#each set.rows as row, i (row.key)}
					{@const tone = strategyColor(row.color)}
					<li style:--i={Math.min(i, 24)} class="break-inside-avoid">
						<a
							href={localizeHref(`/patterns/${set.slug}`)}
							class="group grid grid-cols-[3px_1fr] items-start gap-x-3 border-b border-[color:var(--color-rule)] py-3 sm:grid-cols-[3px_8rem_1fr] sm:gap-x-4"
						>
							<span
								class="row-span-2 h-full rounded-full sm:row-span-1"
								style:background={tone.band}
								title={row.strategy}
								aria-hidden="true"
							></span>
							<span class="text-xs leading-tight text-[color:var(--color-ink-soft)]" lang="en">
								{#if row.endonym}
									<span class="block text-[color:var(--color-ink)]">{row.endonym}</span>
								{/if}
								<span class="block">{row.language}</span>
							</span>
							<span class="col-start-2 min-w-0 sm:col-start-3">
								<span class="block font-serif text-lg leading-snug" dir="auto">
									{#if row.mark}
										{row.mark.before}<mark
											style:background={tone.soft}
											style:color={tone.textOn}
											class="rounded px-0.5">{row.mark.hit}</mark
										>{row.mark.after}
									{:else}
										{row.original}
									{/if}
								</span>
								{#if row.transliteration}
									<span class="block text-xs text-[color:var(--color-ink-faint)] italic">
										{row.transliteration}
									</span>
								{/if}
								<span class="mt-0.5 block text-xs text-[color:var(--color-ink-soft)]" lang="en">
									{row.literal}
								</span>
								{#if row.gloss}
									<span
										class="grid grid-rows-[0fr] overflow-hidden font-mono text-[0.7rem] text-[color:var(--color-ink-soft)] transition-all duration-200 group-hover:grid-rows-[1fr] group-hover:pt-1 group-focus-visible:grid-rows-[1fr] group-focus-visible:pt-1"
									>
										<span class="min-h-0">{row.gloss}</span>
									</span>
								{/if}
							</span></a
						>
					</li>
				{/each}
			</ul>
		{/key}
	</div>
{/if}

<style>
	.sentences li {
		animation: sweep 380ms ease-out backwards;
		animation-delay: calc(var(--i, 0) * 26ms);
	}

	@keyframes sweep {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.sentences li {
			animation: none;
		}
	}
</style>
