<script lang="ts">
	interface Props {
		question: string;
		title: string;
		summary: string;
		href: string;
		category: string[];
		kind: 'pattern' | 'pathway';
		external?: boolean;
	}
	let { question, title, summary, href, category, kind, external = false }: Props = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener' : undefined}
	class="group flex flex-col gap-3 rounded-2xl border border-[color:var(--color-rule)] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[oklch(70%_0.05_260)] hover:shadow-md"
>
	<div class="flex items-center gap-2 text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]">
		<span
			class="rounded-full px-2 py-0.5"
			class:bg-[oklch(94%_0.04_230)]={kind === 'pattern'}
			class:bg-[oklch(94%_0.04_295)]={kind === 'pathway'}
		>
			{kind === 'pattern' ? 'Pattern' : 'Pathway'}
		</span>
		{#each category.slice(0, 1) as cat (cat)}
			<span>{cat}</span>
		{/each}
	</div>
	<h3 class="font-serif text-2xl leading-tight">
		<span class="text-[color:var(--color-ink-soft)]">{question}</span>
	</h3>
	<p class="text-sm text-[color:var(--color-ink-soft)]">{summary}</p>
	<div class="mt-auto flex items-center justify-between pt-2 text-sm">
		<span class="font-medium">{title}</span>
		<span class="transition" class:group-hover:translate-x-1={!external} class:group-hover:-translate-y-0.5={external}>
			{external ? '↗' : '→'}
		</span>
	</div>
</a>
