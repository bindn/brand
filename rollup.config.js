import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import autoPreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'dist/main.js'
	},
	plugins: [
		svelte({
			preprocess: autoPreprocess(),
			css: css => {
				css.write('dist/main.css');
			}
		}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		!production && livereload('dist'),
		production && terser()
	]
};
