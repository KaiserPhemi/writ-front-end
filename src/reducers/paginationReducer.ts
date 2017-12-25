// action types
import { SET_PAGINATION } from '../actions';

/**
 * Handles pagination of results
 * 
 * @param {obj} state - state from the store
 * @param {obj} action - action passed
 * @return {obj}
 */
const paginationReducer = (state = {}, action) => {
  switch (action.type) {
  case SET_PAGINATION:
    return action.pagination;
  default: return state;
  }
};

export default paginationReducer;
