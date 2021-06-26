import React from 'react';
import './Footer.scss';
import Links from '../List/Lists';
import FooterItems from './FooterItems';

const Footer = () => {
  return (
    <footer className={`page-footer`}>
      <div className="container">
        <Links items={FooterItems} />
      </div>
    </footer>
  );
};

export default Footer;
