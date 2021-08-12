<<<<<<< HEAD:src/components/Products/ProductsPage.js
import React from "react";
import "./Products.scss";
import Nav from "../NavBar/Nav";
import ProductGrid from "./ProductsGrid";
import Filters from "../Filter/Filters";
import Footer from "../Footer/Footer";
import MonitorItems from '../Detail-Lists/Monitor';
import HomePageCar from '../Carousel/HomePageCar';



const ProductsPage = (props) => {
  const { variant, ...rest } = props;
  return (
   <>
    <div className="product-page" {...rest}>
      <Nav />
          <main className="product-main">
=======
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
>>>>>>> 416aca00c5e52c29a8a555e4625cc11d44b6ae10:src/components/Products/ProductPage.js
          <Filters />
          <ProductGrid panels={MonitorItems} />
        </main>
        <HomePageCar />
      </div>
    </>
  );
};

export default ProductsPage;
