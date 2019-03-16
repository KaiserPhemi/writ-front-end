// react libraries
import * as React from 'react';

// third-party libraries
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

// components
import App from '../pages/App.component';
import LandingPage from '../pages/LandingPage';

/**
 * All routes defined here
 *
 * @param {obj} store
 * @returns {any}
 */
const Root = ({ store }): any => {
  return(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
