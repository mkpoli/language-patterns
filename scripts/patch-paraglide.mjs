// Prepend `// @ts-nocheck` to paraglide-generated JS files so svelte-check
// doesn't try to reconcile their plain Web `Request` usage with Cloudflare
// Workers' augmented `Request` type. The generated code runs fine at runtime;
// this only suppresses spurious type errors on regenerated artefacts.
import fs from 'node:fs';
import path from 'node:path';

const dir = 'src/lib/paraglide';
if (!fs.existsSync(dir)) {
	process.exit(0);
}

function walk(d) {
	for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
		const p = path.join(d, entry.name);
		if (entry.isDirectory()) walk(p);
		else if (entry.isFile() && entry.name.endsWith('.js')) {
			const content = fs.readFileSync(p, 'utf8');
			if (!content.includes('@ts-nocheck')) {
				fs.writeFileSync(p, '// @ts-nocheck\n' + content);
			}
		}
	}
}

walk(dir);
