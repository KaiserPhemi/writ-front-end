// third-party libraries
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

// reducer
import rootReducer from '../reducers';

const workingEnv = process.env.NODE_ENV;
let devModule;
if (workingEnv === 'development') {
  // tslint:disable-next-line:no-require-imports
  devModule = require('redux-devtools-extension');
}

// initial state and middleware
const initialState: any = {};
const middlewares = workingEnv === 'production'
  ? [thunk]
  : [thunk, reduxImmutableStateInvariant()];

/**
 * @export
 * @returns object
 */
const configureStore = ({}) => {
  const middleware = (workingEnv === 'development')
    ? devModule.composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  return createStore(
    rootReducer,
    initialState,
    middleware
  );
};

export default configureStore;
