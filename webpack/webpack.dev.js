// third-party libraries
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack')

// environment variable
const GLOBALS = { 'process.env.NODE_ENV': JSON.stringify('development') };

// base configuration
const baseConfig = require('./webpack.common.js');

// default port for app
const port = process.env.PORT || 4000;

// development webpack configuration
module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, '../src/index')
  ],
  module:{
    rules: [
      { test: /(\.css)$/, loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader' },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    historyApiFallback: true,
    port: port
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ]
});
