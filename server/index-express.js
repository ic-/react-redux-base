var express = require('express');
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('../build/webpack.config.dev.js');
var compiler = webpack(config)
const app = express()
app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  stats: {
    colors: true
  },
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.listen('8081', 'localhost', function (err) {
  if (err) console.log(err)

  console.log('Express start success!\n')
  console.log('Project is runing at http://localhost:8081/ \n')
})
