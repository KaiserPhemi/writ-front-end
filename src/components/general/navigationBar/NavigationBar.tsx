// react libraries
import * as React from 'react';

// interfaces
import { INavigationBarState } from '../../../interfaces/navigationBar';

// components
import HomeLogo from './HomeLogo';
import SearchBar from './SearchBar';
import ProfilePicture from './ProfilePicture';
import NavBarMenu from './NavBarMenu';

// history
import history from '../../../fixtures/history';

// styles
import './navBar.scss';

/**
 * @desc handles all elements for navigation bar
 */
class NavigationBar extends React.Component<any, INavigationBarState> {

  /**
   * @desc state object
   */
  public state = {
    queryParam: ''
  };

  /**
   * @desc renders to the DOM
   */
  public render() {
    const { queryParam } = this.state;
    const isLoggedIn = false;

    return (
      <nav className='main-navigation-bar'>
        <HomeLogo onClick={this.redirectOnClick}/>
        <SearchBar
          onSubmit={this.searchQuery}
          onChange={this.queryValue}
          initialValue={queryParam}
        />
        <div className='profile-menu-list-wrapper'>
          <NavBarMenu />
          {
            isLoggedIn ? <ProfilePicture /> : ''
          }
        </div>
      </nav>
    );
  }

  /**
   * @desc this redirects the app to the home page
   * @returns history object
   */
  private readonly redirectOnClick = () => {
    history.push('/');
  }

  /**
   * @desc performs the necesary operation on query
   * @param evt event object from event emitter
   */
  private readonly searchQuery = (evt) => {
    evt.preventDefault();
  }

  /**
   * @desc stores the search query in the state
   * @param evt event object from event emitter
   */
  private readonly queryValue = (evt) => {
    this.setState({ queryParam: evt.target.value });
  }
}

export default NavigationBar;
