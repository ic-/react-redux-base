
const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
module.exports = {
    // ...
    plugins: [
      new ManifestPlugin()
    ]
};
const baseConfig = {
  // context: path.resolve(__dirname, "../"),

  // 用来配置依赖文件的匹配，如依赖文件的别名配置、模块的查找目录、默认查找的
  // 文件后缀名
  // resolve.root 该选型用来制定模块查找的根路径，必须为**绝对路径**，值可以
  // 是路径字符串或者路径数组若是数组，则会依次查找
  resolve: {
    //绝对路径
    // root:
    //自动扩展 不需要写后缀
    extensions: ['.js', '.jsx', '.json', '.css', '.less'],
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias: {
      // 'src': path.resolve(__dirname, '../client'),
      // 'assets': path.resolve(__dirname, '../client/assets'),
      // 'components': path.resolve(__dirname, '../client/components')
    }
  },
  plugins: [
  ],
  // 用来进行模块加载相关的配置
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: ['babel-loader']
      },
      {
        test: /\.json$/,
        exclude: '/node_modules/',
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'img/[name].[hash:6].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|ogg|eot|woff|ttf|svg)$/,
        use: 'file-loader',
      },
    ],
  }
}

module.exports = baseConfig
