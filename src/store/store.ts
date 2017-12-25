// third-party libraries
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

// reducer
import rootReducer from '../reducers';

const workingEnv = process.env.NODE_ENV;
let devModule;
if (workingEnv === 'development') {
  devModule = require('redux-devtools-extension');
}

// initial state and middleware
const initialState = {};
const middlewares: any[] = workingEnv === 'production' ?
                            [thunk] : [thunk, reduxImmutableStateInvariant()];
/**
 * @export
 * @param {obj} {}
 * @returns {any} 
 */
const configureStore = ({}) => {
  const middleware = (workingEnv === 'development') ?
                      devModule.composeWithDevTools(applyMiddleware(...middlewares)) :
                      applyMiddleware(...middlewares);
  return createStore(
    rootReducer,
    initialState,
    middleware,
  );
};

export default configureStore;
