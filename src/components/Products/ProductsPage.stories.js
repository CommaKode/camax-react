import { Component } from "react";
import ProductPage from './ProductPage'


export default {
    title : 'Pages/Products/Products',
    Component: ProductPage
}


const Template = (args) =>  <ProductPage {...args}/>

export const Page = Template.bind({});

Page.args = {
    variant: 'product-page',
}



