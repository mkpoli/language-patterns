import { error } from '@sveltejs/kit';
import { getTag, topicsWithTag, usedTagIds, type TagId } from '$lib/data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const id = params.id as TagId;
	if (!usedTagIds.includes(id)) throw error(404, `Tag not found: ${params.id}`);
	return { tag: getTag(id), topics: topicsWithTag(id) };
};

export const prerender = true;

export function entries() {
	return usedTagIds.map((id) => ({ id }));
}
