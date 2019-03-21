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
    expect(wrapper.find('.main-search-bar')).to.have
      .lengthOf(1);
  });

  it('should contain a label DOM element', () => {
    expect(wrapper.contains(<label />)).to.exist;
  });

  it('should contain an input element', () => {
    expect(wrapper.contains(<input />)).to.exist;
  });

  it('should contain an span element', () => {
    expect(wrapper.contains(<span />)).to.exist;
  });

  it('should render search icon', () => {
    expect(wrapper.contains(<i />)).to.exist;
    expect(wrapper.find('.search-icon')).to.have
      .lengthOf(1);
  });
});
