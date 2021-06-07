import React from 'react';
import MobileNavLinks from './MobileNavLinks';
import MobileTopNav from './MobileTopNav';

const NavMobile = () => {
  return (
    <React.Fragment>
      <MobileTopNav />
      <MobileNavLinks />
    </React.Fragment>
  );
};

export default NavMobile;
