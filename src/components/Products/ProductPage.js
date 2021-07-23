import React from "react";
import "./Products.scss";
import NavBar from "../NavBar/NavBar";
import ProductGrid from "./ProductGrid";
import Filters from "./Filters";
import Footer from "../Footer/Footer";
import { Row, Col } from "antd";
import MonitorItems from './MonitorItems';


const ProductPage = (props) => {
  const { variant, ...rest } = props;
  return (
    <>
      {/* <Row >
        <Col span={24}>
          <NavBar />
        </Col>
      </Row>
      <Row >
        <Col span={18}> */}
          <ProductGrid panels={MonitorItems} />
        {/* </Col>
        <Col span={6}>
          <Filters />
        </Col>
      </Row>
      <Row>
        <Footer span={24}/>
      </Row> */}
    </>
  );
};

export default ProductPage;
