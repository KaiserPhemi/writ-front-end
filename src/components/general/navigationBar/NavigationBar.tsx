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

// history
import history from '../../../fixtures/history';

// styles
import './navBar.scss';

/**
 * @desc
 */
class NavigationBar extends React.Component<INavigationBarProps, INavigationBarState> {

  /**
   * @desc this redirects the app to the home page
   */
  private redirectOnClick = () => {
    return history.push('/');
  }

  /**
   * @desc renders to the DOM
   */
  public render() {
    return (
      <nav className='main-navigation-bar'>
        <HomeLogo onClick={this.redirectOnClick}/>
        <SearchBar />
        <div>Menu List</div>
      </nav>
    );
  }
}

export default NavigationBar;
