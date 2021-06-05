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
          <ul></ul>
        </li>
        <li>
          <button>
            <span>محصولات</span>
          </button>
        </li>
        <li>
          <Link to="/lighting">روشنایی</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobilLinks;
