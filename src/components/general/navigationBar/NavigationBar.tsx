// react libraries
import * as React from 'react';

// interfaces
import { INavigationBarProps, INavigationBarState } from '../../../interfaces/navigationBar';

// styles
// import './navBar.scss';

/**
 * @desc
 */
class NavigationBar extends React.Component<INavigationBarProps, INavigationBarState> {
  public render() {
    return (
      <nav className='main-navigation-bar'>
        <div>My navigation bar</div>
        <div>Search bar</div>
        <div>Menu List</div>
      </nav>
    );
  }
}

export default NavigationBar;
