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
            type="text"
            placeholder="Search...."
          />
          <span>search-icon</span>
        </label>
      </form>
    );
  }
}

export default SearchBar;
