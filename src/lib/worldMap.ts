import { world } from '$lib/data/world-outline';

/**
 * Equal Earth (Šavrič, Patterson & Jenny 2018), the projection the baked
 * outline in `world-outline.ts` was drawn with. Keeping the forward formula
 * here lets language coordinates land on that outline without shipping d3-geo.
 */
const A1 = 1.340264;
const A2 = -0.081106;
const A3 = 0.000893;
const A4 = 0.003796;
const M = Math.sqrt(3) / 2;

export interface Point {
	x: number;
	y: number;
}

export function project(lng: number, lat: number): Point {
	let lambda = ((lng - world.centreLng + 540) % 360) - 180;
	lambda *= Math.PI / 180;
	const phi = (lat * Math.PI) / 180;

	const theta = Math.asin(M * Math.sin(phi));
	const t2 = theta * theta;
	const t6 = t2 * t2 * t2;

	const x = (lambda * Math.cos(theta)) / (M * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2)));
	const y = theta * (A1 + A2 * t2 + t6 * (A3 + A4 * t2));

	return {
		x: world.translate[0] + world.scale * x,
		y: world.translate[1] - world.scale * y
	};
}

export { world };
