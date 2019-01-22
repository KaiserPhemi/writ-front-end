'use strict';

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var dotenv = _interopRequireWildcard(_dotenv);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _webpack = require('../webpack/webpack.dev');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = require('webpack');

var _webpack4 = _interopRequireDefault(_webpack3);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// declare variables
// third-party libraries
var app = (0, _express2.default)();
var compiler = (0, _webpack4.default)(_webpack2.default);
var port = process.env.PORT || 4000;
var env = process.env.NODE_ENV || 'development';
app.set('port', port);

// enable hot reloading if in dev mode else use compression
if (env === 'development') {
  app.use((0, _webpackDevMiddleware2.default)(compiler, {
    noInfo: true,
    publicPath: _webpack2.default.output.publicPath
  }));

  app.use((0, _webpackHotMiddleware2.default)(compiler));
} else {
  app.use((0, _compression2.default)());
  app.use(function (request, response, next) {
    if (request.headers['x-forwarded-proto'] !== "https") {
      return response.redirect('https://' + request.headers.host + request.url);
    }
    next();
  });
}

// define static path for files and serve the default file
app.use(_express2.default.static(_path2.default.join(__dirname, '../dist')));
app.get('*', function (request, response) {
  response.status(200).sendFile(_path2.default.join(__dirname, '../dist/index.html'));
});

// create server and listen on port
app.listen(port, function (err) {
  err ? _winston2.default.log(err) : console.log('http://localhost:' + port);
});
