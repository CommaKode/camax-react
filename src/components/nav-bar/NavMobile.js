import React from 'react';
import TopNavMobile from './TopNavMobile';
import SearchMobile from './SearchMobile';
import NavMobilLinks from './NavMobilLinks';

const Nav = () => {
  return (
    <React.Fragment>
      <TopNavMobile />
      <SearchMobile />
      <NavMobilLinks />
    </React.Fragment>
  );
};

export default Nav;
