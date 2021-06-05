import React from 'react';
import { Link } from 'react-router-dom';

import menu from '../../Images/icons/hambergurMenu.svg';
import logo from '../../Images/icons/logo.svg';
import cartVector from '../../Images/icons/cart.svg';

const TopNavMobile = () => {
  return (
    <div className="nav-top-mobile">
      <button>
        <img src={menu} alt="menu" />
      </button>
      <img src={logo} alt="camax" />
      <Link to="/cart">
        <img src={cartVector} alt="cart" to="/cart" />
      </Link>
    </div>
  );
};

export default TopNavMobile;
