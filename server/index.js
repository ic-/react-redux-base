const koa = require('koa');
var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpackHotMiddleware = require('koa-webpack-hot-middleware');

const config = require('../build/webpack.config.dev.js')
const app =new koa()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.listen('8081', 'localhost', function (err) {
  if (err) console.log(err)

  console.log('Koa start success!\n')
  console.log('Project is runing at http://localhost:8081/ \n')
})
