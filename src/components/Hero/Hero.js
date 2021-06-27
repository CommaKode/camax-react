import React from 'react';
import heroImg from '../../Images/heroPic.png';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container container">
        <img className="hero-img" src={heroImg} alt="ایفون تصویری کامکث" />
        <div className="hero-title">
          <span>
            <h1> ایفون تصویری</h1>
            <h1>کامکث</h1>
          </span>
          <h2>و لوازم روشنایی</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
