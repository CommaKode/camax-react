import React from 'react';
import location from '../../Images/icons/location.svg';
import phone from '../../Images/icons/phone.svg';
import instagram from '../../Images/icons/insta.svg';
import Tooltip from '../Tooltip/Tooltip';

const FooterAddress = () => {
  return (
    <div className="footer-address">
      <div className="footer-icons">
        <span>
          <img src={location} alt="location" />
        </span>
        <span>
          <img src={phone} alt="phone" />
        </span>
        <span>
          <img src={instagram} alt="instagram" />
        </span>
      </div>
      <div className="footer-texts">
        <span>آدرس فلان</span>
        <Tooltip cName="ltr" text="+98 21 768876876" />
        <span className="ltr">@Camax</span>
      </div>
    </div>
  );
};

export default FooterAddress;
