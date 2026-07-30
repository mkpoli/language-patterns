<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import Seo from '$lib/components/Seo.svelte';
	import { tagIndex } from '$lib/data';
	import { strategyColor } from '$lib/strategyColor';
	import { m } from '$lib/paraglide/messages.js';
</script>

<Seo
	title="Tags"
	description="Every pattern and pathway sorted by domain, structure, mechanism and scope — metaphor, metonymy, grammaticalization, syncretism, word order, and the rest."
	path="/tags"
	keywords={['linguistic tags', 'semantic shift', 'grammaticalization', 'typology facets']}
/>

<section class="pb-8">
	<p class="text-xs tracking-widest text-[color:var(--color-ink-soft)] uppercase">{m.nav_tags()}</p>
	<h1 class="font-serif text-3xl">{m.tags_title()}</h1>
	<p class="mt-3 max-w-2xl text-sm text-[color:var(--color-ink-soft)]">{m.tags_subtitle()}</p>
</section>

<div class="flex flex-col gap-10">
	{#each tagIndex as group (group.facet.id)}
		{@const c = strategyColor(group.facet.color)}
		<section>
			<h2 class="font-serif text-2xl">{group.facet.label}</h2>
			<p class="mt-1 mb-4 text-sm text-[color:var(--color-ink-soft)]">
				{group.facet.description}
			</p>
			<ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{#each group.entries as entry (entry.tag.id)}
					<li>
						<a
							href={localizeHref(`/tags/${entry.tag.id}`)}
							class="flex h-full flex-col gap-1 rounded-xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-4 transition hover:-translate-y-0.5 hover:border-[color:var(--color-accent)] hover:shadow-sm"
						>
							<span class="flex items-baseline justify-between gap-2">
								<span
									class="rounded-full border px-2.5 py-0.5 text-xs"
									style={`background:${c.soft};border-color:${c.border};color:${c.textOn}`}
								>
									{entry.tag.label}
								</span>
								<span class="text-xs text-[color:var(--color-ink-faint)]">{entry.count}</span>
							</span>
							<span class="text-sm text-[color:var(--color-ink-soft)]">{entry.tag.definition}</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</div>
