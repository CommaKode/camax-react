import React, { useState } from 'react';
import MobileNavLinks from './MobileNavLinks';
import MobileTopNav from './MobileTopNav';

const NavMobile = () => {
  const [menu, setMenu] = useState('list-off');
  const [bg, setBg] = useState('bg-white');
  const [fill, setFill] = useState('svg-fill-black');

  const toggleMenu = () => {
    switch (menu) {
      case 'list-off':
        setMenu('');
        setBg('bg-black');
        setFill('svg-fill-white');
        break;
      default:
        setMenu('list-off');
        setBg('bg-white');
        setFill('svg-fill-black');
        break;
    }
  };
  return (
    <React.Fragment>
      <MobileTopNav fill={fill} bg={bg} btn={toggleMenu} />
      <MobileNavLinks menu={menu} />
    </React.Fragment>
  );
};

export default NavMobile;
