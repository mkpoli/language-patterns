<script lang="ts">
	import type { Stage } from '$lib/types';

	interface Props {
		stages: Stage[];
	}
	let { stages }: Props = $props();

	const size = 360;
	const center = size / 2;
	const radius = 130;

	const points = $derived.by(() =>
		stages.map((stage, i) => {
			const angle = (i / stages.length) * Math.PI * 2 - Math.PI / 2;
			return {
				stage,
				x: center + Math.cos(angle) * radius,
				y: center + Math.sin(angle) * radius
			};
		})
	);
</script>

<figure class="flex flex-col items-center gap-2">
	<svg viewBox={`0 0 ${size} ${size}`} class="h-auto w-full max-w-md">
		<defs>
			<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
				<path d="M 0 0 L 10 5 L 0 10 z" fill="oklch(50% 0.05 260)" />
			</marker>
		</defs>

		<!-- Arcs between stages -->
		{#each points as p, i (p.stage.id)}
			{@const next = points[(i + 1) % points.length]}
			{@const mx = (p.x + next.x) / 2}
			{@const my = (p.y + next.y) / 2}
			{@const dx = next.x - p.x}
			{@const dy = next.y - p.y}
			{@const len = Math.sqrt(dx * dx + dy * dy)}
			{@const nx = -dy / len}
			{@const ny = dx / len}
			{@const cx = mx + nx * 40}
			{@const cy = my + ny * 40}
			<path
				d={`M ${p.x} ${p.y} Q ${cx} ${cy} ${next.x} ${next.y}`}
				fill="none"
				stroke="oklch(75% 0.03 260)"
				stroke-width="1.5"
				marker-end="url(#arrow)"
			/>
		{/each}

		<!-- Stage nodes -->
		{#each points as p (p.stage.id)}
			<g>
				<circle cx={p.x} cy={p.y} r="34" fill="white" stroke="oklch(70% 0.05 260)" stroke-width="1.5" />
				<text x={p.x} y={p.y - 4} text-anchor="middle" class="fill-[color:var(--color-ink-soft)] text-xs font-mono">
					Stage {p.stage.number}
				</text>
				<text x={p.x} y={p.y + 12} text-anchor="middle" class="fill-[color:var(--color-ink)] text-[10px]" style="font-size: 10px;">
					{p.stage.label.split(' ').slice(0, 2).join(' ')}
				</text>
			</g>
		{/each}

		<text x={center} y={center} text-anchor="middle" class="fill-[color:var(--color-ink-soft)] font-serif italic" style="font-size: 13px;">
			the cycle
		</text>
	</svg>
	<figcaption class="text-xs text-[color:var(--color-ink-soft)]">
		The new negator from stage 4 may itself weaken — restarting at stage 1.
	</figcaption>
</figure>
