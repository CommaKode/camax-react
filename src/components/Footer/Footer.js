import React from 'react';
import './Footer.scss';
import Lists from '../List/Lists';
import FooterItems from './FooterItems';
import FooterAddress from './FooterAddress';
import CopyRight from './CopyRight';
import logo from '../../Images/icons/logo.svg';

const Footer = () => {
  return (
    <footer className={`page-footer`}>
      <Lists items={FooterItems} cName="container" />
      <FooterAddress />
      <div className="footer-logo">
        <img src={logo} alt="Camax" />
      </div>
      <CopyRight />
    </footer>
  );
};

export default Footer;
