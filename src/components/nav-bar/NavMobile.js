import React, { useState } from 'react';
import MobileNavLinks from './MobileNavLinks';
import MobileTopNav from './MobileTopNav';

const NavMobile = () => {
  const [menu, setMenu] = useState('list-off');
  const toggleMenu = () => {
    switch (menu) {
      case 'list-off':
        setMenu('');
        break;
      default:
        setMenu('list-off');
        break;
    }
  };
  return (
    <React.Fragment>
      <MobileTopNav btn={toggleMenu} />
      <MobileNavLinks menu={menu} />
    </React.Fragment>
  );
};

export default NavMobile;
