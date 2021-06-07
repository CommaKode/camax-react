import { Link } from 'react-router-dom';
import ToggleList from './ToggleList';

import MobileSearch from './MobileSearch';

const NavMobilLinks = () => {
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
          <ToggleList title="خدمات پس از فروش">
            <li>
              <Link to="/services/info">شرح خدمات</Link>
            </li>
            <li>
              <Link to="/services/request">درخواست خدمات</Link>
            </li>
          </ToggleList>
        </li>
        <li>
          <ToggleList title="محصولات">
            <li>
              <Link to="monitor">مونیتور</Link>
            </li>
            <li>
              <Link to="panel">پنل</Link>
            </li>
            <li>
              <Link to="accesories">لوازم جانبی</Link>
            </li>
          </ToggleList>
        </li>
        <li>
          <Link to="/lighting">روشنایی</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobilLinks;
