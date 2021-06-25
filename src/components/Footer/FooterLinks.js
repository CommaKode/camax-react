import React from 'react';
import FooterListItems from './FooterListItems';
import FooterLink from './FooterLink';

const FooterLinks = () => {
  return (
    <div className={`footer-links`}>
      {FooterListItems.map((item) => (
        <FooterLink title={item.title} options={item.options} />
      ))}
    </div>
  );
};

export default FooterLinks;
