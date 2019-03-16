// dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

// main configuration
module.exports = {
  entry: "./src/index.tsx",
  output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "/dist")
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: "source-map",
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: false,
      hash: true,
    }),
    new WebpackMd5Hash(),
  ],
  module: {
      rules: [
          { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
  }
};
