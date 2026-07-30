import { patterns, pathways, usedTagIds } from '$lib/data';
import { locales } from '$lib/paraglide/runtime';
import { alternates, canonical } from '$lib/seo';

export const prerender = true;

interface Entry {
	loc: string;
	changefreq: string;
	priority: string;
}

function escapeXml(str: string): string {
	return str.replace(/[<>&'"]/g, (c) =>
		({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!
	);
}

export function GET() {
	const entries: Entry[] = [
		{ loc: '/', changefreq: 'weekly', priority: '1.0' },
		{ loc: '/patterns', changefreq: 'weekly', priority: '0.9' },
		{ loc: '/pathways', changefreq: 'weekly', priority: '0.9' },
		{ loc: '/contribute', changefreq: 'monthly', priority: '0.5' },
		...patterns.map((p) => ({ loc: `/patterns/${p.slug}`, changefreq: 'monthly', priority: '0.8' })),
		...pathways.map((p) => ({ loc: `/pathways/${p.slug}`, changefreq: 'monthly', priority: '0.8' })),
		{ loc: '/tags', changefreq: 'weekly', priority: '0.7' },
		...usedTagIds.map((id) => ({ loc: `/tags/${id}`, changefreq: 'monthly', priority: '0.5' }))
	];

	// One <url> per locale, each listing the whole set as alternates, so a
	// crawler can reach the Chinese and Japanese pages and knows they are
	// translations of one another rather than duplicates.
	const urls = entries
		.flatMap((e) => {
			const links = alternates(e.loc)
				.map(
					(alt) =>
						`    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${escapeXml(alt.href)}" />`
				)
				.join('\n');
			return locales.map(
				(locale) =>
					`  <url>\n    <loc>${escapeXml(canonical(e.loc, locale))}</loc>\n${links}\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
			);
		})
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
