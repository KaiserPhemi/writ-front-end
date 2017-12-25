// third-party libraries
import http from 'axios';

// action types
import {
  SET_USERS,
  SET_PAGINATION,
  LOAD_USER,
  UPDATE_USER,
  DELETE_USER
} from './index';

/**
 * Dispatch action to fetch users
 * 
 * @param {number} offset - Output paging offset
 * @returns {Object}
 */
export const fetchUsers = (offset) => {
  const pageOffset = offset || 0;
  const limit = 5;

  return (dispatch) => {
    return http.get(`/users/?offset=${pageOffset}&limit=${limit}`)
      .then((response) => {
        dispatch({
          type: SET_USERS,
          users: response.data.users.rows
        });
        dispatch({
          type: SET_PAGINATION,
          pagination: response.data.paging
        });
      });
  };
};

/**
 * Dispatch action to fetch a user
 * 
 * @param {Object} id - Specific user ID
 * @returns {Object}
 */
export const fetchUser = (id) => {
  return (dispatch) => {
    return http.get(`/users/${id}`)
      .then(response => dispatch({
        type: LOAD_USER,
        user: response.data,
      }));
  };
};

/**
 * Dispatch action to update a user
 * 
 * @param {Object} id - User object
 * @param {Object} userId - User's userId
 * @returns {Object}
 */
export const updateUser = (id) => {
  return (dispatch) => {
    return http.put(`/users/${id}`)
      .then((response) => {
        dispatch({
          type: UPDATE_USER,
          user: response.data
        });
      }
    );
  };
};

/**
 * Dispatches action for delete
 * 
 * @param {Object} id User ID
 * @returns {Object}
 */
export const deleteUser = (id) => {
  return (dispatch) => {
    return http.delete(`/users/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_USER,
          user: response.data
        });
        dispatch(fetchUsers(0));
      });
  };
};
