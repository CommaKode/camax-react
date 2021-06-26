import React from 'react';
import Search from './Search/Search';
import MobileSignBtn from './MobileSignBtn';
import Lists from '../List/Lists';
import MenuItems from './MenuItems';

const NavMenu = (props) => {
  const { list, ...rest } = props;
  return (
    <div className={`nav-menu ` + list} {...rest}>
      <div className="container">
        <Search variant="search-mobile" />
        <Lists items={MenuItems} />
        <MobileSignBtn title="ورود به حساب کاربری" />
        <div className="signup">
          <a className="signup-btn" href="/signup">
            حساب کاربری ندارم
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
