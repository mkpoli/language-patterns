<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { Toc } from '$lib/toc.svelte';
	import { scrollLinkIntoView, type TocHeading } from '$lib/toc';

	let { toc }: { toc: Toc } = $props();

	// Claim the gutter the fixed rail parks in (wide viewports only, see toc.css).
	$effect(() => {
		const article = document.querySelector('main article');
		if (!article) return;
		article.classList.add('toc-has-rail');
		return () => {
			article.classList.remove('toc-has-rail');
		};
	});

	let railEl: HTMLElement | undefined = $state();
	$effect(() => {
		const id = toc.activeId;
		if (id && railEl) scrollLinkIntoView(railEl, id);
	});
</script>

{#snippet items(list: TocHeading[])}
	<ul class="flex flex-col">
		{#each list as h (h.id)}
			{@const active = toc.activeId === h.id}
			<li>
				<a
					href={`#${h.id}`}
					aria-current={active ? 'location' : undefined}
					onclick={(e) => {
						e.preventDefault();
						toc.navigate(h.id);
					}}
					class="block border-l-2 py-1 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)] {h.depth ===
					3
						? 'pr-2 pl-6 text-[13px]'
						: 'pr-2 pl-4'} {active
						? 'border-[color:var(--color-accent)] font-medium text-[color:var(--color-ink)]'
						: 'border-transparent text-[color:var(--color-ink-soft)] hover:border-[color:var(--color-rule)] hover:text-[color:var(--color-ink)]'}"
				>
					{h.text}
				</a>
				{#if h.children.length}
					{@render items(h.children)}
				{/if}
			</li>
		{/each}
	</ul>
{/snippet}

{#if toc.headings.length}
	<nav
		bind:this={railEl}
		aria-label={m.toc_title()}
		data-toc-ignore
		class="toc-rail fixed top-28 bottom-6 hidden w-48 overflow-y-auto overscroll-contain xl:block print:hidden"
	>
		<p
			class="mb-3 pl-4 text-xs font-medium tracking-widest text-[color:var(--color-ink-faint)] uppercase"
		>
			{m.toc_title()}
		</p>
		{@render items(toc.headings)}
	</nav>
{/if}

<style>
	/* Park the rail inside the gutter created by article.toc-has-rail … */
	.toc-rail {
		right: max(1rem, calc(50vw - 36rem + 1.5rem));
	}

	/* … and out in the page margin once there is room for it there. */
	@media (min-width: 101rem) {
		.toc-rail {
			right: calc(50vw - 36rem - 13.5rem);
		}
	}
</style>
