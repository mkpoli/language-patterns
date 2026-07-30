/**
 * Links from a rendered entry back to the record behind it: the file it is
 * written in, and the issue forms for disputing what it says.
 */

export const REPO_URL = 'https://github.com/mkpoli/language-patterns';
export const REPO_BRANCH = 'main';

export type EntryKind = 'pattern' | 'pathway';

/** Issue forms under `.github/ISSUE_TEMPLATE/`. */
export const TEMPLATE = {
	dispute: 'dispute.yml',
	addLanguage: 'add-language.yml',
	source: 'source.yml',
	newTopic: 'new-topic.yml'
} as const;

const DIR: Record<EntryKind, string> = { pattern: 'patterns', pathway: 'pathways' };

/** One entry, one file, named after the slug. */
export function dataFile(kind: EntryKind, slug: string): string {
	return `src/lib/data/${DIR[kind]}/${slug}.ts`;
}

export function fileUrl(kind: EntryKind, slug: string): string {
	return `${REPO_URL}/blob/${REPO_BRANCH}/${dataFile(kind, slug)}`;
}

export function editUrl(kind: EntryKind, slug: string): string {
	return `${REPO_URL}/edit/${REPO_BRANCH}/${dataFile(kind, slug)}`;
}

export function historyUrl(kind: EntryKind, slug: string): string {
	return `${REPO_URL}/commits/${REPO_BRANCH}/${dataFile(kind, slug)}`;
}

export const issuesUrl = `${REPO_URL}/issues`;
export const pullsUrl = `${REPO_URL}/pulls`;
export const contributingUrl = `${REPO_URL}/blob/${REPO_BRANCH}/CONTRIBUTING.md`;

/**
 * Prefills an issue form. Keys match the `id` of each field in the template,
 * so the reporter lands on a form that already knows which entry they came
 * from.
 */
export function issueUrl(template: string, fields: Record<string, string> = {}): string {
	const params = new URLSearchParams({ template, ...fields });
	return `${REPO_URL}/issues/new?${params.toString()}`;
}

/** The identifier an issue form carries to name the entry under dispute. */
export function entryRef(kind: EntryKind, slug: string, title: string): string {
	return `${title} (${DIR[kind]}/${slug})`;
}
