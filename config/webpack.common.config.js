const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
	entry: {
		pity: './src/index.tsx'
	},
	output: {
		filename: 'js/[name]-[chunkhash].js',
		path: path.resolve(__dirname, '../dist'),
		clean: true,
		publicPath: '/'
	},
	module: {
		rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ],
          plugins: [
            ['import', {libraryName: 'antd', style: 'css'}], // `style: true` 会加载 less 文件
          ],
        }
      },
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: [{
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env', '@babel/preset-react'],
      //       plugins: [
      //         '@babel/plugin-transform-runtime',
      //         '@babel/plugin-proposal-class-properties',
      //         //antd css 按需引入
      //         ['import', {'libraryName': 'antd', 'style': 'css'}]
      //       ]
      //     }
      //   }]
      // },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          //style-loader
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
                localIdentContext: path.resolve(__dirname, '../src')
              }
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      //webpack5内置图片处理
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
	},
	plugins: [
		new MiniCssExtractPlugin()
	],
	resolve: {
		extensions: [".ts", ".tsx", '.js', '.jsx', '.json', '.less', '.css'],
		modules: [path.resolve(__dirname, '../src'), 'node_modules'],
		alias: {
			'@': path.resolve(__dirname, '../src'),
			'@components': path.resolve(__dirname, '../src/components'),
			'@pages': path.resolve(__dirname, '../src/pages'),
			'@util': path.resolve(__dirname, '../src/util')
		}
	},
	// externals: {
	// 	"react": "React",
	// 	"react-dom": "ReactDOM"
	// }, 有bug React is undefined
	// optimization: {
	// 	minimize: true,//开发环境压缩
	// 	minimizer: [
	// 		new TerserPlugin(),//js压缩
	// 		new CssMinimizerPlugin() //css压缩
	// 	]
	// }
};
