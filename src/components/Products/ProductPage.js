import React from 'react';
import './Products.scss';
import ProductGrid from './ProductGrid';
import Filters from '../Filter/Filters';
import MonitorItems from '../Detail-Lists/Monitor';
import HomePageCar from '../Carousel/HomePageCar';

const ProductPage = (props) => {
  const { variant, ...rest } = props;
  return (
    <>
      <div className="product-page" {...rest}>
        <main className="product-main">
          <Filters />
          <ProductGrid panels={MonitorItems} />
        </main>
        <HomePageCar />
      </div>
    </>
  );
};

export default ProductPage;
