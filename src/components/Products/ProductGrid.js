import React from "react";
import "./Products.scss";
import Card from "../Card/Card";

const ProductGrid = (props) => {
  const { panels, ...rest } = props;
  // const [Filtered, setFiltered] = useState([])
  console.log(panels, "in gird");
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
      ))} */
      }
      {
        // panels.filter
      }

    
    </section>
  );
};

export default ProductGrid;
