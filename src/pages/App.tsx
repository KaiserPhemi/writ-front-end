// react libraries
import * as React from 'react';

// components
import Root from '../routes/routes';
import NavigationBar from '../components/general/navigationBar/NavigationBar';

// interfaces
import { IAppProps } from '../interfaces/app';

// store
import configureStore from '../store/store';
const store = configureStore({});

/**
 * @desc
 */
const App: React.SFC<IAppProps> = () => (
  <div className='main-container'>
    <NavigationBar />
    <div className='main-body-container'>
      <Root store={store}/>
    </div>
  </div>
);

export default App;
