import React from 'react';
import Button from '../Buttons/Button';
import { ReactComponent as Icon } from '../../Images/icons/buyCart.svg';

const Suggestion = (props) => {
  const { title, image, price } = props;
  return (
    <div className="sugg-container container">
      <div className="sugg-detail">
        <span>مشخصات :</span>
        <ul>
          <li>
            <span>پنل لمسی</span>
          </li>
          <li>
            <span>پنل لمسی</span>
          </li>
          <li>
            <span>پنل لمسی</span>
          </li>
          <li>
            <span>پنل لمسی</span>
          </li>
        </ul>
      </div>
      <img className="sugg-img" src={image} alt="CDV-43D" />
      <div className="sugg-info">
        <span className="sugg-title">{title}</span>
        <span className="sugg-price">{price} تومان</span>
        <Button title="خرید محصول" Icon={Icon} variant="btn-primary" />
      </div>
    </div>
  );
};

export default Suggestion;
