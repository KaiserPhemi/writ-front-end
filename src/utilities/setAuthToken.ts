// third-party libraries
import http from 'axios';

/**
 * Set's the authorization token
 * 
 * @param {Object} token - Passed token
 * @return {void}
 */
const setAuthToken = (token) => {
  if (token) {
    http.defaults.headers.common.Authorization = token;
  } else {
    delete http.defaults.headers.common.Authorization;
  }
};

export default setAuthToken;
