// third-party libraries
const path = require('path');
const webpack = require('webpack');

// base configuration
module.exports = {
  module: {
    rules: [
      { test: /\.tsx?$/, include: path.join(__dirname, '../src'), loaders: ['ts-loader', 'tslint-loader'], exclude: /node_modules/ },
      { test: /(\.scss)$/, loaders: ['style-loader', 'css-loader','sass-loader'] },
      { test: /\.(jpe?g|png|gif|svg|jpg|otf)$/i, loaders: [ 'file-loader', 'image-webpack-loader' ] },
      { test: /\.(js|jsx)$/, include: path.join(__dirname, '../src'),loader: 'babel-loader', query: { presets: ['es2015', 'react'] } },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  target: 'web',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.join(__dirname,'../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [

  ]
};
