// react libraries
import * as React from 'react';

// third-party libraries
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

// components
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';

// checks if logged-in
const loggedIn = true;

/**
 * @desc All routes defined here
 * @param store redux store object
 */
const Root = ({ store }) => {
  return(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            path='/'
            exact={true}
            render={() => loggedIn ? <HomePage /> : <LandingPage />}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
