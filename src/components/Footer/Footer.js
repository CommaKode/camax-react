import React from 'react';
import './Footer.scss';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className={`page-footer`}>
      <FooterLinks />
    </footer>
  );
};

export default Footer;
