import React from 'react';
import './InfoCard.scss';

const AboutUsCard = (props) => {
  const { Image, title, txt, ...rest } = props;
  return (
    <div className="info-card" {...rest}>
      <span>
        <Image />
      </span>
      <h4>{title}</h4>
      <p>{txt}</p>
    </div>
  );
};

export default AboutUsCard;
