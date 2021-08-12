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
          <Filters />
          <ProductGrid panels={MonitorItems} />
          </main>
          <HomePageCar />
        <Footer />
    </div>
   </>
  );
};

export default ProductsPage;
