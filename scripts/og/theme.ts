/**
 * The card palette is the site palette. `src/routes/layout.css` stores every
 * colour as `light-dark(light, dark)`; the cards render in the light scheme, so
 * the first argument is taken and the tokens are re-declared for the standalone
 * card document.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const cssPath = fileURLToPath(new URL('../../src/routes/layout.css', import.meta.url));

export function lightTokens(): Record<string, string> {
	const css = readFileSync(cssPath, 'utf8');
	const theme = css.match(/@theme\s*\{([\s\S]*?)\n\}/);
	if (!theme) throw new Error('layout.css: no @theme block');

	const tokens: Record<string, string> = {};
	for (const [, name, rawValue] of theme[1].matchAll(/(--color-[\w-]+):\s*([^;]+);/g)) {
		const value = rawValue.trim().replace(/\s+/g, ' ');
		const pair = value.match(/^light-dark\(\s*(.+?)\s*,\s*(.+?)\s*\)$/);
		tokens[name] = pair ? pair[1] : value;
	}
	if (!tokens['--color-paper']) throw new Error('layout.css: no --color-paper token');
	return tokens;
}

export function tokenBlock(): string {
	return Object.entries(lightTokens())
		.map(([name, value]) => `\t\t\t${name}: ${value};`)
		.join('\n');
}
