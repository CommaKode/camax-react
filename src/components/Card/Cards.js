import React from 'react';
import Card from './Card';
import product from './ShopCardList';

const Cards = () => {
  return (
    <div className="cards">
      {product.map((item, index) => {
        return (
          <Card
            title={item.title}
            price={item.price}
            image={item.image}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Cards;
