// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base.js')
module.exports = merge(baseWebpackConfig, {
  devtool: 'inline-source-map',
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
