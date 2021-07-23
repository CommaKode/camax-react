import React from 'react';
import './Carousel.scss';

const Carousel = (props) => {
  const { carImg, carAlt, ...rest } = props;
  return (
    <div className="carousel-container" {...rest}>
      <div className="carousel"></div>
      <img src={carImg} alt={carAlt} />
    </div>
  );
};

export default Carousel;
