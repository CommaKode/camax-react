import React from 'react';
import heroImg from '../../Images/heroPic.png';
import './Hero.scss';
import Button from '../Buttons/Button';
import { ReactComponent as ServIcon } from '../../Images/icons/sevices.svg';

const Hero = (props) => {
  const { cName, ...rest } = props;
  return (
    <div className={'hero ' + cName} {...rest}>
      <div className="hero-container container">
        <img className="hero-img" src={heroImg} alt="ایفون تصویری کامکث" />
        <div className="hero-action">
          <div className="hero-title">
            <span>
              <h1 className="doorphone">ایفون تصویری&nbsp;</h1>
              <h1 className="camax">کامکث</h1>
            </span>
            <h2 className="lighting">و لوازم روشنایی</h2>
          </div>
          <div className="hero-btns">
            <Button title="خرید محصول" variant="btn-primary" />
            <Button
              title="خدمات پس از فروش"
              variant="btn-secondary"
              Icon={ServIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
