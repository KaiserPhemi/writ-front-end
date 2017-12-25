// third-party libraries
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// environment variable
const GLOBALS = { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('production') };

// base configuration
const baseConfig = require('./webpack.common.js');

// production configuration for webpack
module.exports = merge(baseConfig, {
  devtool: 'source-map',
  entry: path.resolve(__dirname, '../src/index'),
  module: {
    rules: [
      { test: /(\.css)$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader') },
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true, minimize: true })
  ]
});
