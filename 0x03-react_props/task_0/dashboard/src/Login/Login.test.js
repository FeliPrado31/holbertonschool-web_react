import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

describe('<Login />', () => {
  it('Login renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
  });
  it('verify that App renders a div with the class login', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('div.login')).toHaveLength(1);
  });
});
