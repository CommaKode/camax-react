import React from "react";
import PropTypes from "prop-types";
import Button from "../Buttons/Button";
import { ReactComponent as CartIcon } from "../../Images/icons/buyCart.svg";
import "./Card.scss";

const Card = (props) => {
  const { name, price, variant, src, ...rest } = props;
  return (
    <div className={variant}>
      <img src={(src)} alt={name} />
      <span>{name}</span>
      <span>{price} ریال</span>
      <Button title="خرید کالا" variant="btn-card" Icon={CartIcon}></Button>
    </div>
  );
};

export default Card;
