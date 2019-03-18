// react libraries
import * as React from 'react';

// components
import Root from '../routes/routes';

// store
import configureStore from '../store/store';
const store = configureStore({});

/**
 * @desc
 */
const App: React.SFC = () => (
  <div className='main-container'>
    <div className='main-body-container'>
      <Root store={store}/>
    </div>
  </div>
);

export default App;
