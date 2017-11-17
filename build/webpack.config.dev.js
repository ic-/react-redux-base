// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge')
const hotMiddlewareScript = 'webpack-hot-middleware/client'
const baseWebpackConfig = require('./webpack.config.base.js')
module.exports = merge(baseWebpackConfig, {
  devtool: 'inline-source-map',
  entry: {
    home: ['babel-polyfill', './client/pages/home/index.js', hotMiddlewareScript],
    // about: ['babel-polyfill', './client/pages/about/index.js', hotMiddlewareScript],
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
  // devServer: {
  //   hot: true,
  //   contentBase: './dist'
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('development')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Development',
    //   name: 'inedx.html',
    //   template: './public/index.html',  // 根目录
    // }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      /**
       * 在这里引入 manifest 文件
       */
      manifest: require('../public/vendor-manifest.json')
    })
  ]
});
