<script lang="ts">
	import { strategyColor } from '$lib/strategyColor';
	import type { Strategy } from '$lib/types';

	/**
	 * The shapes the site draws with: bands for a form that holds a stretch of
	 * time, and a dashed return for a cycle that comes back to where it began.
	 * Decorative — the data itself sits in the panels beside it.
	 */
	interface Band {
		row: number;
		x: number;
		width: number;
		color: Strategy['color'];
	}

	const bands: Band[] = [
		{ row: 0, x: 8, width: 150, color: 'sky' },
		{ row: 0, x: 168, width: 96, color: 'amber' },
		{ row: 1, x: 44, width: 104, color: 'emerald' },
		{ row: 1, x: 158, width: 148, color: 'sky' },
		{ row: 2, x: 0, width: 76, color: 'violet' },
		{ row: 2, x: 86, width: 186, color: 'amber' },
		{ row: 3, x: 60, width: 122, color: 'rose' },
		{ row: 3, x: 192, width: 88, color: 'emerald' },
		{ row: 4, x: 24, width: 168, color: 'amber' },
		{ row: 4, x: 202, width: 104, color: 'violet' }
	];

	const rowHeight = 26;
	const gap = 12;
	const y = (row: number) => row * (rowHeight + gap);
	const height = 5 * (rowHeight + gap) - gap;
</script>

<svg
	viewBox={`-4 -8 372 ${height + 16}`}
	class="figure block h-auto w-full"
	aria-hidden="true"
	role="presentation"
>
	<defs>
		<marker
			id="hero-arrow"
			viewBox="0 0 10 10"
			refX="8"
			refY="5"
			markerWidth="5"
			markerHeight="5"
			orient="auto-start-reverse"
		>
			<path d="M 0 1 L 9 5 L 0 9 z" fill="var(--color-ink-faint)" />
		</marker>
	</defs>

	<!-- centuries, or languages: the axis the bands are read against -->
	{#each [0, 1, 2, 3] as tick (tick)}
		<line
			x1={40 + tick * 88}
			y1="-6"
			x2={40 + tick * 88}
			y2={height + 2}
			stroke="var(--color-rule)"
			stroke-width="1"
		/>
	{/each}

	{#each bands as band, i (i)}
		{@const tone = strategyColor(band.color)}
		<rect
			class="band"
			style:--i={i}
			x={band.x}
			y={y(band.row)}
			width={band.width}
			height={rowHeight}
			rx={rowHeight / 2}
			fill={tone.soft}
			stroke={tone.border}
			stroke-width="1.5"
		/>
	{/each}

	<!-- the cycle: the last row reaching back to the first -->
	<path
		d={`M 300 ${y(4) + rowHeight / 2} C 356 ${y(4)} 352 ${y(1)} 276 ${y(0) + rowHeight / 2}`}
		fill="none"
		stroke="var(--color-ink-faint)"
		stroke-width="1.5"
		stroke-dasharray="5 6"
		marker-end="url(#hero-arrow)"
	/>
</svg>

<style>
	.band {
		animation: grow 520ms cubic-bezier(0.2, 0.8, 0.3, 1) backwards;
		animation-delay: calc(var(--i, 0) * 60ms);
		transform-box: fill-box;
		transform-origin: left center;
	}

	@keyframes grow {
		from {
			opacity: 0;
			transform: scaleX(0.2);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.band {
			animation: none;
		}
	}
</style>
