<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { SITE_URL } from '$lib/seo';
	import {
		TEMPLATE,
		dataFile,
		editUrl,
		entryRef,
		fileUrl,
		historyUrl,
		issueUrl,
		type EntryKind
	} from '$lib/contribute';

	interface Props {
		kind: EntryKind;
		slug: string;
		title: string;
	}
	let { kind, slug, title }: Props = $props();

	const path = $derived(`/${kind === 'pattern' ? 'patterns' : 'pathways'}/${slug}`);
	// Field ids the issue forms declare, so the reporter arrives with the entry
	// already identified.
	const prefill = $derived({ entry: entryRef(kind, slug, title), page: SITE_URL + path });

	const actions = $derived([
		{ label: m.contribute_dispute(), href: issueUrl(TEMPLATE.dispute, prefill) },
		{ label: m.contribute_add_language(), href: issueUrl(TEMPLATE.addLanguage, prefill) },
		{ label: m.contribute_source(), href: issueUrl(TEMPLATE.source, prefill) }
	]);
</script>

<section
	class="rounded-3xl border border-dashed border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-6"
>
	<h2 class="font-serif text-2xl">{m.contribute_entry_heading()}</h2>
	<p class="mt-2 max-w-3xl text-sm text-[color:var(--color-ink-soft)]">
		{m.contribute_entry_body()}
	</p>

	<div class="mt-4 flex flex-wrap gap-2">
		{#each actions as action (action.href)}
			<a
				href={action.href}
				target="_blank"
				rel="noopener"
				class="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-surface-sunken)] px-3 py-1.5 text-sm transition-colors hover:border-[color:var(--color-accent)]"
			>
				{action.label}
				<span aria-hidden="true" class="text-[color:var(--color-ink-faint)]">↗</span>
			</a>
		{/each}
	</div>

	<div
		class="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[color:var(--color-rule)] pt-4 text-xs text-[color:var(--color-ink-soft)]"
	>
		<span>{m.contribute_entry_file()}</span>
		<a
			href={fileUrl(kind, slug)}
			target="_blank"
			rel="noopener"
			class="font-mono break-all underline decoration-[color:var(--color-rule)] underline-offset-2 hover:decoration-[color:var(--color-ink)]"
		>
			{dataFile(kind, slug)}
		</a>
		<a
			href={editUrl(kind, slug)}
			target="_blank"
			rel="noopener"
			class="underline decoration-[color:var(--color-rule)] underline-offset-2 hover:decoration-[color:var(--color-ink)]"
		>
			{m.contribute_edit()} ↗
		</a>
		<a
			href={historyUrl(kind, slug)}
			target="_blank"
			rel="noopener"
			class="underline decoration-[color:var(--color-rule)] underline-offset-2 hover:decoration-[color:var(--color-ink)]"
		>
			{m.contribute_history()} ↗
		</a>
		<a href="/contribute" class="ms-auto hover:text-[color:var(--color-ink)]">
			{m.contribute_more()} →
		</a>
	</div>
</section>
