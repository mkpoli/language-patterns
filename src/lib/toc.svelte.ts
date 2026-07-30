import { onMount } from 'svelte';
import { afterNavigate } from '$app/navigation';
import { collectHeadings, flatten, type TocHeading } from './toc';

/**
 * Height from the viewport top at which a heading counts as "being read".
 * Proportional to the viewport so a heading resting near the top of the screen
 * is the one highlighted, on a phone as much as on a desktop.
 */
function readingLine() {
	return Math.max(140, Math.round(window.innerHeight * 0.3));
}
/** Ignore observer-driven updates while a click-initiated scroll is settling. */
const SUPPRESS_MS = 900;

export interface Toc {
	readonly headings: TocHeading[];
	readonly activeId: string | null;
	readonly progress: number;
	navigate: (id: string) => void;
}

export function createToc(getRoot: () => HTMLElement | null): Toc {
	let headings = $state<TocHeading[]>([]);
	let activeId = $state<string | null>(null);
	let progress = $state(0);
	let suppressUntil = 0;

	let root: HTMLElement | null = null;
	let io: IntersectionObserver | null = null;
	let mo: MutationObserver | null = null;
	let collectRaf = 0;
	let scrollRaf = 0;

	function setActive(id: string | null) {
		if (id === activeId) return;
		activeId = id;
		const hash = window.scrollY < 8 || !id ? '' : `#${id}`;
		if (window.location.hash !== hash) {
			history.replaceState(null, '', window.location.pathname + window.location.search + hash);
		}
	}

	function updateActive() {
		if (Date.now() < suppressUntil) return;
		const flat = flatten(headings);
		if (!flat.length) {
			setActive(null);
			return;
		}
		// Last section too short to ever reach the reading line: at the page
		// bottom, it wins outright.
		const doc = document.documentElement;
		if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
			setActive(flat[flat.length - 1].id);
			return;
		}
		const line = readingLine();
		let current: string | null = null;
		for (const h of flat) {
			const el = document.getElementById(h.id);
			if (!el) continue;
			if (el.getBoundingClientRect().top <= line) current = h.id;
			else break;
		}
		setActive(current ?? flat[0].id);
	}

	function updateProgress() {
		if (!root) return;
		const rect = root.getBoundingClientRect();
		const total = rect.height - window.innerHeight;
		progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1;
	}

	function observeAll() {
		if (!io) return;
		io.disconnect();
		for (const h of flatten(headings)) {
			const el = document.getElementById(h.id);
			if (el) io.observe(el);
		}
	}

	function recollect() {
		if (!root) return;
		headings = collectHeadings(root);
		if (activeId && !document.getElementById(activeId)) activeId = null;
		observeAll();
		updateActive();
	}

	function scheduleCollect() {
		if (collectRaf) return;
		collectRaf = requestAnimationFrame(() => {
			collectRaf = 0;
			recollect();
		});
	}

	function attach(next: HTMLElement) {
		if (root === next) {
			recollect();
			return;
		}
		mo?.disconnect();
		root = next;
		mo = new MutationObserver(scheduleCollect);
		mo.observe(root, { childList: true, subtree: true, characterData: true });
		recollect();
	}

	function onScroll() {
		if (scrollRaf) return;
		scrollRaf = requestAnimationFrame(() => {
			scrollRaf = 0;
			updateProgress();
			updateActive();
		});
	}

	onMount(() => {
		// Scrolling drives the rect-based pick; the observer catches the rest —
		// sections that appear, resize or reflow without the page moving.
		io = new IntersectionObserver(updateActive, {
			rootMargin: '0px 0px -40% 0px'
		});

		const initial = getRoot();
		if (initial) attach(initial);
		updateProgress();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });

		// Deep link: the browser's native anchor jump happens before hydration
		// assigns our generated ids, so redo it once headings exist.
		requestAnimationFrame(() => {
			const id = decodeURIComponent(window.location.hash.slice(1));
			const el = id && document.getElementById(id);
			if (el) {
				el.scrollIntoView({ block: 'start' });
				setActive(id);
			}
		});

		return () => {
			io?.disconnect();
			io = null;
			mo?.disconnect();
			mo = null;
			root = null;
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (collectRaf) cancelAnimationFrame(collectRaf);
			if (scrollRaf) cancelAnimationFrame(scrollRaf);
		};
	});

	afterNavigate(() => {
		suppressUntil = 0;
		const next = getRoot();
		if (next) attach(next);
		updateProgress();
	});

	return {
		get headings() {
			return headings;
		},
		get activeId() {
			return activeId;
		},
		get progress() {
			return progress;
		},
		navigate(id: string) {
			const el = document.getElementById(id);
			if (!el) return;
			const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			suppressUntil = Date.now() + (reduced ? 200 : SUPPRESS_MS);
			activeId = id;
			el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
			history.replaceState(null, '', `#${id}`);
		}
	};
}
