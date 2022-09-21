const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		static: path.resolve(__dirname, '../dist'),
		port: 8888,
		open: true,
		hot: true,
		historyApiFallback: true
	},
	devtool: 'inline-source-map'
});
