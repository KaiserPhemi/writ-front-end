// third-party libraries
import isEmpty from 'lodash/isEmpty';

// action types
import { SET_CURRENT_USER } from '../actions';

// initial state
const initialState = {
  isAuthenticated: false,
  user: {},
};

/**
 * Authentication reducer
 * 
 * @param {obj} state - state from the store
 * @param {obj} action - action passed
 * @return {obj} 
 */
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    default: return state;
  }
};

export default authReducer;
