<script lang="ts">
	import type { Pathway, TimelineBand } from '$lib/types';
	import { getLanguage } from '$lib/data/languages';
	import { strategyColor, colorForIndex } from '$lib/strategyColor';

	interface Props {
		pathway: Pathway;
		startYear?: number;
		endYear?: number;
	}
	let { pathway, startYear = 1000, endYear = 2000 }: Props = $props();

	// Color map: assign one strategy-palette color to each stage.
	const stageColor = $derived.by(() => {
		const map = new Map<string, ReturnType<typeof strategyColor>>();
		pathway.stages.forEach((s, i) => map.set(s.id, strategyColor(colorForIndex(i))));
		return map;
	});

	// Group bands by language, assigning tracks so overlapping bands stack.
	interface LangRow {
		code: string;
		name: string;
		family: string;
		tracks: TimelineBand[][];
		overlapZones: { start: number; end: number }[];
	}

	const rows = $derived.by<LangRow[]>(() => {
		const byLang = new Map<string, TimelineBand[]>();
		for (const b of pathway.bands) {
			if (!byLang.has(b.language)) byLang.set(b.language, []);
			byLang.get(b.language)!.push(b);
		}

		const out: LangRow[] = [];
		for (const [code, bands] of byLang) {
			const lang = getLanguage(code);
			const sorted = [...bands].sort((a, b) => a.start - b.start);
			const tracks: TimelineBand[][] = [];
			for (const band of sorted) {
				let placed = false;
				for (const track of tracks) {
					const last = track[track.length - 1];
					if (last.end <= band.start) {
						track.push(band);
						placed = true;
						break;
					}
				}
				if (!placed) tracks.push([band]);
			}

			// Overlap zones: sweep events to find where >=2 bands coexist.
			const events: { t: number; delta: number }[] = [];
			for (const b of sorted) {
				events.push({ t: b.start, delta: 1 });
				events.push({ t: b.end, delta: -1 });
			}
			events.sort((a, b) => a.t - b.t || b.delta - a.delta);
			const overlapZones: { start: number; end: number }[] = [];
			let depth = 0;
			let zoneStart: number | null = null;
			for (const ev of events) {
				const next = depth + ev.delta;
				if (depth < 2 && next >= 2) zoneStart = ev.t;
				if (depth >= 2 && next < 2 && zoneStart !== null) {
					if (ev.t > zoneStart) overlapZones.push({ start: zoneStart, end: ev.t });
					zoneStart = null;
				}
				depth = next;
			}

			out.push({
				code,
				name: lang.name,
				family: lang.family,
				tracks,
				overlapZones
			});
		}
		return out;
	});

	// Layout constants
	const labelWidth = 200;
	const trackHeight = 38;
	const trackGap = 6;
	const rowPad = 16;
	const headerHeight = 56;
	const footerHeight = 80;
	const plotWidth = 920;

	const totalPlot = $derived(plotWidth);
	const rowOffsets = $derived.by(() => {
		const offsets: number[] = [];
		let y = headerHeight;
		for (const r of rows) {
			offsets.push(y);
			y += r.tracks.length * (trackHeight + trackGap) - trackGap + rowPad * 2;
		}
		return offsets;
	});
	const totalHeight = $derived.by(() => {
		const last = rowOffsets.at(-1) ?? headerHeight;
		const lastRow = rows.at(-1);
		const lastH = lastRow ? lastRow.tracks.length * (trackHeight + trackGap) - trackGap + rowPad * 2 : 0;
		return last + lastH + footerHeight;
	});

	const totalWidth = labelWidth + plotWidth + 24;
	const yearSpan = $derived(endYear - startYear);

	function x(year: number): number {
		return labelWidth + ((year - startYear) / yearSpan) * plotWidth;
	}

	const ticks = $derived.by(() => {
		const arr: number[] = [];
		const step = 200;
		for (let y = startYear; y <= endYear; y += step) arr.push(y);
		return arr;
	});

	let hovered: TimelineBand | null = $state(null);

	const statusLegend = [
		{ id: 'dominant',    label: 'Dominant use',    swatch: 'solid' },
		{ id: 'emerging',    label: 'Emerging use',    swatch: 'light' },
		{ id: 'declining',   label: 'Declining use',   swatch: 'striped' },
		{ id: 'approximate', label: 'Approximate range', swatch: 'dashed' }
	] as const;
</script>

<figure class="flex flex-col gap-3">
	<div class="overflow-x-auto rounded-2xl border border-[color:var(--color-rule)] bg-white p-4">
		<svg
			viewBox={`0 0 ${totalWidth} ${totalHeight}`}
			class="block h-auto w-full"
			role="img"
			aria-label="Comparative historical timeline"
		>
			<!-- Year axis -->
			<g>
				{#each ticks as t (t)}
					<line
						x1={x(t)}
						x2={x(t)}
						y1={headerHeight - 12}
						y2={totalHeight - footerHeight + 8}
						stroke="oklch(94% 0.005 260)"
						stroke-width="1"
					/>
					<text
						x={x(t)}
						y={headerHeight - 20}
						text-anchor="middle"
						fill="oklch(45% 0.02 260)"
						style="font-size: 11px; font-family: var(--font-mono);"
					>
						{t}
					</text>
				{/each}
			</g>

			<!-- Rows -->
			{#each rows as row, ri (row.code)}
				{@const yTop = rowOffsets[ri]}
				{@const rowH = row.tracks.length * (trackHeight + trackGap) - trackGap + rowPad * 2}

				<!-- Row separator -->
				{#if ri > 0}
					<line
						x1={0}
						x2={totalWidth}
						y1={yTop}
						y2={yTop}
						stroke="oklch(95% 0.005 260)"
						stroke-width="1"
					/>
				{/if}

				<!-- Language label -->
				<g>
					<text
						x={16}
						y={yTop + rowH / 2 - 2}
						fill="var(--color-ink)"
						style="font-size: 13px; font-weight: 600;"
					>
						{row.name}
					</text>
					<text
						x={16}
						y={yTop + rowH / 2 + 14}
						fill="oklch(55% 0.02 260)"
						style="font-size: 10px;"
					>
						{row.family}
					</text>
				</g>

				<!-- Overlap zones (background) -->
				{#each row.overlapZones as zone, zi (zi)}
					<rect
						x={x(zone.start)}
						y={yTop + 4}
						width={x(zone.end) - x(zone.start)}
						height={rowH - 8}
						fill="oklch(88% 0.02 260)"
						opacity="0.35"
						rx="4"
					/>
				{/each}

				<!-- Bands -->
				{#each row.tracks as track, ti (ti)}
					{#each track as band (band.form + band.start)}
						{@const tokens = stageColor.get(band.stageId)}
						{@const bandX = x(band.start)}
						{@const bandW = Math.max(8, x(band.end) - x(band.start))}
						{@const bandY = yTop + rowPad + ti * (trackHeight + trackGap)}

						<!-- Uncertainty pre-extension (left) -->
						{#if band.uncertaintyStart != null && band.uncertaintyStart < band.start}
							<rect
								x={x(band.uncertaintyStart)}
								y={bandY + 6}
								width={bandX - x(band.uncertaintyStart)}
								height={trackHeight - 12}
								fill={tokens?.band ?? '#ccc'}
								opacity="0.2"
								rx="3"
							/>
						{/if}
						<!-- Uncertainty post-extension (right) -->
						{#if band.uncertaintyEnd != null && band.uncertaintyEnd > band.end}
							<rect
								x={bandX + bandW}
								y={bandY + 6}
								width={x(band.uncertaintyEnd) - (bandX + bandW)}
								height={trackHeight - 12}
								fill={tokens?.band ?? '#ccc'}
								opacity="0.2"
								rx="3"
							/>
						{/if}

						<!-- Main band -->
						<g
							role="button"
							tabindex="0"
							onmouseenter={() => (hovered = band)}
							onmouseleave={() => (hovered = null)}
							onfocus={() => (hovered = band)}
							onblur={() => (hovered = null)}
							style="cursor: pointer;"
						>
							<rect
								x={bandX}
								y={bandY}
								width={bandW}
								height={trackHeight}
								rx="8"
								fill={band.status === 'declining' ? 'white' : tokens?.band}
								stroke={tokens?.border ?? '#888'}
								stroke-width={band.status === 'approximate' ? 1.5 : 1}
								stroke-dasharray={band.status === 'approximate' ? '4 3' : 'none'}
								opacity={band.status === 'emerging' ? 0.55 : 1}
							/>
							{#if band.status === 'declining'}
								<rect
									x={bandX}
									y={bandY}
									width={bandW}
									height={trackHeight}
									rx="8"
									fill={`url(#stripes-${band.stageId})`}
									opacity="0.55"
								/>
							{/if}
							<text
								x={bandX + 10}
								y={bandY + trackHeight / 2 + 4}
								fill={tokens?.textOn ?? 'var(--color-ink)'}
								style="font-size: 12px; font-weight: 500;"
								clip-path={`inset(0 0 0 0)`}
							>
								<tspan>{band.form}</tspan>
							</text>
							<title>
								{band.form} ({band.start}–{band.end})
								Stage: {pathway.stages.find((s) => s.id === band.stageId)?.label}
								{band.note ? `\n${band.note}` : ''}
							</title>
						</g>
					{/each}
				{/each}
			{/each}

			<!-- Striped pattern definitions -->
			<defs>
				{#each pathway.stages as stage, i (stage.id)}
					{@const tokens = strategyColor(colorForIndex(i))}
					<pattern
						id={`stripes-${stage.id}`}
						patternUnits="userSpaceOnUse"
						width="8"
						height="8"
						patternTransform="rotate(45)"
					>
						<rect width="8" height="8" fill="white" />
						<rect width="3" height="8" fill={tokens.band} />
					</pattern>
				{/each}
			</defs>
		</svg>
	</div>

	<!-- Hover detail -->
	{#if hovered}
		{@const h = hovered}
		{@const stage = pathway.stages.find((s) => s.id === h.stageId)}
		<div class="rounded-xl border border-[color:var(--color-rule)] bg-white p-3 text-sm">
			<div class="font-medium">{getLanguage(h.language).name} · <span class="font-mono">{h.form}</span></div>
			<div class="text-[color:var(--color-ink-soft)]">
				Stage {stage?.number} — {stage?.label} ·
				<span class="font-mono">{h.start}–{h.end}</span> ·
				<span class="capitalize">{h.status}</span>
			</div>
			{#if h.note}<div class="mt-1">{h.note}</div>{/if}
		</div>
	{/if}

	<!-- Legends -->
	<figcaption class="mt-2 grid gap-4 rounded-2xl border border-[color:var(--color-rule)] bg-white p-4 text-xs sm:grid-cols-2">
		<div>
			<div class="mb-2 font-medium uppercase tracking-wide text-[color:var(--color-ink-soft)]">
				How to read this timeline
			</div>
			<ul class="grid grid-cols-2 gap-2">
				{#each statusLegend as item (item.id)}
					<li class="flex items-center gap-2">
						<span class="inline-block h-3 w-6 rounded-sm" style:background={
							item.swatch === 'solid'   ? 'oklch(78% 0.08 230)' :
							item.swatch === 'light'   ? 'oklch(94% 0.04 230)' :
							item.swatch === 'striped' ? 'repeating-linear-gradient(135deg, oklch(78% 0.08 230) 0 3px, white 3px 6px)' :
							'transparent'
						} style:border={item.swatch === 'dashed' ? '1.5px dashed oklch(70% 0.1 230)' : 'none'}></span>
						<span>{item.label}</span>
					</li>
				{/each}
				<li class="flex items-center gap-2">
					<span class="inline-block h-3 w-6 rounded-sm" style:background="oklch(88% 0.02 260)" style:opacity="0.45"></span>
					<span>Overlap period (two forms coexist)</span>
				</li>
			</ul>
		</div>
		<div>
			<div class="mb-2 font-medium uppercase tracking-wide text-[color:var(--color-ink-soft)]">
				Stages
			</div>
			<ul class="grid grid-cols-1 gap-1.5">
				{#each pathway.stages as stage, i (stage.id)}
					{@const tokens = strategyColor(colorForIndex(i))}
					<li class="flex items-center gap-2">
						<span class="inline-block h-3 w-3 rounded-sm" style:background={tokens.band}></span>
						<span class="font-mono">{stage.number}</span>
						<span>{stage.label}</span>
					</li>
				{/each}
			</ul>
		</div>
	</figcaption>
</figure>
