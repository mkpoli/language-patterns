/**
 * World geometry for the social cards.
 *
 * Boundaries: Natural Earth 1:110m (public domain), packaged as TopoJSON in
 * the `world-atlas` npm module (Mike Bostock, https://github.com/topojson/world-atlas).
 * Projection: Equal Earth (Šavrič, Patterson & Jenny 2018) via d3-geo.
 */
import { geoEqualEarth, geoPath, geoGraticule } from 'd3-geo';
import { feature, mesh } from 'topojson-client';
import type { GeometryCollection, Topology } from 'topojson-specification';
import landTopo from 'world-atlas/land-110m.json' with { type: 'json' };
import countriesTopo from 'world-atlas/countries-110m.json' with { type: 'json' };

const land = landTopo as unknown as Topology<{ land: GeometryCollection }>;
const countries = countriesTopo as unknown as Topology<{ countries: GeometryCollection }>;

export interface WorldOptions {
	/** Card-space rectangle the geometry is fitted into. */
	extent: [[number, number], [number, number]];
	/** Central meridian, degrees east. */
	centerLng?: number;
	/** Region to fill the card with, `[[west, south], [east, north]]`. */
	focus?: [[number, number], [number, number]];
}

export interface World {
	land: string;
	borders: string;
	graticule: string;
	outline: string;
	focused: boolean;
	/** Longitude/latitude to card coordinates. */
	project(lng: number, lat: number): [number, number] | null;
}

export function buildWorld({ extent, centerLng = 10, focus }: WorldOptions): World {
	const band = inhabitedBand();
	const center = focus ? (focus[0][0] + focus[1][0]) / 2 : centerLng;
	const projection = geoEqualEarth()
		.rotate([-center, 0])
		.fitExtent(extent, focus ? boxPolygon(focus) : band);
	const path = geoPath(projection);

	const landFeature = withoutAntarctica(feature(land, land.objects.land));
	const borderMesh = mesh(countries, countries.objects.countries, (a, b) => a !== b);

	return {
		land: path(landFeature) ?? '',
		borders: path(borderMesh) ?? '',
		graticule:
			path(
				geoGraticule()
					.extent([
						[-180, SOUTH_EDGE],
						[180, NORTH_EDGE]
					])
					.step(focus ? [10, 10] : [20, 20])()
			) ?? '',
		outline: path(band) ?? '',
		focused: Boolean(focus),
		project(lng, lat) {
			const p = projection([lng, lat]);
			return p ? [p[0], p[1]] : null;
		}
	};
}

/** Equal Earth stretches Antarctica into a heavy band across the foot of the card. */
function withoutAntarctica(collection: GeoJSON.FeatureCollection): GeoJSON.FeatureCollection {
	return {
		type: 'FeatureCollection',
		features: collection.features.map((f) =>
			f.geometry.type === 'MultiPolygon'
				? {
						...f,
						geometry: {
							...f.geometry,
							coordinates: f.geometry.coordinates.filter((polygon) =>
								polygon.some((ring) => ring.some(([, lat]) => lat > SOUTH_EDGE))
							)
						}
					}
				: f
		)
	};
}

/** The card shows the inhabited band, not the poles. */
const SOUTH_EDGE = -58;
const NORTH_EDGE = 84;

function boxPolygon([[west, south], [east, north]]: [
	[number, number],
	[number, number]
]): GeoJSON.Polygon {
	const ring: [number, number][] = [];
	const step = Math.max(1, (east - west) / 60);
	for (let lng = west; lng <= east; lng += step) ring.push([lng, north]);
	for (let lng = east; lng >= west; lng -= step) ring.push([lng, south]);
	ring.push([west, north]);
	return { type: 'Polygon', coordinates: [ring] };
}

function inhabitedBand(): GeoJSON.Polygon {
	const ring: [number, number][] = [];
	for (let lng = -180; lng <= 180; lng += 2) ring.push([lng, NORTH_EDGE]);
	for (let lng = 180; lng >= -180; lng -= 2) ring.push([lng, SOUTH_EDGE]);
	ring.push([-180, NORTH_EDGE]);
	return { type: 'Polygon', coordinates: [ring] };
}
