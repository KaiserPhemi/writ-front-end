// third -party libraries
import http from 'axios';

// action types
import {
  SEARCH_RESULTS,
  SET_DOCUMENTS,
  SET_PAGINATION
} from './index';

/**
 * Dispatch action for search result
 * 
 * @param  {Object} searchResult
 * @return {Object}
 */
export const documentSearched = (searchResult) => {
  return {
    type: SEARCH_RESULTS,
    searchResult
  };
};

/**
 * Dispatch actions for searching for a user
 * 
 * @param {obj} searchResult 
 */
export const userSearched = (searchResult) => {
  return {
    type: SEARCH_RESULTS,
    searchResult
  };
};

/**
 * Dispatch action to search a document
 * 
 * @param {Object} queryString
 * @returns {Object}
 */
export const searchDocuments = (queryString) => {
  return (dispatch) => {
    return http.get(`/documents/search/documents?q=${queryString}`)
      .then((response) => {
        dispatch({
          type: SET_DOCUMENTS,
          document: response.data.rows
        });
        dispatch({
          type: SET_PAGINATION,
          pagination: response.data.paging
        });
      });
  };
};

/**
 * Dispatch action to search a user
 * 
 * @param {String} queryString String passed to search function
 * @return {Object}
 */
export const searchUsers = (queryString) => {
  return (dispatch) => {
    return http.get(`/users/search/users?q=${queryString}`)
      .then((response) => {
        if (!queryString) {
          dispatch(userSearched([]));
        }
        dispatch(userSearched(response.data.rows));
        dispatch({
          type: SET_PAGINATION,
          pagination: response.data.paging
        });
      });
  };
};
