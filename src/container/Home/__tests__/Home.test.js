import React from 'react';
import { shallow } from 'enzyme';

import Home from 'container/Home/Home';

jest.mock('hooks/qs-hook');

describe('<Home />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
