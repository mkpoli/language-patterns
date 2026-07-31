import type { LanguageCode } from '$lib/types';
import type { ParadigmSection } from './types';

/**
 * Two columns of a paradigm are close when the same languages use the same verb
 * for both. Japanese かける covers music, the vacuum cleaner and the alarm; Korean
 * 틀다 covers the air conditioner, music and the tap. Counting those shared
 * lemmas gives a distance between columns, and clustering on it puts the columns
 * in an order where neighbours behave alike.
 */

export interface ColexPair {
	a: string;
	b: string;
	/** Languages holding a cell in both columns. */
	support: number;
	/** Of those, the ones using one verb for both. */
	shared: number;
	rate: number;
	/** Language codes that colexify the pair, for showing the evidence. */
	languages: LanguageCode[];
}

export interface ClusterNode {
	/** Leaf nodes carry an axis id; internal nodes carry children. */
	id?: string;
	children?: [ClusterNode, ClusterNode];
	/** Colexification rate at which the two children joined. */
	height: number;
	leaves: string[];
}

export interface ColexAnalysis {
	axes: string[];
	/** Clustered order — neighbours are the columns that behave most alike. */
	order: string[];
	pairs: ColexPair[];
	rate: (a: string, b: string) => number;
	tree: ClusterNode | null;
}

function key(a: string, b: string): string {
	return a < b ? `${a} ${b}` : `${b} ${a}`;
}

/** The paradigm's axes in clustered order, for the grid and the map to share. */
export function orderedAxes(paradigm: ParadigmSection): ParadigmSection['axes'] {
	const { order } = analyseColexification(paradigm);
	const rank = new Map(order.map((id, i) => [id, i]));
	return [...paradigm.axes].sort(
		(a, b) => (rank.get(a.id) ?? Infinity) - (rank.get(b.id) ?? Infinity)
	);
}

export function analyseColexification(paradigm: ParadigmSection): ColexAnalysis {
	const axes = paradigm.axes.map((a) => a.id).filter((id) => paradigm.cells.some((c) => c.axis === id));

	// language -> axis -> lemma
	const byLanguage = new Map<LanguageCode, Map<string, string>>();
	for (const cell of paradigm.cells) {
		if (!cell.lemma) continue;
		let row = byLanguage.get(cell.language);
		if (!row) {
			row = new Map();
			byLanguage.set(cell.language, row);
		}
		row.set(cell.axis, cell.lemma);
	}

	const pairs: ColexPair[] = [];
	const rateByKey = new Map<string, number>();
	for (let i = 0; i < axes.length; i++) {
		for (let j = i + 1; j < axes.length; j++) {
			const a = axes[i];
			const b = axes[j];
			let support = 0;
			const languages: LanguageCode[] = [];
			for (const [code, row] of byLanguage) {
				const la = row.get(a);
				const lb = row.get(b);
				if (la == null || lb == null) continue;
				support++;
				if (la === lb) languages.push(code);
			}
			const shared = languages.length;
			const rate = support ? shared / support : 0;
			pairs.push({ a, b, support, shared, rate, languages });
			rateByKey.set(key(a, b), rate);
		}
	}

	const rate = (a: string, b: string) => (a === b ? 1 : (rateByKey.get(key(a, b)) ?? 0));

	return { axes, order: orderAxes(axes, rate), pairs, rate, tree: buildTree(axes, rate) };
}

/**
 * Average-linkage agglomerative clustering on 1 − colexification rate.
 */
function buildTree(axes: string[], rate: (a: string, b: string) => number): ClusterNode | null {
	if (!axes.length) return null;
	let nodes: ClusterNode[] = axes.map((id) => ({ id, height: 1, leaves: [id] }));

	while (nodes.length > 1) {
		let best = -1;
		let bi = 0;
		let bj = 1;
		for (let i = 0; i < nodes.length; i++) {
			for (let j = i + 1; j < nodes.length; j++) {
				let sum = 0;
				for (const x of nodes[i].leaves) for (const y of nodes[j].leaves) sum += rate(x, y);
				const avg = sum / (nodes[i].leaves.length * nodes[j].leaves.length);
				if (avg > best) {
					best = avg;
					bi = i;
					bj = j;
				}
			}
		}
		const merged: ClusterNode = {
			children: [nodes[bi], nodes[bj]],
			height: best,
			leaves: [...nodes[bi].leaves, ...nodes[bj].leaves]
		};
		nodes = nodes.filter((_, k) => k !== bi && k !== bj);
		nodes.push(merged);
	}
	return nodes[0];
}

/**
 * Orders the leaves so that adjacent columns are as alike as possible. With
 * seven columns the arrangements are few enough to score every one of them, so
 * this is the true optimum rather than a greedy walk: it maximises the total
 * colexification rate across neighbouring pairs, and each subtree may still flip
 * without changing the clustering itself.
 */
function orderAxes(axes: string[], rate: (a: string, b: string) => number): string[] {
	if (axes.length < 3) return [...axes];

	const score = (order: string[]) => {
		let total = 0;
		for (let i = 0; i + 1 < order.length; i++) total += rate(order[i], order[i + 1]);
		return total;
	};

	// Exhaustive for small paradigms; greedy nearest-neighbour beyond that.
	if (axes.length <= 8) {
		let best: string[] = [...axes];
		let bestScore = -1;
		const permute = (rest: string[], acc: string[]) => {
			if (!rest.length) {
				const s = score(acc);
				if (s > bestScore) {
					bestScore = s;
					best = [...acc];
				}
				return;
			}
			for (let i = 0; i < rest.length; i++) {
				permute([...rest.slice(0, i), ...rest.slice(i + 1)], [...acc, rest[i]]);
			}
		};
		permute(axes, []);
		return best;
	}

	const remaining = new Set(axes.slice(1));
	const out = [axes[0]];
	while (remaining.size) {
		const last = out[out.length - 1];
		let pick = '';
		let bestRate = -1;
		for (const cand of remaining) {
			const r = rate(last, cand);
			if (r > bestRate) {
				bestRate = r;
				pick = cand;
			}
		}
		out.push(pick);
		remaining.delete(pick);
	}
	return out;
}
