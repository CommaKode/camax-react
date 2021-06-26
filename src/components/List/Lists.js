import React from 'react';
import NavList from './List';
import MenuItems from '../NavBar/MenuItems';
import './Lists.scss';

const Lists = () => {
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

export default Lists;
