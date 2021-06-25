import React from 'react';
import FooterListItems from './FooterListItems';
import FooterLink from './FooterLink';

const FooterLinks = () => {
  return (
    <div className={`footer-links`}>
      {FooterListItems.map((item, index) => (
        <FooterLink title={item.title} options={item.options} key={index} />
      ))}
    </div>
  );
};

export default FooterLinks;
