/**
 * The social card: a 1200×630 document rendered once per page and captured as
 * a PNG. Everything is inline — fonts, geometry, the site palette — so the
 * result depends on nothing but this repository.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import type { Strategy } from '../../src/lib/types';
import { buildWorld, type World } from './geo';
import { tokenBlock } from './theme';

export const CARD_WIDTH = 1200;
export const CARD_HEIGHT = 630;

/** Where the world sits in card space, and where the paper panel gives way to it. */
const MAP_EXTENT: [[number, number], [number, number]] = [
	[350, 55],
	[1245, 595]
];
/** A card whose languages sit close together zooms in on them instead. */
const FOCUS_EXTENT: [[number, number], [number, number]] = [
	[520, -20],
	[1320, 650]
];
const FOCUS_MAX_LNG_SPAN = 150;
const FOCUS_MAX_LAT_SPAN = 85;
const FOCUS_MIN_LNG_SPAN = 55;
const FOCUS_MIN_LAT_SPAN = 30;
const PANEL_FADE_START = 430;
const PANEL_FADE_END = 660;
/** Markers survive the panel: they only dim where the title would collide. */
const DOT_FADE_START = 445;
const DOT_FADE_END = 585;

export type ColorToken = Strategy['color'];

export interface CardChip {
	label: string;
	color: ColorToken;
	/** Stage number for pathway cards. */
	badge?: string;
	mono?: boolean;
}

export interface CardDot {
	lng: number;
	lat: number;
	color: ColorToken;
	/** How many topics document this language; drives marker size. */
	weight?: number;
}

export interface CardSpec {
	kind?: string;
	category?: string;
	title: string;
	lede?: string;
	chips?: CardChip[];
	dots?: CardDot[];
	stat?: string;
	accent?: ColorToken;
}

const here = (p: string) => fileURLToPath(new URL(p, import.meta.url));

const font = (file: string) =>
	`url(data:font/woff2;base64,${readFileSync(here(`fonts/${file}`)).toString('base64')}) format('woff2')`;

const logo = `data:image/png;base64,${readFileSync(here('../../static/icon-192.png')).toString('base64')}`;

const wholeWorld: World = buildWorld({ extent: MAP_EXTENT, centerLng: 0 });

/**
 * Cards whose languages cluster in one part of the world get that part of the
 * world; everything else gets the whole of it.
 */
function frameFor(dots: CardDot[]): World {
	if (dots.length < 2) return wholeWorld;
	const lngs = dots.map((d) => d.lng);
	const lats = dots.map((d) => d.lat);
	const west = Math.min(...lngs);
	const east = Math.max(...lngs);
	const south = Math.min(...lats);
	const north = Math.max(...lats);
	if (east - west > FOCUS_MAX_LNG_SPAN || north - south > FOCUS_MAX_LAT_SPAN) return wholeWorld;

	const padX = Math.max(FOCUS_MIN_LNG_SPAN - (east - west), (east - west) * 0.45, 12) / 2;
	const padY = Math.max(FOCUS_MIN_LAT_SPAN - (north - south), (north - south) * 0.45, 8) / 2;
	return buildWorld({
		extent: FOCUS_EXTENT,
		focus: [
			[west - padX, Math.max(-56, south - padY)],
			[east + padX, Math.min(82, north + padY)]
		]
	});
}

function escapeHtml(s: string): string {
	return s.replace(
		/[&<>"']/g,
		(c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
	);
}

interface PlacedDot {
	x: number;
	y: number;
	color: ColorToken;
	weight: number;
}

function placeDots(dots: CardDot[], world: World): PlacedDot[] {
	const identical = new Set<string>();
	const occupied = new Map<string, number>();
	const out: PlacedDot[] = [];
	for (const d of dots) {
		const p = world.project(d.lng, d.lat);
		if (!p) continue;
		const key = `${Math.round(p[0])},${Math.round(p[1])}`;
		if (identical.has(`${key},${d.color}`)) continue;
		identical.add(`${key},${d.color}`);
		// Languages sharing a point spiral outwards so neither marker is buried.
		const n = occupied.get(key) ?? 0;
		occupied.set(key, n + 1);
		const offset = n === 0 ? [0, 0] : [Math.cos(n * 2.4) * 9, Math.sin(n * 2.4) * 9];
		out.push({ x: p[0] + offset[0], y: p[1] + offset[1], color: d.color, weight: d.weight ?? 1 });
	}
	return out;
}

/** One soft colour wash per group, centred on where that group actually is. */
function blooms(placed: PlacedDot[]): string {
	const groups = new Map<ColorToken, PlacedDot[]>();
	for (const d of placed) {
		const g = groups.get(d.color) ?? [];
		g.push(d);
		groups.set(d.color, g);
	}
	return [...groups.entries()]
		.sort((a, b) => b[1].length - a[1].length)
		.slice(0, 4)
		.map(([color, ds]) => {
			const cx = ds.reduce((s, d) => s + d.x, 0) / ds.length;
			const cy = ds.reduce((s, d) => s + d.y, 0) / ds.length;
			const r = 120 + Math.min(140, ds.length * 9);
			return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(0)}" fill="var(--color-${color}-band)" />`;
		})
		.join('');
}

/** An arc per group, spanning the longitudes it covers. */
function arcs(placed: PlacedDot[]): string {
	const groups = new Map<ColorToken, PlacedDot[]>();
	for (const d of placed) {
		const g = groups.get(d.color) ?? [];
		g.push(d);
		groups.set(d.color, g);
	}
	// On a densely plotted card the arcs read as stray lines, so they are kept
	// for the sparse cards where they show a strategy reaching across the world.
	if (placed.length > 60) return '';
	return [...groups.entries()]
		.filter(([, ds]) => ds.length > 1)
		.sort((a, b) => b[1].length - a[1].length)
		.slice(0, 3)
		.map(([color, ds]) => {
			const sorted = [...ds].sort((a, b) => a.x - b.x);
			const a = sorted[0];
			const b = sorted[sorted.length - 1];
			const span = b.x - a.x;
			if (span < 120) return '';
			const lift = Math.min(150, 60 + span * 0.18);
			const cx = (a.x + b.x) / 2;
			const cy = (a.y + b.y) / 2 - lift;
			return `<path d="M${a.x.toFixed(1)},${a.y.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${b.x.toFixed(1)},${b.y.toFixed(1)}" fill="none" stroke="var(--color-${color}-border)" stroke-width="1.6" stroke-linecap="round" opacity="0.4" />`;
		})
		.join('');
}

function dotMarks(placed: PlacedDot[]): string {
	const scale =
		placed.length > 250
			? 0.62
			: placed.length > 160
				? 0.72
				: placed.length > 60
					? 0.86
					: placed.length > 12
						? 1
						: 1.2;
	return placed
		.map((d) => {
			const r = 7.5 * scale * (0.78 + 0.22 * Math.min(d.weight, 4));
			return (
				`<g transform="translate(${d.x.toFixed(1)} ${d.y.toFixed(1)})">` +
				`<circle r="${(r * 2.1).toFixed(1)}" fill="var(--color-${d.color}-band)" opacity="0.22" />` +
				`<circle r="${r.toFixed(1)}" fill="var(--color-${d.color}-border)" stroke="var(--color-paper)" stroke-width="${(1.8 * scale).toFixed(1)}" />` +
				`</g>`
			);
		})
		.join('');
}

function art(spec: CardSpec): string {
	const world = frameFor(spec.dots ?? []);
	const placed = placeDots(spec.dots ?? [], world);
	return `
<svg class="art" viewBox="0 0 ${CARD_WIDTH} ${CARD_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<filter id="wash" x="-40%" y="-40%" width="180%" height="180%">
			<feGaussianBlur stdDeviation="70" />
		</filter>
		<filter id="feather" x="-20%" y="-20%" width="140%" height="140%">
			<feGaussianBlur stdDeviation="16" />
		</filter>
		<linearGradient id="panelEdge" x1="0" y1="0" x2="${CARD_WIDTH}" y2="0" gradientUnits="userSpaceOnUse">
			<stop offset="${(PANEL_FADE_START / CARD_WIDTH).toFixed(3)}" stop-color="#fff" stop-opacity="1" />
			<stop offset="${(PANEL_FADE_END / CARD_WIDTH).toFixed(3)}" stop-color="#fff" stop-opacity="0" />
		</linearGradient>
		<mask id="panelMask">
			<rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#panelEdge)" />
		</mask>
		<linearGradient id="markerEdge" x1="0" y1="0" x2="${CARD_WIDTH}" y2="0" gradientUnits="userSpaceOnUse">
			<stop offset="${(DOT_FADE_START / CARD_WIDTH).toFixed(3)}" stop-color="#fff" stop-opacity="0" />
			<stop offset="${(DOT_FADE_END / CARD_WIDTH).toFixed(3)}" stop-color="#fff" stop-opacity="1" />
		</linearGradient>
		<mask id="markerMask">
			<rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#markerEdge)" />
		</mask>
		<linearGradient id="ocean" x1="0" y1="0" x2="0.6" y2="1">
			<stop offset="0" stop-color="oklch(98% 0.009 230)" />
			<stop offset="1" stop-color="oklch(99% 0.006 95)" />
		</linearGradient>
		<linearGradient id="horizonEdge" x1="0" y1="0" x2="0" y2="${CARD_HEIGHT}" gradientUnits="userSpaceOnUse">
			<stop offset="0.03" stop-color="#fff" stop-opacity="0" />
			<stop offset="0.26" stop-color="#fff" stop-opacity="1" />
			<stop offset="0.74" stop-color="#fff" stop-opacity="1" />
			<stop offset="0.98" stop-color="#fff" stop-opacity="0" />
		</linearGradient>
		<mask id="horizonMask">
			<rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#horizonEdge)" />
		</mask>
	</defs>

	<g class="washes" filter="url(#wash)">${blooms(placed)}</g>

	<g class="map" mask="url(#horizonMask)">
		${
			world.focused
				? `<rect class="ocean" x="0" y="0" width="${CARD_WIDTH}" height="${CARD_HEIGHT}" />`
				: `<path class="ocean" d="${world.outline}" />`
		}
		<path class="graticule" d="${world.graticule}" />
		<path class="land" d="${world.land}" />
		<path class="borders" d="${world.borders}" />
		${world.focused ? '' : `<path class="outline" d="${world.outline}" />`}
	</g>

	<g class="panel" mask="url(#panelMask)">
		<path filter="url(#feather)" d="M-60,-60 L470,-60 C548,150 428,430 556,690 L-60,690 Z" />
	</g>

	<g mask="url(#markerMask)">
		<g class="arcs">${arcs(placed)}</g>
		<g class="dots">${dotMarks(placed)}</g>
	</g>

	<path class="sweep" d="M472,-40 C556,170 424,440 552,672" />
	<path class="sweep sweep-echo" d="M428,-40 C512,170 380,440 508,672" />
</svg>`;
}

function chipList(chips: CardChip[], dots: CardDot[]): string {
	if (!chips.length) return '';

	// The legend leads with the colours that cover the most of the map, unless
	// the chips are a numbered sequence, where the order is the point.
	const numbered = chips.some((c) => c.badge);
	const weight = new Map<ColorToken, number>();
	for (const d of dots) weight.set(d.color, (weight.get(d.color) ?? 0) + 1);
	const ordered = numbered
		? chips
		: [...chips].sort((a, b) => (weight.get(b.color) ?? 0) - (weight.get(a.color) ?? 0));

	// Four chips fit one line each at most; long labels earn fewer of them.
	const shown: CardChip[] = [];
	let budget = 108;
	for (const chip of ordered) {
		if (shown.length >= 4) break;
		if (shown.length >= 2 && chip.label.length > budget) break;
		budget -= chip.label.length;
		shown.push(chip);
	}
	const rest = chips.length - shown.length;
	const items = shown
		.map(
			(c) =>
				`<li class="chip chip-${c.color}${c.mono ? ' chip-mono' : ''}">` +
				(c.badge
					? `<span class="badge">${escapeHtml(c.badge)}</span>`
					: `<span class="pip"></span>`) +
				`${escapeHtml(c.label)}</li>`
		)
		.join('');
	const more = rest > 0 ? `<li class="chip chip-more">+${rest}</li>` : '';
	return `<ul class="chips">${items}${more}</ul>`;
}

export function cardHtml(spec: CardSpec): string {
	const accent = spec.accent ?? 'sky';
	return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
	@font-face { font-family: 'Inter'; src: ${font('inter-latin.woff2')}; font-weight: 100 900; font-display: block; }
	@font-face { font-family: 'Source Serif 4'; src: ${font('source-serif-latin.woff2')}; font-weight: 100 900; font-display: block; }
	@font-face { font-family: 'JetBrains Mono'; src: ${font('jetbrains-mono-latin.woff2')}; font-weight: 100 800; font-display: block; }

	:root {
${tokenBlock()}
		--accent-band: var(--color-${accent}-band);
		--accent-border: var(--color-${accent}-border);
		--accent-soft: var(--color-${accent}-soft);
		--accent-text: var(--color-${accent}-text);
	}

	* { margin: 0; padding: 0; box-sizing: border-box; }

	body {
		width: ${CARD_WIDTH}px;
		height: ${CARD_HEIGHT}px;
		overflow: hidden;
		font-family: 'Inter', sans-serif;
		font-feature-settings: 'ss01', 'cv11';
		color: var(--color-ink);
		background: var(--color-paper);
	}

	.card {
		position: relative;
		width: ${CARD_WIDTH}px;
		height: ${CARD_HEIGHT}px;
		background:
			radial-gradient(120% 90% at 88% 8%, oklch(100% 0 0 / 0.75), transparent 60%),
			linear-gradient(155deg, oklch(99.2% 0.006 95), var(--color-paper) 55%, oklch(97% 0.008 250));
	}

	.art { position: absolute; inset: 0; width: 100%; height: 100%; }
	.washes { opacity: 0.6; mix-blend-mode: multiply; }
	.ocean { fill: url(#ocean); }
	.graticule { fill: none; stroke: var(--color-ink); stroke-opacity: 0.08; stroke-width: 0.7; }
	.land { fill: oklch(91.5% 0.011 250); stroke: oklch(77% 0.022 250); stroke-width: 0.9; stroke-linejoin: round; }
	.borders { fill: none; stroke: oklch(83% 0.015 250); stroke-width: 0.6; }
	.outline { fill: none; stroke: var(--color-ink); stroke-opacity: 0.14; stroke-width: 1; }
	.panel path { fill: var(--color-paper); }
	.sweep { fill: none; stroke: var(--accent-border); stroke-opacity: 0.35; stroke-width: 1.6; }
	.sweep-echo { stroke-opacity: 0.16; stroke-width: 1; }

	.content {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 54px 60px 50px;
		width: 640px;
	}

	.brand { display: flex; align-items: center; gap: 12px; }
	.brand img { width: 38px; height: 38px; }
	.brand span {
		font-family: 'Source Serif 4', serif;
		font-size: 25px;
		font-weight: 600;
		letter-spacing: -0.01em;
	}

	.eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
	.kind {
		display: inline-flex;
		align-items: center;
		height: 27px;
		padding: 0 12px;
		border-radius: 999px;
		background: var(--accent-soft);
		color: var(--accent-text);
		font-size: 14px;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}
	.category {
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-ink-faint);
	}

	.title {
		font-family: 'Source Serif 4', serif;
		font-size: 58px;
		font-weight: 600;
		line-height: 1.08;
		letter-spacing: -0.018em;
		text-wrap: balance;
	}

	.lede {
		margin-top: 18px;
		font-size: 20px;
		line-height: 1.45;
		color: var(--color-ink-soft);
		max-width: 490px;
	}

	.chips { list-style: none; display: flex; flex-wrap: wrap; gap: 9px; margin-top: 26px; }
	.chip {
		display: flex;
		align-items: center;
		gap: 8px;
		height: 34px;
		padding: 0 13px;
		border-radius: 999px;
		border: 1px solid;
		background: var(--color-surface);
		font-size: 17px;
		font-weight: 500;
		color: var(--color-ink-soft);
	}
	.chip-mono { font-family: 'JetBrains Mono', monospace; font-size: 15px; }
	.pip { width: 10px; height: 10px; border-radius: 999px; }
	.badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		border-radius: 999px;
		font-size: 13px;
		font-weight: 600;
		color: var(--color-on-band);
	}
	.chip-more { border-color: var(--color-rule); color: var(--color-ink-faint); }
	${(['sky', 'amber', 'emerald', 'violet', 'rose', 'slate'] as ColorToken[])
		.map(
			(c) =>
				`.chip-${c} { border-color: var(--color-${c}-border); }\n\t.chip-${c} .pip { background: var(--color-${c}-border); }\n\t.chip-${c} .badge { background: var(--color-${c}-border); }`
		)
		.join('\n\t')}

	.foot {
		display: flex;
		align-items: baseline;
		gap: 14px;
		font-size: 17px;
		color: var(--color-ink-faint);
	}
	.foot .url { font-weight: 500; color: var(--color-ink-soft); }
	.foot .sep { color: var(--color-rule); }
</style>
</head>
<body>
	<div class="card">
		${art(spec)}
		<div class="content">
			<div class="brand">
				<img src="${logo}" alt="" />
				<span>Language Patterns</span>
			</div>

			<div class="block">
				<div class="eyebrow">
					${spec.kind ? `<span class="kind">${escapeHtml(spec.kind)}</span>` : ''}
					${spec.category ? `<span class="category">${escapeHtml(spec.category)}</span>` : ''}
				</div>
				<h1 class="title">${escapeHtml(spec.title)}</h1>
				${spec.lede ? `<p class="lede">${escapeHtml(spec.lede)}</p>` : ''}
				${chipList(spec.chips ?? [], spec.dots ?? [])}
			</div>

			<div class="foot">
				<span class="url">languagepatterns.org</span>
				${spec.stat ? `<span class="sep">/</span><span>${escapeHtml(spec.stat)}</span>` : ''}
			</div>
		</div>
	</div>
</body>
</html>`;
}
