import React from 'react';
import './Headeing.scss';

const Heading = (props) => {
  const { title, heading, ...rest } = props;
  return (
    <h1 className="heading" {...rest}>
      {title}
      <span>{heading}</span>
    </h1>
  );
};

export default Heading;
