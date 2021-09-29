import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Block from './Block';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { styles } from '../styles';

configure({ adapter: new Adapter() });

describe('Block/Block component', () => {
  it('<Block > has a table', () => {
    const wrapper = shallow(<Block styles={styles} />);
    expect(wrapper.html()).toContain('table');
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Block styles={styles} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const wrapper = create(<Block styles={styles}><h1>Block content</h1></Block>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});