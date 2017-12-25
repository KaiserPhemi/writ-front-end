// action types
import {
  LOAD_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_USERS
} from '../actions';

/**
 * User reducer
 * 
 * @param {obj} state - state from the store
 * @param {obj} action - action passed
 */
const userReducer = (state = [], action) => {
  switch (action.type) {
  case LOAD_USER:
    return [
      ...state,
      Object.assign({}, action.user)
    ];
  case UPDATE_USER:
    return [
      ...state.filter(user => user.id !== action.user.id),
      Object.assign({}, action.user)
    ];
  case DELETE_USER:
    return state.filter(item => item.id !== action.userId);
  case SET_USERS:
    return action.users;
  default:
    return state;
  }
};

export default userReducer;
