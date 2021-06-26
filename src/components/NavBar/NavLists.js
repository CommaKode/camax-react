import React from 'react';
import NavList from './NavList';
import MenuItems from './MenuItems';
import './NavList.scss';

const NavLists = () => {
  return (
    <ul className="nav-list">
      {MenuItems.map((item, index) => (
        <NavList
          url={item.url}
          cName={item.cName}
          title={item.title}
          options={item.options}
          key={index}
        />
      ))}
    </ul>
  );
};

export default NavLists;
