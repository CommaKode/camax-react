import React from "react";
import "./Products.scss";
import NavBar from "../NavBar/NavBar";
import ProductGrid from "./ProductGrid";
import Filters from "../Filter/Filters";
import Footer from "../Footer/Footer";
import MonitorItems from '../Detail-Lists/Monitor';


const ProductPage = (props) => {
  const { variant, ...rest } = props;
  return (
    <div className="product-page">
          <NavBar />
          <main className="product-main">
          <Filters />
          <ProductGrid panels={MonitorItems} />
          </main>
        <Footer span={24}/>
    </div>
  );
};

export default ProductPage;
