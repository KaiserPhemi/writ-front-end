// react libraries
import * as React from 'react';

// interfaces
import {
  INavigationBarProps,
  INavigationBarState
} from '../../../interfaces/navigationBar';

// components
import HomeLogo from './HomeLogo';
import SearchBar from './SearchBar';

// styles
import './navBar.scss';

/**
 * @desc
 */
class NavigationBar extends React.Component<INavigationBarProps, INavigationBarState> {
  public render() {
    return (
      <nav className='main-navigation-bar'>
        <HomeLogo />
        <SearchBar/>
        <div>Menu List</div>
      </nav>
    );
  }
}

export default NavigationBar;
