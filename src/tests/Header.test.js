import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header.component';

describe('Header component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Header />);
    console.log(wrapper);
    expect(wrapper.find('h1')).toBeTruthy();
  });
});
