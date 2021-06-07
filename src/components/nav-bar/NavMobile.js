import React from 'react';
import MobileSearch from './MobileSearch';
import MobileNavLinks from './MobileNavLinks';
import MobileTopNav from './MobileTopNav';

const Nav = () => {
  return (
    <React.Fragment>
      <MobileTopNav />
      <MobileSearch />
      <MobileNavLinks />
    </React.Fragment>
  );
};

export default Nav;
