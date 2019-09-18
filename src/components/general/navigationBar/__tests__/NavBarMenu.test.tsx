// react libraries
import * as React from 'react';

// third-party libraries
import { expect } from 'chai';
import { shallow } from 'enzyme';

// components
import NavBarMenu from '../NavBarMenu';

// test suites
describe('NavBarMenu component', () => {
  const wrapper = shallow(<NavBarMenu />);

  it('should render component', () => {
    expect(wrapper.find('.main-menu-list')).to.exist;
  });
});
