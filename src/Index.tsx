// react libraries
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// routes
import App from './pages/App';

// store
import configureStore from './store/store';
const store = configureStore({});

/**
 * @desc Main entry point for  app
 */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
