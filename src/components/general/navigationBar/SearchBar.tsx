// react libraries
import * as React from 'react';

/**
 * @desc
 */
class SearchBar extends React.Component<any> {

  /**
   * @desc
   */
  public render() {
    const {
      onSubmit,
      onChange,
      initialValue,
    }: any = this.props;

    return (
      <form
        className='main-search-bar'
        onSubmit={onSubmit}
      >
        <label htmlFor="search-bar">
          <input
            className='search-field'
            type="text"
            placeholder="Search...."
            onChange={onChange}
            value={initialValue}
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
