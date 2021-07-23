import React from 'react';
import Button from '../Buttons/Button';
import './Card.scss';
import { ReactComponent as buyIcon } from '../../Images/icons/buyCart.svg';

const Card = (props) => {
  const { variant, title, price, image, key, ...rest } = props;
  const url = "../../Images/Shop/"+ image.toUpperCase() +".png";

  return (
    <div className={`card ${variant}`} {...rest} key={key}>
      <img src={url} alt="pic" />
      <span className="title">{title.toUpperCase()}</span>
      <span className="price">{price} تومان</span>
      <Button variant="btn-card button" title="خرید کالا" Icon={buyIcon} />
      
    </div>
  );
};

export default Card;
