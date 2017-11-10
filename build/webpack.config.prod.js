const webpack = require('webpack');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base.js')
import ExtractTextPlugin from 'extract-text-webpack-plugin';
module.exports = merge(baseWebpackConfig, {
  entry: {
    home: ['babel-polyfill', './client/pages/home/index.js'],
    about: ['babel-polyfill', './client/pages/about/index.js'],
    page1: ['babel-polyfill', './client/pages/page-1/index.js'],
    page2: ['babel-polyfill', './client/pages/page-2/index.js'],
  },
  devtool: 'inline-source-map',
  module:{
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              emitError: true,
              fix: true
            },
          }
        ]
      },
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
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('production')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 3,
    }),
    plugins: [
      new ExtractTextPlugin("styles.css")
    ]
  ]
});
