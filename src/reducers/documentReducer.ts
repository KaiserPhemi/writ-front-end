// action types
import {
  CREATE_DOCUMENT,
  LOAD_DOCUMENT,
  UPDATE_DOCUMENT,
  DELETE_DOCUMENT,
  SET_DOCUMENTS
} from '../actions';

/**
 * Reducers for handling documents
 * 
 * @param {obj} state - state from the store
 * @param {obj} action - action passed
 * @return {obj}
 */
const documentReducer = (state = [], action) => {
  switch (action.type) {
  case CREATE_DOCUMENT:
    return [
      ...state,
      Object.assign({}, action.document)
    ];
  case LOAD_DOCUMENT:
    return [
      ...state.filter(document => document.id !== action.document.id),
      Object.assign({}, action.document)
    ];
  case UPDATE_DOCUMENT:
    return [
      ...state.filter(document => document.id !== action.document.id),
      Object.assign({}, action.document)
    ];
  case DELETE_DOCUMENT:
    return [
      ...state.filter(document => document.id !== action.documentId),
    ];
  case SET_DOCUMENTS:
    return action.document;
  default: return state;
  }
};

export default documentReducer;
