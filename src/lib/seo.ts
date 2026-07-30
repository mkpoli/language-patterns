import {
	baseLocale,
	deLocalizeHref,
	localizeHref,
	locales,
	type Locale
} from '$lib/paraglide/runtime';

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

/** Open Graph wants a full language_TERRITORY tag, not a bare subtag. */
export const OG_LOCALE: Record<Locale, string> = {
	en: 'en_US',
	zh: 'zh_CN',
	ja: 'ja_JP'
};

/**
 * Absolute URL for a route path. Given a locale the path is moved under that
 * locale's prefix first; otherwise it is taken as already carrying the prefix
 * it should have.
 */
export function canonical(path: string, locale?: Locale): string {
	if (!path.startsWith('/')) path = '/' + path;
	const localized = locale ? localizeHref(path, { locale }) : path;
	// One spelling per page: no trailing slash, so /zh matches the bare origin.
	return SITE_URL + localized.replace(/\/$/, '');
}

/** Every locale a page exists in, for `hreflang` alternates. */
export function alternates(path: string): { hreflang: string; href: string }[] {
	const bare = deLocalizeHref(path.startsWith('/') ? path : '/' + path);
	return [
		...locales.map((locale) => ({ hreflang: locale as string, href: canonical(bare, locale) })),
		{ hreflang: 'x-default', href: canonical(bare, baseLocale) }
	];
}

export function truncate(text: string, max = 160): string {
	if (text.length <= max) return text;
	return text.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}
