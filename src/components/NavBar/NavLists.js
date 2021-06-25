import React from 'react';
import NavList from './NavList';
import MenuItems from './MenuItems';
import Search from './Search/Search';
import MobileSignBtn from './MobileSignBtn';

const NavLists = (props) => {
  const { list, ...rest } = props;
  return (
    <div className={`nav-list-container ` + list} {...rest}>
      <ul className="nav-list container">
        <Search variant="search-mobile" />
        {MenuItems.map((item, index) => (
          <NavList
            url={item.url}
            cName={item.cName}
            title={item.title}
            options={item.options}
            key={index}
          />
        ))}
        <MobileSignBtn title="ورود به حساب کاربری" />
        <a className="signup-btn" href="/signup">
          حساب کاربری ندارم
        </a>
      </ul>
    </div>
  );
};

export default NavLists;
