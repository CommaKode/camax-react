import { Component } from "react";
import Card from './Card'
import   win from '../../Images/Shop/CDV-43WIN.png';


export default {
    title : 'Cards/ShopCard',
    Component: Card
}


const Template = (args) =>  <Card {...args}/>

export const ShopCard = Template.bind({});

ShopCard.args = {
    name : "43Win",
    price :'1000000',
    variant:"shop-card",
    src:win
}

