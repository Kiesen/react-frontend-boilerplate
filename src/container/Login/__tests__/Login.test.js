import React from 'react';
import { shallow } from 'enzyme';
import * as hooks from 'hooks/react-router-hooks';

import Login from 'container/Login/Login';

describe('<Login />', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useLocation').mockImplementation(() => ({
      navigate: jest.fn(),
    }));
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
