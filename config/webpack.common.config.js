const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tsImportPluginFactory = require('ts-import-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    pity: './src/index.tsx'
  },
  output: {
    filename: 'js/[name]-[chunkhash].js', //动态名称解决线上缓存
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env', //转译 ES2015+的语法
            '@babel/preset-react', //转译 react 的 JSX
            '@babel/preset-typescript'
          ],
          plugins: [
            ['import', {libraryName: 'antd', style: 'css'}], //antd 按需引入 `style: true` 会加载 less 文件
            '@babel/plugin-transform-runtime', //防止污染全局，代码复用和减少打包体积
            '@babel/plugin-proposal-class-properties', //用来编译类(class)
          ],
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
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
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", '.js', '.jsx', '.json', '.less', '.css'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
};
