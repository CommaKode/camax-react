import React, { useEffect } from 'react';
import Search from './Search/Search';
import MobileSignBtn from './MobileSignButton/MobileSignBtn';
import Lists from '../List/Lists';
import MenuItems from './MenuItems';

const NavMenu = (props) => {
  const { list, clk, isClicked, ...rest } = props;

  useEffect(() => {
    if (isClicked === 'clicked') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isClicked]);

  return (
    <div className={`nav-menu ` + list} {...rest}>
      <div className="container">
        <Search variant="search-mobile" />
        <Lists items={MenuItems} clk={clk} />
        <MobileSignBtn title="ورود به حساب کاربری" />
        <a className="signup-btn" href="/signup">
          حساب کاربری ندارم
        </a>
      </div>
    </div>
  );
};

export default NavMenu;
