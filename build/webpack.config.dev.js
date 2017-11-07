const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Manifest = require('../dll/vendor-manifest.json')
module.exports = {
  entry: {
    app: ['webpack-hot-middleware/client', './client/index.js'], // 根目录
    vendor: ['./dll/vendor-manifest.json']
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   hot: true,
  //   contentBase: './dist'
  // },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    library: "vendor_lib_[hash]"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),  //清除build prod
    new HtmlWebpackPlugin({
      title: 'Development',
      name: 'inedx.html',
      template: './public/index.html',  // 根目录
      vendorName: Manifest.name + '.js',
      inject: true
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      /**
       * 在这里引入 manifest 文件
       */
      manifest: require('../dll/vendor-manifest.json')
    })
  ],
};
