// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge')
const hotMiddlewareScript = 'webpack-hot-middleware/client'
const baseWebpackConfig = require('./webpack.config.base.js')
module.exports = merge(baseWebpackConfig, {
  devtool: 'inline-source-map',
  entry: {
    home: ['babel-polyfill', './client/pages/home/index.js', hotMiddlewareScript],
    vender:[
      'classnames'
    ]
  },
  output: {
    filename: '[name].bundle.js', //输出路径
    path: path.join(__dirname, '../dist'), //文件名[entryName] [hash:len] [chunkhash:len]
    publicPath: '/', //资源访问路径，CDN
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: '/node_modules/',
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DllReferencePlugin({
      context: __dirname,
      /**
       * 在这里引入 manifest 文件
       */
      manifest: require('../public/vendor-manifest.json')
    })
  ]
});
