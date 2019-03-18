// react libraries
import * as React from 'react';

/**
 * @desc
 */
class SearchBar extends React.Component {
  public render() {
    return (
      <div className='main-search-bar'>
        <label htmlFor="search-bar">
          <input
            type="text"
            placeholder="Search...."
          />
          <span>search-icon</span>
        </label>
      </div>
    );
  }
}

export default SearchBar;
