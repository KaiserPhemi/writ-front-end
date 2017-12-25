// react libraries
import * as React from 'react';

// third-party libraries
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch  } from 'react-router-dom';

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
        <Route exact path="/" component={App} />
        <Route exact path="/" component={LandingPage} />
        {/* <Route path="signup" component={SignUpPage} />
        <Route path="about" component={About} />
        <Route path="login" component={Login} />
        <Route path="document" component={ManageDocumentPage} />
        <Route path="document/:id" component={ManageDocumentPage} />
        <Route path="document/:id/edit" component={DocumentEdit} />
        <Route path="user" component={UsersPage} />
        <Route path="document/:id/details" component={DocumentDetailsPage} />
        <Route path="editprofile" component={ProfilePage} /> */}
      </Router>
    </Provider>
  );
};

export default Root;
