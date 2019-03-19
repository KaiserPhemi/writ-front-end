// dependencies
import { configure } from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

// configure enzyme instance
configure({ adapter: new EnzymeAdapter() });
