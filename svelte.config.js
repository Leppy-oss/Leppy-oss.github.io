import adapter from '@sveltejs/adapter-static';
import {
	vitePreprocess
} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/leppy-oss.github.io' : '',
		}
	}
};

export default config;