// third-party libraries
import { combineReducers } from 'redux';

// reducers
import { documentReducer } from './documentReducer';

// combined reducers
export default combineReducers({
  documentReducer,
});
