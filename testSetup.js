// third-party libraries
const jsdom = require('jsdom/lib/old-api').jsdom;
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16').Adapter;
require('babel-register')();

configure({ adapter: Adapter });

const nullFunc = () => null;

require.extensions['.css'] = nullFunc;
require.extensions['.png'] = nullFunc;
require.extensions['.jpg'] = nullFunc;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
global.navigator = global.window.navigator;
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.localStorage = {
  setItem: () => {},
  removeItem: () => {},
};

var documentRef = document;
