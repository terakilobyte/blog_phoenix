#!/usr/bin/env node

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  hot: true
}).listen(8080, '0.0.0.0', function(err, result) {
  if (err) console.error(err);
  console.log('webpack-dev-server running on port 8080');
});

process.stdin.resume();
process.stdin.on('end', function() {
  process.exit(0);
});
