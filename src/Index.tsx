// react libraries
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// routes
import Root from './routes/routes';

// store
import configureStore from './store/store';

const store: any = configureStore({});

/**
 * @desc Main entry point for  app
 */
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
