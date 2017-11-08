const webpack = require('webpack');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base.js')
import ExtractTextPlugin from 'extract-text-webpack-plugin';
module.exports = merge(baseWebpackConfig, {
  entry: {
    app: ['webpack-hot-middleware/client', './client/index.js'] // 根目录
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   hot: true,
  //   contentBase: './dist'
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('production')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 3,
    }),
  ]
});
