const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// components
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const chunks = require('./webpack/chunks');
const minimizeJS = require('./webpack/minimizeJS')

const PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'build')
};

const common = merge([{
		entry: {
			'index': PATHS.source + '/app/index.js'
		},
		output: {
			path: PATHS.build,
			filename: './js/[name].js'
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index', 'common'],
				template: PATHS.source + '/app/index.html'
			})
		]
	},
	chunks()
]);

module.exports = function (env) {
	if (env === 'production') {
		return merge([
			common,
			minimizeJS(),
			extractCSS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		]);
	}
};