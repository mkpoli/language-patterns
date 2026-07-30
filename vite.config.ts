import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			// The /zh and /ja prefixes decide the locale, so a page can be linked,
			// shared and indexed in one language. Cookie and Accept-Language only
			// come into play on the unprefixed English paths.
			strategy: ['url', 'cookie', 'preferredLanguage', 'baseLocale']
		})
	]
});
