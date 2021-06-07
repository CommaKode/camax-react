import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import arrow from '../../Images/icons/arrow.svg';

import MobileSearch from './MobileSearch';

const NavMobilLinks = () => {
  const [toggle, setToggle] = useState('h0');

  const toggling = () => {
    switch (toggle) {
      case 'h0':
        setToggle('h100');
        break;
      case 'h100':
        setToggle('h0');
        break;
      default:
        return toggle;
    }
  };
  return (
    <div className="container mobile-nav-links">
      <MobileSearch />
      <ul className="links">
        <li>
          <Link to="/">خانه</Link>
        </li>
        <li>
          <Link to="/contact-us">تماس با ما</Link>
        </li>
        <li>
          <button onClick={toggling}>
            <img src={arrow} alt="arrow" />
            <span>خدمات پس از فروش</span>
          </button>
          <ul className={toggle}>
            <li>
              <Link to="/services/info">شرح خدمات</Link>
            </li>
            <li>
              <Link to="/services/request">درخواست خدمات</Link>
            </li>
          </ul>
        </li>
        <li>
          <button onClick={toggling}>
            <img src={arrow} alt="arrow" />
            <span>محصولات</span>
          </button>
          <ul className={toggle}>
            <li>
              <Link to="monitor">مونیتور</Link>
            </li>
            <li>
              <Link to="panel">پنل</Link>
            </li>
            <li>
              <Link to="accesories">لوازم جانبی</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/lighting">روشنایی</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobilLinks;
