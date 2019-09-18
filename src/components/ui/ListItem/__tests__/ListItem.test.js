import React from 'react';
import { shallow } from 'enzyme';

import ListItem from 'components/ui/ListItem/ListItem';

describe('<ListItem>', () => {
  // ListItem has item as a required prop!
  const item = {};

  it('renders correctly', () => {
    const wrapper = shallow(<ListItem item={item} />);
    expect(wrapper).toMatchSnapshot();
  });
});
