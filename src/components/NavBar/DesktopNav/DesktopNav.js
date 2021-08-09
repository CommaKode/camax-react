import React from 'react';
import './DeskopNav.scss';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../Images/icons/logo.svg';
import { ReactComponent as Cart } from '../../../Images/icons/cart.svg';
import { ReactComponent as Profile } from '../../../Images/icons/profile.svg';

import Search from '../Search/Search';
import DesktopNavLinks from './DesktopNavLinks';

const DesktopNav = (props) => {
  return (
    <div className="desktop-nav container">
      <div className="desk-nav-top">
        <Link to="/">
          <Logo className="d-logo" />
        </Link>
        <div className="nav-icons">
          <Search />
          <Link className="nav-d-prof" to="/profile">
            <Profile />
          </Link>
          <Link className="nav-d-cart" to="/cart">
            <Cart />
          </Link>
        </div>
      </div>
      <DesktopNavLinks />
    </div>
  );
};

export default DesktopNav;
