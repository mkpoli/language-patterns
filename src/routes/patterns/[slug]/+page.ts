import { error } from '@sveltejs/kit';
import { getPattern } from '$lib/data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const pattern = getPattern(params.slug);
	if (!pattern) throw error(404, `Pattern not found: ${params.slug}`);
	return { pattern };
};

export const prerender = true;

export function entries() {
	return [{ slug: 'existence' }, { slug: 'possession' }, { slug: 'non-possession' }];
}
