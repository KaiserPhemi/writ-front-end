// react libraries
import * as React from 'react';

// third-party libraries
import { expect } from 'chai';
import { shallow } from 'enzyme';

// component
import App from '../App';
import NavigationBar from '../../components/general/navigationBar/NavigationBar';
import Root from '../../routes/routes';

// test suite
describe('App Component', () => {
  const wrapper = shallow(<App />);
  const store = {};

  it('should render the main container', () => {
    expect(wrapper.find('.main-container')).to.have.lengthOf(1);
  });

  it('should contain the navigation bar component', () => {
    expect(wrapper.contains(<NavigationBar />)).to.be.true;
  });

  it('should contain the root component', () => {
    expect(wrapper.contains(<Root store={store} />)).to.exist;
  });

  it('should render the content within the main container', () => {
    expect(wrapper.find('.main-body-container')).to.have.lengthOf(1);
  });
});
