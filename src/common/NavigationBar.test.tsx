// react libraries
import * as  React from 'react';

// third party 
import { createMockStore } from 'redux-test-utils';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

// component
import { NavigationBar } from './NavigationBar.component';

// configure enzyme for react@16
configure({ adapter: new Adapter() });

describe('<NavigationBar />', () => {
  const wrapper = shallow(<NavigationBar />);
    // it('should contain naviation bar DOM elements', () => {
  //   const wrapper = setup();
  //   expect(wrapper.find('header')).toExist();
  //   expect(wrapper.find('nav')).toExist();
    //   expect(wrapper.find('div')).toExist();
    // });

  // it('should contain props', () => {
  //   const wrapper = setup();
  //   expect(wrapper.props('logout')).toExist();
  //   expect(wrapper.props('auth')).toExist();
  // });

  // it('should contain links', () => {
  //   const wrapper = setup();
  //   expect(wrapper.find('Link').length).toBe(10);
  //   expect(wrapper.find('span').length).toBe(2);
  // });
});
