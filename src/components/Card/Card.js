import React from "react";
import Button from "../Buttons/Button";
import "./Card.scss";
import { ReactComponent as buyIcon } from "../../Images/icons/buyCart.svg";
import {Link} from 'react-router-dom'

const Card = (props) => {
  const { variant, title, price, image,id, ...rest } = props;
  
  return (
    <>
      <Link to={`product-${id}`} >
        <div className={`card ${variant}`} {...rest}>
          <img src={image} alt="pic" />
          <span className="title">{title.toUpperCase()}</span>
          <span className="price">{price} تومان</span>
          <Button variant="btn-card button" title="خرید کالا" Icon={buyIcon} />
        </div>
      </Link>
    </>
  );
};

export default Card;
