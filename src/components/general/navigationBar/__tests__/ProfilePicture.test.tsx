// react libraries
import * as React from 'react';

// third-party libraries
import { expect } from 'chai';
import { shallow } from 'enzyme';

// components
import ProfilePicture from '../ProfilePicture';

// test suites
describe('Profile Picture component', () => {
  const wrapper = shallow(<ProfilePicture />);

  it('should render the component', () => {
    expect(wrapper.find('.main-display-picture')).to.exist;
  });

  // it('should render the component', () => { });
});
