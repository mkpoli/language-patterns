import { patterns, pathways } from '$lib/data';
import { SITE_URL } from '$lib/seo';

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
		...patterns.map((p) => ({ loc: `/patterns/${p.slug}`, changefreq: 'monthly', priority: '0.8' })),
		...pathways.map((p) => ({ loc: `/pathways/${p.slug}`, changefreq: 'monthly', priority: '0.8' }))
	];

	const urls = entries
		.map((e) =>
			`  <url>\n    <loc>${escapeXml(SITE_URL + (e.loc === '/' ? '' : e.loc))}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
		)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
