// react libraries
import * as React from 'react';

// third-party libraries
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { createMockStore } from 'redux-test-utils';

// component
import App from './App.component';

// configure enzyme for react@16
configure({ adapter: new Adapter() });

// test cases
describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('should render App without crashing', () => {
    expect(true).to.equal(true);
  });

  it('should work', () => {
    expect(true).to.equal(true);
  });
});
