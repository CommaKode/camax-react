import React, { useState } from 'react';
import arrow from '../../Images/icons/arrow.svg';

const ToggleList = ({ title, children }) => {
  const [toggle, setToggle] = useState('list-off');
  const [rotate, setRotate] = useState('');
  const toggling = () => {
    switch (toggle) {
      case 'list-off':
        setToggle('list-on');
        setRotate('r0');
        break;
      default:
        setToggle('list-off');
        setRotate('');
    }
  };

  return (
    <React.Fragment>
      <button onClick={toggling}>
        <img src={arrow} alt="arrow" className={rotate} />
        <span>{title}</span>
      </button>
      <ul className={toggle}>{children}</ul>
    </React.Fragment>
  );
};

export default ToggleList;
