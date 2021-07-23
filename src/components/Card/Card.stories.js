import React from 'react';
import Card from './Card';
import pic1 from '../../Images/Shop/CDV- GUARD.png';

export default {
  title: 'TOOLS/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Shop = Template.bind({});
Shop.args = {
  title: 'TDGSK-273',
  price: '20,000',
  image: pic1,
};
