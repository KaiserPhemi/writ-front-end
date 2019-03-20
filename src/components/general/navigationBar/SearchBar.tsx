// react libraries
import * as React from 'react';

/**
 * @desc
 */
class SearchBar extends React.Component {

  public render() {
    return (
      <form className='main-search-bar'>
        <label htmlFor="search-bar">
          <input
            className='search-field'
            type="text"
            placeholder="Search...."
          />
          <span className='search-icon'>
            <i className="fas fa-search" />
          </span>
        </label>
      </form>
    );
  }
}

export default SearchBar;
