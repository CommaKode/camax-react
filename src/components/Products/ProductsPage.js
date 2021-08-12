import React from 'react';
import './Products.scss';
import ProductsGrid from './ProductsGrid';
import Filters from '../Filter/Filters';
import MonitorItems from '../Detail-Lists/Monitor';
import HomePageCar from '../Carousel/HomePageCar';

const ProductsPage = (props) => {
  const { variant, ...rest } = props;
  return (
    <>
      <div className="product-page" {...rest}>
        <main className="product-main">
          <Filters />
          <ProductsGrid panels={MonitorItems} />
        </main>
        <HomePageCar />
      </div>
    </>
  );
};

export default ProductsPage;
