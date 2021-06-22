import React from 'react';

import './NavBar.scss';
import logo from '../../Images/icons/logo.svg';
import cart from '../../Images/icons/nav-cart.svg';
import hamMenu from '../../Images/icons/hambergurMenu.svg';

import NavList from './NavLists';

const NavBar = (props) => {
  const { variant, ...rest } = props;
  return (
    <nav className={`navbar ` + variant} {...rest}>
      <a href="/cart" className="nav-logo">
        <img src={cart} alt="cart" />
      </a>
      <a href="/home" className="nav-cart">
        <img src={logo} alt="camax" />
      </a>
      <button className="nav-menu">
        <img src={hamMenu} alt="menu" />
      </button>
      <NavList />
    </nav>
  );
};

export default NavBar;
