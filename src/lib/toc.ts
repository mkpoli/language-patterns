export interface TocHeading {
	id: string;
	text: string;
	depth: 2 | 3;
	children: TocHeading[];
}

/** Unicode-aware slug: keeps letters and numbers (including CJK), dashes for the rest. */
export function slugify(text: string): string {
	const s = text
		.trim()
		.toLowerCase()
		.replace(/[^\p{L}\p{N}]+/gu, '-')
		.replace(/^-+|-+$/g, '');
	return s || 'section';
}

/**
 * Walk an article for h2/h3 and return them nested (h3 under the preceding h2).
 * Headings without an id get one derived from their text, unique within the page.
 * Headings inside [data-toc-ignore] (the TOC widgets themselves) are skipped.
 */
export function collectHeadings(root: HTMLElement): TocHeading[] {
	const els = Array.from(root.querySelectorAll<HTMLElement>('h2, h3')).filter(
		(el) => !el.closest('[data-toc-ignore]')
	);
	const used = new Map<string, number>();
	const items: TocHeading[] = [];
	let current: TocHeading | null = null;

	for (const el of els) {
		if (!el.id) {
			const base = slugify(el.textContent ?? '');
			const n = (used.get(base) ?? 0) + 1;
			used.set(base, n);
			el.id = n === 1 ? base : `${base}-${n}`;
		}
		const item: TocHeading = {
			id: el.id,
			text: (el.textContent ?? '').trim(),
			depth: el.tagName === 'H2' ? 2 : 3,
			children: []
		};
		if (item.depth === 2) {
			items.push(item);
			current = item;
		} else if (current) {
			current.children.push(item);
		} else {
			items.push(item);
		}
	}
	return items;
}

export function flatten(items: TocHeading[]): TocHeading[] {
	return items.flatMap((h) => [h, ...h.children]);
}

/** Scroll the link for `id` into view inside a scrollable TOC container (nearest edge). */
export function scrollLinkIntoView(container: HTMLElement, id: string) {
	const link = container.querySelector<HTMLElement>(`a[href="#${CSS.escape(id)}"]`);
	if (!link) return;
	const c = container.getBoundingClientRect();
	const l = link.getBoundingClientRect();
	if (l.top < c.top) container.scrollTop -= c.top - l.top + 8;
	else if (l.bottom > c.bottom) container.scrollTop += l.bottom - c.bottom + 8;
}
