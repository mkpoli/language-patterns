<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { Toc } from '$lib/toc.svelte';
	import { flatten, scrollLinkIntoView } from '$lib/toc';

	let { toc }: { toc: Toc } = $props();

	const flat = $derived(flatten(toc.headings));
	const idx = $derived(flat.findIndex((h) => h.id === toc.activeId));
	const current = $derived(idx >= 0 ? flat[idx] : null);

	const RING = 2 * Math.PI * 9;

	let open = $state(false);
	let rootEl: HTMLElement | undefined = $state();
	let panelEl: HTMLElement | undefined = $state();
	let buttonEl: HTMLButtonElement | undefined = $state();

	$effect(() => {
		if (!open) return;
		function onKey(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				open = false;
				buttonEl?.focus();
			}
		}
		function onPointer(e: PointerEvent) {
			if (rootEl && !rootEl.contains(e.target as Node)) open = false;
		}
		document.addEventListener('keydown', onKey);
		document.addEventListener('pointerdown', onPointer);
		return () => {
			document.removeEventListener('keydown', onKey);
			document.removeEventListener('pointerdown', onPointer);
		};
	});

	$effect(() => {
		const id = toc.activeId;
		if (open && id && panelEl) scrollLinkIntoView(panelEl, id);
	});

	function jump(e: MouseEvent, id: string) {
		e.preventDefault();
		toc.navigate(id);
		open = false;
	}
</script>

{#if flat.length}
	<div
		bind:this={rootEl}
		class="fixed right-5 bottom-5 z-40 xl:hidden print:hidden"
		data-toc-ignore
	>
		{#if open}
			<nav
				bind:this={panelEl}
				aria-label={m.toc_title()}
				class="absolute right-0 bottom-full mb-2 max-h-[60vh] w-72 max-w-[calc(100vw-2.5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-2 shadow-[0_12px_40px_var(--color-shadow)]"
			>
				<div class="mb-1 flex items-center justify-between gap-2 px-2 pt-1 pb-2">
					<p
						class="text-xs font-medium tracking-widest text-[color:var(--color-ink-faint)] uppercase"
					>
						{m.toc_title()}
					</p>
					<button
						type="button"
						onclick={() => {
							open = false;
							buttonEl?.focus();
						}}
						class="rounded-full p-1 text-[color:var(--color-ink-soft)] transition-colors hover:bg-[color:var(--color-surface-sunken)] hover:text-[color:var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
					>
						<span class="sr-only">{m.toc_close()}</span>
						<svg viewBox="0 0 16 16" class="h-3.5 w-3.5" aria-hidden="true">
							<path
								d="M4 4l8 8M12 4l-8 8"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
							/>
						</svg>
					</button>
				</div>
				<ul class="flex flex-col">
					{#each flat as h (h.id)}
						{@const active = h.id === toc.activeId}
						<li>
							<a
								href={`#${h.id}`}
								aria-current={active ? 'location' : undefined}
								onclick={(e) => jump(e, h.id)}
								class="block truncate rounded-lg px-3 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)] {h.depth ===
								3
									? 'pl-7 text-[13px]'
									: 'text-sm'} {active
									? 'bg-[color:var(--color-surface-sunken)] font-medium text-[color:var(--color-ink)]'
									: 'text-[color:var(--color-ink-soft)] hover:bg-[color:var(--color-surface-sunken)] hover:text-[color:var(--color-ink)]'}"
							>
								{h.text}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}

		<button
			bind:this={buttonEl}
			type="button"
			aria-expanded={open}
			aria-label={m.toc_title()}
			onclick={() => (open = !open)}
			class="flex items-center gap-2.5 rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] py-2 pr-4 pl-3 shadow-[0_4px_20px_var(--color-shadow)] transition-colors hover:border-[color:var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
		>
			<svg viewBox="0 0 24 24" class="h-5 w-5 -rotate-90" aria-hidden="true">
				<circle cx="12" cy="12" r="9" fill="none" stroke="var(--color-rule)" stroke-width="2.5" />
				<circle
					cx="12"
					cy="12"
					r="9"
					fill="none"
					stroke="var(--color-accent)"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-dasharray={RING}
					stroke-dashoffset={RING * (1 - toc.progress)}
				/>
			</svg>
			<span class="max-w-36 truncate text-sm sm:max-w-48">{current?.text ?? m.toc_title()}</span>
			<span class="font-mono text-xs text-[color:var(--color-ink-faint)]">
				{idx + 1}/{flat.length}
			</span>
		</button>
	</div>
{/if}
