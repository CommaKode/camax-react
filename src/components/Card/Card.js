import React from 'react';
import Button from '../Buttons/Button';
import './Card.scss';
import { ReactComponent as buyIcon } from '../../Images/icons/buyCart.svg';

const Card = (props) => {
  const { variant, title, price, image, key, ...rest } = props;
  const Upper = (string)=>{
    string.toUppercase()
    
  }
  console.log(image,"image")

  return (
    <div className={`card ${variant}`} {...rest} key={key}>
<<<<<<< HEAD
      <img src={`../../Images/Shop/${image}`} alt="pic" />
      <span>{title}</span>
      <span>{price} تومان</span>
      <Button variant="btn-card" title="خرید کالا" Icon={buyIcon} />
    
=======
      <img src={image} alt="pic" />
      <span className="title">{title}</span>
      <span className="price">{price} تومان</span>
      <Button variant="btn-card button" title="خرید کالا" Icon={buyIcon} />
>>>>>>> cc767f97dc9edf68fc73073eb6ccd5422136b40e
    </div>
  );
};

export default Card;
