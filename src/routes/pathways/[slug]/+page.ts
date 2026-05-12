import { error } from '@sveltejs/kit';
import { getPathway } from '$lib/data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const pathway = getPathway(params.slug);
	if (!pathway) throw error(404, `Pathway not found: ${params.slug}`);
	return { pathway };
};

export const prerender = true;

export function entries() {
	return [{ slug: 'jespersens-cycle' }];
}
