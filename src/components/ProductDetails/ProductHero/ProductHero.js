import React from 'react';
import './hero.scss';
import ProductActions from './ProductActions/ProductActions';
import ProductBanner from './ProductBanner/ProductBanner';
import ProductFeatures from './ProductFeatures/ProductFeatures';
import ProductImg from './ProductImg/ProductImg';


const ProductHero = (props) => {
    const {list}=props;
    console.log(list.features.sd)
    return (
        <div className="p-hero">
            <div className={"p-location"}></div>
            <ProductBanner title={list.name} price={list.price}/>
            <ProductImg image={list.image}/>
            <ProductFeatures features={list.features} />
            <ProductActions/>
        </div>
    )
}

export default ProductHero;