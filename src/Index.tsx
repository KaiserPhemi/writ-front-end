// react libraries
import * as React from 'react';

// third party libraries
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';

// polyfill for older browser
import 'raf/polyfill';

// routes
import Root from './routes/routes';

// store
import configureStore from './store/store';

const store: any = configureStore({});

/**
 * @desc Main entry point for  app
 */
render(
  <Root store={store} />,
  document.getElementById('root')
);
