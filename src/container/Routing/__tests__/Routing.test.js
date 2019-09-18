import React from 'react';
import { shallow } from 'enzyme';

import Routing from 'container/Routing/Routing';

describe('<Routing />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Routing />);
    expect(wrapper).toMatchSnapshot();
  });
});
