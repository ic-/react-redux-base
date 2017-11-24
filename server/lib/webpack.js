
import webpack from 'webpack'
import webpackDevMiddleware from 'koa-webpack-dev-middleware'
import webpackHotMiddleware from 'koa-webpack-hot-middleware'
import config from '../../build/webpack.config.dev.js'
const compiler = webpack(config)

function init(app){
  try{
    app.use(webpackDevMiddleware(compiler, {
      cache: false,
      stats: {
        assets: true,
        chunks: false,
        children: false,
        timings: true,
        colors: true
      },
      publicPath: config.output.publicPath
    }))
    app.use(webpackHotMiddleware(compiler))
  }catch(err){
    console.log(err)
  }
}


module.exports = init
