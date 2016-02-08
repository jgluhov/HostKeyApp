/**
 * Created by jgluhov on 08/02/16.
 */

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname + '/src',
	entry: {
		main: './scripts/main.js'
	},
	output: {
		path: __dirname + '/public',
		filename: 'js/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel?presets[]=es2015']
			},
			{
				test: /\.jade$/,
				exclude: /node_modules/,
				loader: 'jade'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './templates/index.jade'
		})
	]
};