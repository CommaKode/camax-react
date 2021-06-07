import React from 'react';
import { Link } from 'react-router-dom';

const NavMobilLinks = () => {
  return (
    <div className="nav-links">
      <ul>
        <li>
          <Link to="/">خانه</Link>
        </li>
        <li>
          <Link to="/contact-us">تماس با ما</Link>
        </li>
        <li>
          <button>
            <span>خدمات پس از فروش</span>
          </button>
          <ul>
            <li>
              <Link to="/services/info">شرح خدمات</Link>
            </li>
            <li>
              <Link to="/services/request">درخواست خدمات</Link>
            </li>
          </ul>
        </li>
        <li>
          <button>
            <span>محصولات</span>
          </button>
          <ul>
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
