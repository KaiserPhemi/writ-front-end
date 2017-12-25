// action types
import { SET_USER_ID, GET_CURRENT_USER } from '../actions';

/**
 * @desc Handles user profile
 * @param {obj} state - state from the store
 * @param {obj} action - action passed
 * @return {obj}
 */
const profileReducer = (state = [], action) => {
  switch (action.type) {
  case GET_CURRENT_USER: {
    return Object.assign({}, action.user);
  }
  case SET_USER_ID:
    return [
      ...state,
      action.id
    ];
  default: return state;
  }
};

export default profileReducer;
