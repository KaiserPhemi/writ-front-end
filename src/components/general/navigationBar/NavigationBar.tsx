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
   * @desc state object
   */
  state = {
    queryParam: ''
  }

  /**
   * @desc this redirects the app to the home page
   */
  private redirectOnClick = () => {
    return history.push('/');
  }

  /**
   * @desc performs the necesarry operation on query
   */
  private searchQuery = (evt) => {
    evt.preventDefault();
    const { queryParam } = this.state;
  }

  /**
   * @desc
   */
  private queryValue = (evt) => {
    return this.setState({ queryParam: evt.target.value });
  }

  /**
   * @desc renders to the DOM
   */
  public render() {
    const { queryParam } = this.state;

    return (
      <nav className='main-navigation-bar'>
        <HomeLogo onClick={this.redirectOnClick}/>
        <SearchBar
          onSubmit={this.searchQuery}
          onChange={this.queryValue}
          initialValue={queryParam}
        />
        <div>Menu List</div>
      </nav>
    );
  }
}

export default NavigationBar;
