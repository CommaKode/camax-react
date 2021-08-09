import React from 'react';
import NavBar from './NavBar';
import DesktopNav from './DesktopNav/DesktopNav';

const Nav = () => {
  return (
    <React.Fragment>
      <NavBar />
      <DesktopNav />
    </React.Fragment>
  );
};

export default Nav;
