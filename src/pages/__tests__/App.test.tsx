// react libraries
import * as React from 'react';

// third-party libraries
import { expect } from 'chai';
import { shallow } from 'enzyme';


// component
import App from '../App';

// test suite
describe('App Component', () => {
  const wrapper = shallow(<App />);
  it('should render the navigation bar', () => {
    expect(wrapper.find('.main-container')).to.have.lengthOf(1);
  })
})
