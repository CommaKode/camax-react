import React from 'react';
import NavList from './NavList';
import MenuItems from './MenuItems';
import Search from './Search/Search';

const NavLists = () => {
  return (
    <div className="nav-list-container">
      <ul className="nav-list container">
        <Search />
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
    </div>
  );
};

export default NavLists;
