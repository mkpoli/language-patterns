export const SITE_URL = 'https://languagepatterns.org';
export const SITE_NAME = 'Language Patterns';
export const SITE_TAGLINE = 'Recurring patterns across languages, space, and time.';
export const SITE_DESCRIPTION =
	'Language Patterns is a typological and historical database of recurring linguistic patterns across the world’s languages. It documents how languages converge, diverge, distribute, and change — from negation cycles and existential expressions to sound shifts, word order, polarity systems, and grammaticalization pathways.';
export const SITE_KEYWORDS = [
	'linguistics',
	'typology',
	'historical linguistics',
	'cross-linguistic',
	'language change',
	'language patterns',
	'linguistic patterns',
	'language universals',
	'comparative linguistics',
	'diachrony',
	'grammaticalization',
	'negation cycle',
	'WALS'
];
export const TWITTER_HANDLE = '';

export function canonical(path: string): string {
	if (!path.startsWith('/')) path = '/' + path;
	return SITE_URL + (path === '/' ? '' : path);
}

export function truncate(text: string, max = 160): string {
	if (text.length <= max) return text;
	return text.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}
