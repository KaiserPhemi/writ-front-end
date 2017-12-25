// react libraries
import * as React from 'react';

// third-party libraries
import { Icon, Input } from 'material-ui';

// interface
import { ISearchBoxProps } from '../../interfaces/searchBox';

/**
 * 
 * @param param0 
 */
const SearchBox: React.SFC<any> = ({ onChange }) =>{
  return(
    <div>
      <Input
        id="search"
        s={6}
        label="Search"
        onChange={onChange}
        validate
        className="search"
      >
        <Icon>search</Icon>
      </Input>
    </div>
  );
};

export default SearchBox;
