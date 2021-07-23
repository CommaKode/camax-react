import React from "react";
import "./Products.scss";
import { Row, Col } from "antd";
import Card from '../Card/Card';

const ProductGrid = (props) => {
    const {panels,...rest}=props
  return (
    <main className="product-grid">
      {/* <Row gutter={2}> */}
        {/* <Col span={1}> */}
            {panels.map((panel, index)=>{
                <Card
                name={panel.name}
                price={panel.price}
                key={index}
                variant={"shop-card"}
                />
            })}
        {/* </Col> */}
      {/* </Row> */}
    </main>
  );
};

export default ProductGrid;
