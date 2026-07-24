import type { Strategy } from './types';

export interface StrategyColorTokens {
	band: string;
	soft: string;
	border: string;
	textOn: string;
}

const tokens: Record<Strategy['color'], StrategyColorTokens> = {
	sky:     { band: 'var(--color-sky-band)',     soft: 'var(--color-sky-soft)',     border: 'var(--color-sky-border)',     textOn: 'var(--color-sky-text)' },
	amber:   { band: 'var(--color-amber-band)',   soft: 'var(--color-amber-soft)',   border: 'var(--color-amber-border)',   textOn: 'var(--color-amber-text)' },
	emerald: { band: 'var(--color-emerald-band)', soft: 'var(--color-emerald-soft)', border: 'var(--color-emerald-border)', textOn: 'var(--color-emerald-text)' },
	violet:  { band: 'var(--color-violet-band)',  soft: 'var(--color-violet-soft)',  border: 'var(--color-violet-border)',  textOn: 'var(--color-violet-text)' },
	rose:    { band: 'var(--color-rose-band)',    soft: 'var(--color-rose-soft)',    border: 'var(--color-rose-border)',    textOn: 'var(--color-rose-text)' },
	slate:   { band: 'var(--color-slate-band)',   soft: 'var(--color-slate-soft)',   border: 'var(--color-slate-border)',   textOn: 'var(--color-slate-text)' }
};

export function strategyColor(color: Strategy['color']): StrategyColorTokens {
	return tokens[color];
}

const cyclicPalette: Strategy['color'][] = ['sky', 'amber', 'emerald', 'violet', 'rose', 'slate'];

export function colorForIndex(i: number): Strategy['color'] {
	return cyclicPalette[i % cyclicPalette.length];
}
