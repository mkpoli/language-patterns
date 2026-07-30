<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import {
		REPO_URL,
		TEMPLATE,
		contributingUrl,
		issueUrl,
		issuesUrl,
		pullsUrl
	} from '$lib/contribute';

	interface Route {
		heading: string;
		body: string;
		links: { label: string; href: string }[];
	}

	const routes: Route[] = $derived([
		{
			heading: m.contribute_report_heading(),
			body: m.contribute_report_body(),
			links: [
				{ label: m.contribute_dispute(), href: issueUrl(TEMPLATE.dispute) },
				{ label: m.contribute_add_language(), href: issueUrl(TEMPLATE.addLanguage) },
				{ label: m.contribute_source(), href: issueUrl(TEMPLATE.source) },
				{ label: m.contribute_all_issues(), href: issuesUrl }
			]
		},
		{
			heading: m.contribute_fix_heading(),
			body: m.contribute_fix_body(),
			links: [
				{ label: m.contribute_guide(), href: contributingUrl },
				{ label: m.contribute_repository(), href: REPO_URL },
				{ label: m.contribute_pull_requests(), href: pullsUrl }
			]
		},
		{
			heading: m.contribute_propose_heading(),
			body: m.contribute_propose_body(),
			links: [{ label: m.contribute_new_topic(), href: issueUrl(TEMPLATE.newTopic) }]
		}
	]);

	const notes = $derived([
		{ heading: m.contribute_needs_heading(), body: m.contribute_needs_body() },
		{ heading: m.contribute_grades_heading(), body: m.contribute_grades_body() }
	]);
</script>

<Seo title={m.contribute_title()} description={m.contribute_lede()} path="/contribute" />

<article class="flex flex-col gap-10">
	<header class="flex flex-col gap-3">
		<h1 class="font-serif text-4xl leading-tight">{m.contribute_title()}</h1>
		<p class="max-w-3xl text-base">{m.contribute_lede()}</p>
	</header>

	<section class="grid gap-4 lg:grid-cols-3">
		{#each routes as route (route.heading)}
			<div
				class="flex flex-col gap-3 rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-5"
			>
				<h2 class="font-serif text-xl leading-snug">{route.heading}</h2>
				<p class="flex-1 text-sm text-[color:var(--color-ink-soft)]">{route.body}</p>
				<ul class="flex flex-wrap gap-2">
					{#each route.links as link (link.href)}
						<li>
							<a
								href={link.href}
								target="_blank"
								rel="noopener"
								class="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-surface-sunken)] px-3 py-1.5 text-sm transition-colors hover:border-[color:var(--color-accent)]"
							>
								{link.label}
								<span aria-hidden="true" class="text-[color:var(--color-ink-faint)]">↗</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</section>

	<section class="grid gap-8 lg:grid-cols-2">
		{#each notes as note (note.heading)}
			<div class="border-l-2 border-[color:var(--color-rule)] pl-4">
				<h2 class="font-serif text-2xl">{note.heading}</h2>
				<p class="mt-2 text-base text-[color:var(--color-ink-soft)]">{note.body}</p>
			</div>
		{/each}
	</section>

	<section class="text-sm text-[color:var(--color-ink-soft)]">
		<h2 class="font-serif text-lg text-[color:var(--color-ink)]">
			{m.contribute_license_heading()}
		</h2>
		<p class="mt-1 max-w-3xl">
			{m.contribute_license_body()}
		</p>
	</section>
</article>
