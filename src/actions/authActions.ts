// third-party libraries
import http from 'axios';
import jwt from 'json-web-token';

// helper libraries
// import errorMessage from '../utilities/message';
import setAuthToken from '../utilities/setAuthToken';

// action types
import { SET_CURRENT_USER, SET_DOCUMENTS } from './index';

/**
 * Forwards logout actions
 * 
 * @return {Object}
 */
export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch({
      type: SET_CURRENT_USER,
      user: {}
    });
    dispatch({
      type: SET_DOCUMENTS,
      documents: []
    });
  };
};

/**
 * Forwards login actions
 * 
 * @param {Object} data User details
 * @returns {Object}
 */
export const login = (data) => {
  return dispatch =>
    http.post('/users/login', data)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        dispatch({
          type: SET_CURRENT_USER,
          user: jwt.decode(token),
        });
      }) //.catch(error => dispatch(errorMessage(error.response.data.message)));
};
