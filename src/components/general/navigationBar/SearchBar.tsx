// react libraries
import * as React from 'react';

/**
 * @desc
 */
class SearchBar extends React.Component<any> {

  public render() {
    const { onSubmit }: any = this.props;

    return (
      <form className='main-search-bar'>
        <label htmlFor="search-bar">
          <input
            className='search-field'
            type="text"
            placeholder="Search...."
          />
          <span
            className='search-icon'
            onClick={onSubmit}
          >
            <i className="fas fa-search" />
          </span>
        </label>
      </form>
    );
  }
}

export default SearchBar;
