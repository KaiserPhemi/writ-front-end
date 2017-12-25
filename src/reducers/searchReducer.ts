// action types
import { SEARCH_RESULTS } from '../actions';

/**
 * Search reducer for all user and document search actions
 * 
 * @param {obj} state - state from the store
 * @param {obj} action - action passed
 */
const searchReducer = (state = [], action) => {
  switch (action.type) {
  case SEARCH_RESULTS:
    return action.searchResult;
  default: return state;
  }
};

export default searchReducer;
