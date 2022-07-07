const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			filename: 'index.[contenthash].html',
			inject: 'body'
		})
	]
});