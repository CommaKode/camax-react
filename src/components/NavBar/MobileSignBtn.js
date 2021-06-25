import React from 'react';
import './MobileSignBtn.scss';

const MobileSignBtn = (props) => {
  const { title } = props;
  return (
    <button className="mobile-sign-btn">
      <span>{title}</span>
    </button>
  );
};

export default MobileSignBtn;
