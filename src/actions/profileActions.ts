// third-party libraries
import http from 'axios';

// helper libraries
import errorMessage from '../utilities/message';

// action types
import { GET_CURRENT_USER, } from './index';

/**
 * Fetches a single user
 * 
 * @param  {Number} userId
 * @return {Object}
 */
export const getUser = (userId) => {
  return (dispatch) => {
    return http.get(`/users/${userId}`)
      .then((response) => {
        dispatch({
          type: GET_CURRENT_USER,
          user: response.data.user
        });
      })
      .catch((error) => {
        dispatch(errorMessage(error.response.data.message));
      });
  };
};

/**
 * Updates user
 * 
 * @param  {Object} data
 * @param  {Number} userId
 * @return {Object}
 */
export const updateUser = (data, userId) => {
  return (dispatch) => {
    return http.put(`/users/${userId}`, data)
      .catch((error) => {
        dispatch(errorMessage(error.response.data.message));
      });
  };
};
