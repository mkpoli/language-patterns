interface SwipeHandlers {
	next: () => void;
	prev: () => void;
}

const DISTANCE = 56;
/** How much straighter than the vertical drift a swipe must be to count. */
const STRAIGHTNESS = 1.4;

/** A strip that scrolls sideways swallows the gesture that started inside it. */
function insideSideScroller(target: EventTarget | null, root: HTMLElement): boolean {
	let node = target instanceof Element ? target : null;
	while (node && node !== root) {
		if (node instanceof HTMLElement && node.scrollWidth > node.clientWidth + 1) {
			const overflow = getComputedStyle(node).overflowX;
			if (overflow === 'auto' || overflow === 'scroll') return true;
		}
		node = node.parentElement;
	}
	return false;
}

/**
 * Sideways drag on a touch screen, so a panel that holds one entry at a time
 * can be paged with the thumb. Mouse and pen are left alone.
 */
export function swipe(node: HTMLElement, handlers: SwipeHandlers) {
	let current = handlers;
	let pointer: number | null = null;
	let startX = 0;
	let startY = 0;
	const priorTouchAction = node.style.touchAction;

	function down(event: PointerEvent) {
		if (event.pointerType !== 'touch') return;
		if (insideSideScroller(event.target, node)) return;
		pointer = event.pointerId;
		// Held on the strip rather than the touch target, so a mid-drag
		// re-render of the panel keeps delivering the gesture to this node.
		node.setPointerCapture(event.pointerId);
		startX = event.clientX;
		startY = event.clientY;
	}

	function up(event: PointerEvent) {
		if (event.pointerId !== pointer) return;
		pointer = null;
		const dx = event.clientX - startX;
		const dy = event.clientY - startY;
		if (Math.abs(dx) < DISTANCE) return;
		if (Math.abs(dx) < Math.abs(dy) * STRAIGHTNESS) return;
		if (dx < 0) current.next();
		else current.prev();
	}

	function cancel(event: PointerEvent) {
		if (event.pointerId === pointer) pointer = null;
	}

	node.addEventListener('pointerdown', down, { passive: true });
	node.addEventListener('pointerup', up, { passive: true });
	node.addEventListener('pointercancel', cancel, { passive: true });

	// At the default, the browser takes any pan as a scroll and cancels the
	// pointer events this action reads. pan-y hands the vertical axis to the
	// page and leaves the horizontal drag to the action.
	node.style.touchAction = 'pan-y';

	return {
		update(next: SwipeHandlers) {
			current = next;
		},
		destroy() {
			node.style.touchAction = priorTouchAction;
			node.removeEventListener('pointerdown', down);
			node.removeEventListener('pointerup', up);
			node.removeEventListener('pointercancel', cancel);
		}
	};
}
