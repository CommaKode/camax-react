import React from 'react';
import Card from './Card';

export default {
  title: 'TOOLS/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Shop = Template.bind({});
Shop.args = {
  title: 'TDGSK-273',
  price: '20000',
  image: '../../Images/Shop/CDV- GUARD.png',
};
