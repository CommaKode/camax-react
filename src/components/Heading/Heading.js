import React from 'react';
import './Headeing.scss';

const Heading = (props) => {
  const { title, ...rest } = props;
  return (
    <h1 className="heading" {...rest}>
      {title}
      <span>کامکث</span>
    </h1>
  );
};

export default Heading;
