<script lang="ts">
	import { world } from '$lib/worldMap';
	import { strategyColor } from '$lib/strategyColor';
	import type { MapPoint } from '$lib/home';

	interface Props {
		points?: MapPoint[];
		/** Radius of a plotted language, in map units. */
		radius?: number;
		borders?: boolean;
		graticule?: boolean;
		/** Restarts the dot animation when this changes. */
		animateKey?: string;
		label?: string;
		/** Breathing room around the framed content, in map units. */
		pad?: number;
		class?: string;
	}

	let {
		points = [],
		radius = 5,
		borders = false,
		graticule = false,
		animateKey = '',
		label,
		pad = 12,
		class: className = ''
	}: Props = $props();

	// Frame the land together with whatever is plotted on it, so no coastline
	// and no language is ever cut off by the edge.
	const box = $derived.by(() => {
		const b = world.bounds;
		let x0 = b.x0;
		let y0 = b.y0;
		let x1 = b.x1;
		let y1 = b.y1;
		for (const p of points) {
			x0 = Math.min(x0, p.x - radius);
			y0 = Math.min(y0, p.y - radius);
			x1 = Math.max(x1, p.x + radius);
			y1 = Math.max(y1, p.y + radius);
		}
		return `${x0 - pad} ${y0 - pad} ${x1 - x0 + pad * 2} ${y1 - y0 + pad * 2}`;
	});
</script>

<svg
	viewBox={box}
	class={`block h-auto w-full ${className}`}
	role={label ? 'img' : 'presentation'}
	aria-label={label}
	aria-hidden={label ? undefined : true}
>
	{#if graticule}
		<path
			d={world.graticule}
			fill="none"
			stroke="var(--color-rule)"
			stroke-width="0.6"
			opacity="0.6"
		/>
	{/if}
	<path d={world.land} fill="var(--map-land, var(--color-rule))" />
	{#if borders}
		<path d={world.borders} fill="none" stroke="var(--color-paper)" stroke-width="0.7" />
	{/if}
	{#key animateKey}
		<g class="dots">
			{#each points as point, i (point.key)}
				<circle
					style:--i={Math.min(i, 40)}
					cx={point.x}
					cy={point.y}
					r={radius}
					fill={strategyColor(point.color).band}
					stroke="var(--color-surface)"
					stroke-width="1"
					opacity="0.95"
				/>
			{/each}
		</g>
	{/key}
</svg>

<style>
	.dots circle {
		animation: pop 420ms ease-out backwards;
		animation-delay: calc(var(--i, 0) * 18ms);
		transform-box: fill-box;
		transform-origin: center;
	}

	@keyframes pop {
		from {
			opacity: 0;
			transform: scale(0.2);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.dots circle {
			animation: none;
		}
	}
</style>
