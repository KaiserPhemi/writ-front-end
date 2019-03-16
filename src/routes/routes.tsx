// react libraries
import * as React from 'react';

// third-party libraries
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

// components
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';

// checks if logged-in
const loggedIn = false;

/**
 * All routes defined here
 *
 * @param {obj} store
 * @returns {any}
 */
const Root = ({ store }) => {
  return(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              loggedIn
                ? <HomePage />
                : <LandingPage />
            )}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
