// third-party libraries
import { combineReducers } from 'redux';

// reducers
import authReducer from './authReducer';
import documentReducer from './documentReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer';
import paginationReducer from './paginationReducer';
import profileReducer from './profileReducer';

/**
 * Root reducer combines all other reducers
 */
const rootReducer = combineReducers({
  authReducer,
  documentReducer,
  userReducer,
  searchReducer,
  paginationReducer,
  profileReducer
});

export default rootReducer;
