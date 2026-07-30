<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import { getFacet, groupByFacet, sortTags, type Tag, type TagId } from '$lib/data';
	import { strategyColor } from '$lib/strategyColor';

	interface Props {
		tags: TagId[];
		/** `full` groups by facet and links each tag; `inline` is a flat run of plain chips. */
		variant?: 'full' | 'inline';
		max?: number;
	}
	let { tags, variant = 'full', max }: Props = $props();

	const groups = $derived(variant === 'full' ? groupByFacet(tags) : []);
	const flat = $derived(variant === 'inline' ? sortTags(tags).slice(0, max ?? tags.length) : []);
	const hidden = $derived(variant === 'inline' ? tags.length - flat.length : 0);

	function chipStyle(tag: Tag) {
		const c = strategyColor(getFacet(tag.facet).color);
		return `background:${c.soft};border-color:${c.border};color:${c.textOn}`;
	}
</script>

{#if variant === 'full'}
	<dl class="flex flex-col gap-1.5">
		{#each groups as group (group.facet.id)}
			<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
				<dt
					class="w-20 shrink-0 text-[0.6875rem] uppercase tracking-widest text-[color:var(--color-ink-faint)]"
					title={group.facet.description}
				>
					{group.facet.label}
				</dt>
				<dd class="flex flex-wrap gap-1.5">
					{#each group.tags as tag (tag.id)}
						<a
							href={localizeHref(`/tags/${tag.id}`)}
							title={tag.definition}
							class="rounded-full border px-2.5 py-0.5 text-xs transition hover:brightness-95 dark:hover:brightness-125"
							style={chipStyle(tag)}
						>
							{tag.label}
						</a>
					{/each}
				</dd>
			</div>
		{/each}
	</dl>
{:else}
	<div class="flex flex-wrap items-center gap-1">
		{#each flat as tag (tag.id)}
			<span class="rounded-full border px-2 py-0.5 text-[0.6875rem]" style={chipStyle(tag)}>
				{tag.label}
			</span>
		{/each}
		{#if hidden > 0}
			<span class="text-[0.6875rem] text-[color:var(--color-ink-faint)]">+{hidden}</span>
		{/if}
	</div>
{/if}
