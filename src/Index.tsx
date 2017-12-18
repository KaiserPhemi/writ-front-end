// react libraries
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

/**
 * renders to the DOM
 */
render(
  <Provider>
    <Router />
  </Provider>, document.getElementById('root')
);
