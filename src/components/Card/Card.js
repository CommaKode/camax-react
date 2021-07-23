import React from 'react';
import Button from '../Buttons/Button';
import './Card.scss';
import { ReactComponent as buyIcon } from '../../Images/icons/buyCart.svg';

const Card = (props) => {
  const { variant, title, price, image, key, ...rest } = props;

  return (
    <div className={`card ${variant}`} {...rest} key={key}>
      <img src={image} alt="pic" />
      <span>{title}</span>
      <span>{price} تومان</span>
      <Button variant="btn-card" title="خرید کالا" Icon={buyIcon} />
    </div>
  );
};

export default Card;
