import babel from 'rollup-plugin-babel';

export default {
	entry: 'app/js/app.js',
	dest: 'app/build/app.js',
	format: 'iife',
	sourceMap: 'inline',
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
};