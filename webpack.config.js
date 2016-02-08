/**
 * Created by jgluhov on 08/02/16.
 */

var HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	koutoSwiss = require('kouto-swiss');


module.exports = {
	context: __dirname + '/src',
	entry: {
		main: './scripts/main.js'
	},
	output: {
		path: __dirname + '/public',
		filename: './js/bundle.js'
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
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style','css')
			},
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style','css!stylus')
			},
			{
				test: /\.(ttf|woff|woff2|eot|svg|png)$/,
				loader: 'file?name=./fonts/[name].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './templates/index.jade'
		}),
		new ExtractTextPlugin("./css/styles.css", {
			disable: process.env.NODE_ENV == 'development'
		})
	],
	stylus: {
		use: [koutoSwiss()],
		import: ['~kouto-swiss/index.styl']
	}
};