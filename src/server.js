// third-party libraries
import open from 'open';
import path from 'path';
import express from 'express';
import * as dotenv from 'dotenv';
import winston from 'winston';
import compression from 'compression';
import config from '../webpack/webpack.dev';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// declare variables
const app = express();
const compiler = webpack(config);
const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';
app.set('port', port);

// enable hot reloading if in dev mode else use compression
if (env === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(compression());
  app.use ((request, response, next) => {
    if (request.headers['x-forwarded-proto'] !== "https") {
      return response.redirect(`https://${request.headers.host}${request.url}`);
    }
    next();
  });
}

// define static path for files and serve the default file
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (request, response) => {
  response.status(200)
    .sendFile(path.join(__dirname, '../dist/index.html'));
});

// create server and listen on port
app.listen(port, err => {
  err ? winston.log(err) : open(`http://localhost:${port}`);
});
