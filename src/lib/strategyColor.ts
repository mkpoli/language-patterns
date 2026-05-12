import type { Strategy } from './types';

export interface StrategyColorTokens {
	band: string;
	soft: string;
	border: string;
	textOn: string;
}

const tokens: Record<Strategy['color'], StrategyColorTokens> = {
	sky:     { band: 'var(--color-sky-band)',     soft: 'var(--color-sky-soft)',     border: 'oklch(70% 0.1 230)',  textOn: 'oklch(25% 0.05 230)' },
	amber:   { band: 'var(--color-amber-band)',   soft: 'var(--color-amber-soft)',   border: 'oklch(75% 0.13 75)',  textOn: 'oklch(30% 0.08 75)' },
	emerald: { band: 'var(--color-emerald-band)', soft: 'var(--color-emerald-soft)', border: 'oklch(70% 0.11 155)', textOn: 'oklch(25% 0.06 155)' },
	violet:  { band: 'var(--color-violet-band)',  soft: 'var(--color-violet-soft)',  border: 'oklch(68% 0.1 295)',  textOn: 'oklch(28% 0.06 295)' },
	rose:    { band: 'var(--color-rose-band)',    soft: 'var(--color-rose-soft)',    border: 'oklch(73% 0.1 15)',   textOn: 'oklch(28% 0.06 15)' },
	slate:   { band: 'var(--color-slate-band)',   soft: 'var(--color-slate-soft)',   border: 'oklch(60% 0.03 260)', textOn: 'oklch(25% 0.02 260)' }
};

export function strategyColor(color: Strategy['color']): StrategyColorTokens {
	return tokens[color];
}

const cyclicPalette: Strategy['color'][] = ['sky', 'amber', 'emerald', 'violet', 'rose', 'slate'];

export function colorForIndex(i: number): Strategy['color'] {
	return cyclicPalette[i % cyclicPalette.length];
}
