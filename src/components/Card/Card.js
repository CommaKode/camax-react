<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
import Button from "../Buttons/Button";
import { ReactComponent as CartIcon } from "../../Images/icons/buyCart.svg";
import "./Card.scss";

const Card = (props) => {
  const { name, price, variant, ...rest } = props;
  
  return (
    <div className={variant}>
      {/* <img src={(src)} alt={name} /> */}
      <span>{name}</span>
      <span>{price} ریال</span>
      <Button title="خرید کالا" variant="btn-card" Icon={CartIcon}></Button>
      {console.log(name,"in card")}
    </div>
  );
};

=======
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

>>>>>>> bcc92e3f17151b6dfd495537cc7f6f2f5cc07744
export default Card;
