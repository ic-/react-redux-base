

const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('../build/webpack.config.dev.js');
const options = {
  contentBase: './dist',
  hot: true,
  noInfo: false,
  stats: {
    colors: true
  },
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(8081, 'localhost', () => {
  console.log('dev server listening on port 8081');
});
