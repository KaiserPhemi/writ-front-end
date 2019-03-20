// react libraries
import * as React from 'react';

// third-party libraries
import { expect } from 'chai';
import { shallow } from 'enzyme';

// component
import SearchBar from '../SearchBar';

// test suite
describe('Search Bar component', () => {
  const wrapper = shallow(<SearchBar />);

  it('should contain a form element', () => {
    expect(wrapper.find('.main-search-bar')).to.have.lengthOf(1);
  });

  it('should contain a form element', () => { });
  it('should contain a form element', () => { });
  it('should contain a form element', () => { });
});
