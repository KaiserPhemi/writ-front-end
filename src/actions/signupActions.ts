// third-party libraries
import http from 'axios';
import jwt from 'json-web-token';

// helper functions
import errorMessage from '../utilities/message';
import setAuthorizationToken from '../utilities/SetAuthToken';

// action types
import { SET_CURRENT_USER } from './index';

/**
 * Sends action for user sign up
 * 
 * @param {Object} userData - Data from the client form
 * @returns {Object}
 */
export const signupRequest = (userData) => {
  return (dispatch) => {
    return http.post('/users', userData)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch({
          type: SET_CURRENT_USER,
          user: jwt.decode(token)
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error.response.data.message));
      });
  };
};
