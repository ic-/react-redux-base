import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const baseConfig = {
  // context: path.resolve(__dirname, "../"),
  entry: {
    app: ['webpack-hot-middleware/client', './client/index.js'] // 根目录
  },
  output: {
    filename: '[name].bundle.js', //输出路径
    path: path.join(__dirname, '../dist'), //文件名[entryName] [hash:len] [chunkhash:len]
    publicPath: '/', //资源访问路径，CDN
  },
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

  // 用来进行模块加载相关的配置
  module: {
    rules: [
      // webpack拥有一个类似于插件的机制，名为Loader，通过Loader，webpack能够针对每一种特定的资源做出相应的处理
      // 1.test参数用来指示当前配置项针对哪些资源，该值应是一个条件值(condition)。
      // 2.exclude参数用来剔除掉需要忽略的资源，该值应是一个条件值(condition)。
      // 3.include参数用来表示本loader配置仅针对哪些目录/文件，该值应是一个条件值(condition)。
      // 而include参数则用来指示目录；注意同时使用这两者的时候，实际上是and的关系。
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
        test: /\.js$/,
        exclude: '/node_modules/',
        use:['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}

module.exports = baseConfig
