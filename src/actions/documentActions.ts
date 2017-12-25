// third-party libraries
import http from 'axios';

// action types
import {
  CREATE_DOCUMENT,
  LOAD_DOCUMENT,
  SET_DOCUMENTS,
  SET_PAGINATION,
  UPDATE_DOCUMENT,
} from './index';

/**
 * Dispatches action to create a new document
 * 
 * @param {Object} data
 * @returns {Object}
 */
export const saveDocument = (data) => {
  return (dispatch) => {
    return http.post('/documents', data)
      .then((response) => {
        dispatch({
          type: CREATE_DOCUMENT,
          document: response.data.createdDoc
        });
      });
  };
};

/**
 * Dispatches action to fetch all documents
 * 
 * @param {Object} offset - Paging offset
 * @returns {Object}
 */
export const fetchDocuments = (offset) => {
  const pageOffset = offset || 0;
  const limit = 6;

  return (dispatch) => {
    return http.get(`/documents/?offset=${pageOffset}&limit=${limit}`)
      .then((response) => {
        dispatch({
          type: SET_DOCUMENTS,
          document: response.data.documents.rows
        });
        dispatch({
          type: SET_PAGINATION,
          pagination: response.data.paging
        });
      });
  };
};

/**
 * Action to fetch a specific document
 * 
 * @param {Object} id Document Id
 * @returns {Object}
 */
export const fetchDocument = (id) => {
  return (dispatch) => {
    return http.get(`/documents/${id}`)
      .then((response) => {
        dispatch({
          type: LOAD_DOCUMENT,
          document: response.data.documents.rows,
        });
      });
  };
};

/**
 * Action to edit a specific document
 * 
 * @param {Number} id Document id
 * @param {Object} document Initial data
 * @returns {Object}
 */
export const updateDocument = (id, document) => {
  return (dispatch) => {
    return http.put(`/documents/${id}`, document)
      .then((response) => {
        dispatch({
          type: UPDATE_DOCUMENT,
          document: response.data,
        });
      });
  };
};

/**
 * Action to delete a specific document
 * 
 * @param {Object} id Document Id
 * @returns {Object}
 */
export const deleteDocument = (id) => {
  return (dispatch) => {
    return http.delete(`/documents/${id}`)
    .then(() => {
      dispatch(fetchDocuments(0));
    });
  };
};
