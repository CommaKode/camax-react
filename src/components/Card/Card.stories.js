<<<<<<< HEAD
import { Component } from "react";
import Card from './Card'
import   win from '../../Images/Shop/CDV-43WIN.png';


export default {
    title : 'Cards/ShopCard',
    Component: Card
}
=======
import React from 'react';
import Card from './Card';

export default {
  title: 'TOOLS/Card',
  component: Card,
};
>>>>>>> bcc92e3f17151b6dfd495537cc7f6f2f5cc07744

const Template = (args) => <Card {...args} />;

<<<<<<< HEAD
const Template = (args) =>  <Card {...args}/>

export const ShopCard = Template.bind({});

ShopCard.args = {
    name : "43Win",
    price :'1000000',
    variant:"shop-card",
    src:win
}

=======
export const Shop = Template.bind({});
Shop.args = {
  title: 'TDGSK-273',
  price: '20000',
  image: '../../Images/Shop/CDV- GUARD.png',
};
>>>>>>> bcc92e3f17151b6dfd495537cc7f6f2f5cc07744
