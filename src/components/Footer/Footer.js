import React from 'react';
import './Footer.scss';
import Lists from '../List/Lists';
import FooterItems from './FooterItems';

const Footer = () => {
  return (
    <footer className={`page-footer`}>
      <div className="container">
        <Lists items={FooterItems} />
      </div>
    </footer>
  );
};

export default Footer;
