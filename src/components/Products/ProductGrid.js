import React from "react";
import "./Products.scss";
import { Row, Col } from "antd";
import Card from "../Card/Card";

const ProductGrid = (props) => {
  const { panels, ...rest } = props;
  console.log(panels, "in gird");
  return (
    <section className="product-grid">
      {panels.map((panel, index) => (
            <Card
              title={panel.name}
              price={panel.price}
              key={index}
              variant={"shop-card"}
              image={panel.name}
            />
      ))}
        {/* <Row gutter={16}>
          <Col span={6}>
          </Col>
        </Row> */}
    </section>
  );
};

export default ProductGrid;
