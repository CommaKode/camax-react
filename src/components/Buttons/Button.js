import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { title, Icon, variant, ...rest } = props;
  return (
    <button className={`btn ${variant}`} {...rest}>
      <span>{title}</span>
      {Icon ? (
        <span className="btn-icon">
          <Icon />
        </span>
      ) : undefined}
    </button>
  );
};

export default Button;
