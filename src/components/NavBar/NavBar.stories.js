import React from 'react';
import NavBar from './NavBar';

export default {
  title: 'NavBar/NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
