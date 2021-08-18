import React from 'react';
import './ProductImg.scss';


 const ProductImg = (props) => {


     const {image,...rest} = props;


    return (
        <div className={"product-img"} {...rest}>
        <img src={image} alt="Product"/>
        </div>
    )
}

export default ProductImg;