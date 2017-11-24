const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = merge(baseWebpackConfig, {
  devtool: 'source-map',
  entry: {
    home: ['babel-polyfill', './client/pages/home/index.js'],
    vender:[
      'classnames'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module:{
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   exclude: '/node_modules/',
      //   use: [
      //     {
      //       loader: 'eslint-loader',
      //       options: {
      //         emitError: true,
      //         fix: true
      //       },
      //     }
      //   ]
      // },
      {
        test: /\.(css|scss)$/,
        exclude: '/node_modules/',
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:  ['css-loader', 'sass-loader']
        }),
      }
    ]
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // minChunks: 3,
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('production')
    }),
    new ExtractTextPlugin("styles.css")
  ]
});
