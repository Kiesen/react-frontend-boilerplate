import React from 'react';
import { shallow } from 'enzyme';

import * as hooks from 'hooks/react-router-hooks';
import Navigation from 'container/Navigation/Navigation';

describe('<Navigation />', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useLocation').mockImplementation(() => ({
      navigate: jest.fn(),
    }));
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toMatchSnapshot();
  });
});
