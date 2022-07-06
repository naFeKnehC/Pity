const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		pity: './src/index.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, '../dist'),
		clean: true,
		pathinfo: false
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [
							'@babel/plugin-transform-runtime',
							'@babel/plugin-proposal-class-properties'
						]
					}
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			//webpack5内置图片处理
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html')
		})
	],
	devServer: {
		static: './dist',
		port: 8888
	},
	//TODO 缓存优化
	optimization: {
		runtimeChunk: 'single',
		usedExports: true,
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
};