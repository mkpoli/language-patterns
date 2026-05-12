<script lang="ts">
	import type { Citation } from '$lib/types';
	import { getSource } from '$lib/data/sources';

	interface Props {
		citations: Citation[];
		title?: string;
	}
	let { citations, title = 'References' }: Props = $props();

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
		<ol class="flex flex-col gap-3 text-sm">
			{#each items as src (src.id)}
				<li id={`ref-${src.id}`} class="grid grid-cols-[max-content_1fr] items-baseline gap-3 rounded-xl border border-[color:var(--color-rule)] bg-white p-3">
					<span class="rounded-md bg-[oklch(96%_0.005_260)] px-2 py-0.5 font-mono text-[11px] text-[color:var(--color-ink-soft)]">
						{src.authors[0].split(',')[0]}{src.authors.length > 1 ? (src.authors.length === 2 ? ' & ' + src.authors[1].split(',')[0] : ' et al.') : ''} {src.year}
					</span>
					<div>
						<div>
							<span class="font-medium">{src.authors.join('; ')}</span>
							<span class="text-[color:var(--color-ink-soft)]"> ({src.year}).</span>
						</div>
						<div class="font-serif italic">{src.title}.</div>
						<div class="text-[color:var(--color-ink-soft)]">
							{#if src.editors?.length}
								In {src.editors.join('; ')} (eds.),
							{/if}
							{#if src.container}<span>{src.container}.</span>{/if}
							{#if src.publisher}<span> {src.publisher}.</span>{/if}
							{#if src.pages}<span> {src.pages}.</span>{/if}
							{#if src.url}
								<a class="underline" href={src.url} target="_blank" rel="noopener noreferrer">{src.url}</a>
							{/if}
							{#if src.doi}
								<a class="underline" href={`https://doi.org/${src.doi}`} target="_blank" rel="noopener noreferrer">doi:{src.doi}</a>
							{/if}
						</div>
					</div>
				</li>
			{/each}
		</ol>
	</section>
{/if}
