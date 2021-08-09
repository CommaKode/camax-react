import React from 'react';
import './DeskopNav.scss';
import { Link } from 'react-router-dom';
import MenuItems from '../MenuItems';
import { ReactComponent as Arrow } from '../../../Images/icons/arrow.svg';

const DesktopNavLinks = () => {
  return (
    <div className="desk-nav-links">
      <ul>
        {MenuItems.map((item, index) => {
          return item.options ? (
            <li className="desk-main-links" key={index}>
              <Link to={item.url}>
                <span>{item.title}</span>
                <Arrow />
              </Link>
              <div className="desk-sub-links-box">
                <ul className="desk-sub-links">
                  {item.options.map((opt, index) => {
                    return (
                      <li key={index}>
                        <Link to={opt.url}>{opt.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          ) : (
            <li className="desk-main-link" key={index}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopNavLinks;
