import React from "react";
// import { useEffect, useState } from "react";
import "./Products.scss";
import Card from "../Card/Card";

const ProductsGrid = (props) => {
  const { panels, ...rest } = props;
  
  // const [panels, setpanels] = useState([]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((res) => {
  //       console.log(res);
  //      return setpanels(res)
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
  
 
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
            id={panel.id}
          />
        ))}
      
      </section>
    </>
  );
};

export default ProductsGrid;
