const path = require("path");
const webpack = require('webpack');
module.exports = {
  resolve: {
    extensions: [".js", ".jsx"]
  },
  entry: {
    vendor: ['babel-polyfill', 'classnames', 'history', 'immutable', 'react', 'react-dom',
      'react-redux', 'react-router', 'redux', 'redux-immutable', 'redux-thunk']
  },
  output: {
    filename: "[name].dll.js", // best use [hash] here too
    path: path.join(__dirname, '..',"public"),
		library: "vendor_lib_[hash]",
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      }
    }),
    new webpack.DllPlugin({
      context:  __dirname,
      /**
       * path
       * 定义 manifest 文件生成的位置
       * [name]的部分由entry的名字替换
       */
      path: path.join(__dirname, '..',"public", 'vendor-manifest.json'),
      /**
       * name
       * dll bundle 输出到那个全局变量上
       * 和 output.library 一样即可。
       */
      name: "vendor_lib_[hash]",
    })

  ],
};


