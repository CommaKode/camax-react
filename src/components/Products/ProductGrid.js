import React from "react";
import "./Products.scss";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ProductGrid = (props) => {
  const { panels, ...rest } = props;
  // const [Filtered, setFiltered] = useState([])
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  console.log(filters);
  const [newList, setnewList] = useState([]);
  
  useEffect(() => {
    for (let index = 0; index < filters.length; index++) {
      setnewList(() => {
        newList = panels.filter(() => {
          return panels.filters[index] === true;
        });
      });
    }
  }, [filters]);
  return (
    <section className="product-grid">
      {/* {panels.map((panel, index) => (
            <Card
              title={panel.name}
              price={panel.price}
              key={index}
              variant={"Shop"}
              image={panel.image}
            />
      ))} */}
    </section>
  );
};

export default ProductGrid;
