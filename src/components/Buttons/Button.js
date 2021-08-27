import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { title, Icon, url, variant, ...rest } = props;
  return url ? (
    <Link to={url} className={`btn ${variant}`} {...rest}>
      <span>{title}</span>
      {Icon ? (
        <span className="btn-icon">
          <Icon />
        </span>
      ) : undefined}
    </Link>
  ) : (
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
