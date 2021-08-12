import React from "react";
import "./Products.scss";
import Card from "../Card/Card";

const ProductsGrid = (props) => {
  const { panels, ...rest } = props;

  return (
    <>
      <section className="product-grid" {...rest}>
        {panels.map((panel, index) => (
          <Card
            title={panel.name}
            price={panel.price}
            key={index}
            variant={"Shop"}
            image={panel.image}
          />
        ))}
      </section>
    </>
  );
};

export default ProductsGrid;
