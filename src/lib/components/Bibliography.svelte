<script lang="ts">
	import type { Citation } from '$lib/types';
	import { getSource } from '$lib/data/sources';
	import { m } from '$lib/paraglide/messages.js';

	interface Props {
		citations: Citation[];
		title?: string;
	}
	let { citations, title = m.section_references() }: Props = $props();

	const items = $derived.by(() => {
		const seen = new Set<string>();
		const out = [];
		for (const c of citations) {
			if (seen.has(c.source)) continue;
			seen.add(c.source);
			out.push(getSource(c.source));
		}
		return out.sort((a, b) => {
			const aKey = a.authors[0].split(',')[0].toLowerCase();
			const bKey = b.authors[0].split(',')[0].toLowerCase();
			if (aKey !== bKey) return aKey < bKey ? -1 : 1;
			return Number(a.year) - Number(b.year);
		});
	});
</script>

{#if items.length}
	<section>
		<h2 class="mb-4 font-serif text-2xl">{title}</h2>
		<ol class="flex flex-col gap-2.5 text-sm">
			{#each items as src, idx (src.id)}
				{@const tag =
					src.authors[0].split(',')[0] +
					(src.authors.length > 1
						? src.authors.length === 2
							? ' & ' + src.authors[1].split(',')[0]
							: ' et al.'
						: '') +
					' ' +
					src.year}
				<li
					id={`ref-${src.id}`}
					class="group relative overflow-hidden rounded-xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-4 pl-5 transition-colors hover:border-[color:var(--color-accent)]"
				>
					<span
						aria-hidden="true"
						class="absolute inset-y-0 left-0 w-[3px] bg-[color:var(--color-rule)] transition-colors duration-200 group-hover:bg-[color:var(--color-ink)]"
					></span>
					<div class="flex items-center justify-between gap-3">
						<span
							class="rounded-md bg-[color:var(--color-surface-sunken)] px-2 py-0.5 font-mono text-[11px] text-[color:var(--color-ink-soft)]"
						>
							{tag}
						</span>
						<span
							class="font-mono text-[11px] tabular-nums"
							style="color: var(--color-ink-soft); opacity: 0.45"
						>
							{String(idx + 1).padStart(2, '0')}
						</span>
					</div>
					<div class="mt-2 space-y-0.5">
						<div>
							<span class="font-medium">{src.authors.join('; ')}</span>
							<span class="text-[color:var(--color-ink-soft)]"> ({src.year}).</span>
						</div>
						<div class="font-serif text-[15px] leading-snug italic">{src.title}.</div>
						{#if src.editors?.length || src.container || src.publisher || src.pages || src.url || src.doi}
							<div class="text-[color:var(--color-ink-soft)]">
								{#if src.editors?.length}In {src.editors.join('; ')} (eds.),
								{/if}
								{#if src.container}<span>{src.container}.</span>{/if}
								{#if src.publisher}<span> {src.publisher}.</span>{/if}
								{#if src.pages}<span> {src.pages}.</span>{/if}
								{#if src.url}
									<a
										class="break-all underline decoration-[color:var(--color-rule)] underline-offset-2 hover:decoration-[color:var(--color-ink)]"
										href={src.url}
										target="_blank"
										rel="noopener noreferrer">{src.url}</a
									>
								{/if}
								{#if src.doi}
									<a
										class="underline decoration-[color:var(--color-rule)] underline-offset-2 hover:decoration-[color:var(--color-ink)]"
										href={`https://doi.org/${src.doi}`}
										target="_blank"
										rel="noopener noreferrer">doi:{src.doi}</a
									>
								{/if}
							</div>
						{/if}
					</div>
				</li>
			{/each}
		</ol>
	</section>
{/if}
