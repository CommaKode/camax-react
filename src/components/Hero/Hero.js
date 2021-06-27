import React from 'react';
import heroImg from '../../Images/heroPic.png';
import './Hero.scss';
import Button from '../Buttons/Button';
import { ReactComponent as ServIcon } from '../../Images/icons/sevices.svg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container container">
        <img className="hero-img" src={heroImg} alt="ایفون تصویری کامکث" />
        <div className="hero-title">
          <span>
            <h1 className="doorphone">ایفون تصویری&nbsp;</h1>
            <h1 className="camax">کامکث</h1>
          </span>
          <h2 className="lighting">و لوازم روشنایی</h2>
        </div>
        <Button title="خرید محصول" variant="btn-primary" />
        <Button
          title="خدمات پس از فروش"
          variant="btn-secondary"
          Icon={ServIcon}
        />
      </div>
    </div>
  );
};

export default Hero;
