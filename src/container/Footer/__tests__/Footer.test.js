import React from 'react';
import { shallow } from 'enzyme';

import Footer from 'container/Footer/Footer';

describe('<Footer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
