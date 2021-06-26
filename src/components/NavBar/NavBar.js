import React, { useState } from 'react';
import './NavBar.scss';
import HamButton from './HamButton/HamButton';
import NavMenu from './NavMenu';

const NavBar = (props) => {
  const { ...rest } = props;
  const [click, setClick] = useState('unClicked');
  const [cNames, setCNames] = useState({
    icons: 'icon-color-switch-uc',
    list: 'nav-list-uc',
  });
  const clickHandler = () => {
    switch (click) {
      case 'unClicked':
        setClick('clicked');
        setCNames({
          icons: 'icon-color-switch-c',
          list: 'nav-list-c',
        });
        break;
      default:
        setClick('unClicked');
        setCNames({
          icons: 'icon-color-switch-uc',
          list: 'nav-list-uc',
        });
    }
  };
  const { icons, list } = cNames;
  return (
    <nav className="header" {...rest}>
      <div className={`navbar container `}>
        <span className={`before ${list}`}></span>
        <HamButton clk={clickHandler} />
        <a href="/home" className="nav-logo">
          <span>
            <svg
              width="392"
              height="107"
              viewBox="0 0 392 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="logo-text"
                className={icons}
                d="M297.77 92.5217H291.3V97.8127H298.816V99.4226H289.331V84.4929H298.713V86.113H291.3V90.9119H297.77V92.5217ZM303.246 97.8127H310.321V99.4226H301.267V84.4929H303.246V97.8127ZM321.005 92.5217H314.535V97.8127H322.051V99.4226H312.566V84.4929H321.949V86.113H314.535V90.9119H321.005V92.5217ZM335.484 94.6853C335.299 96.2644 334.715 97.4846 333.73 98.3459C332.753 99.2004 331.451 99.6277 329.824 99.6277C328.06 99.6277 326.645 98.9954 325.579 97.7307C324.519 96.4661 323.989 94.7742 323.989 92.655V91.2195C323.989 89.8318 324.235 88.6116 324.728 87.5588C325.227 86.5061 325.931 85.6995 326.84 85.1389C327.749 84.5715 328.802 84.2878 329.998 84.2878C331.584 84.2878 332.855 84.7322 333.812 85.6208C334.77 86.5027 335.327 87.7263 335.484 89.2917H333.505C333.334 88.1023 332.961 87.241 332.387 86.7078C331.82 86.1746 331.023 85.908 329.998 85.908C328.74 85.908 327.752 86.3728 327.035 87.3025C326.324 88.2322 325.968 89.5549 325.968 91.2708V92.7166C325.968 94.3367 326.307 95.6252 326.983 96.5823C327.66 97.5393 328.607 98.0178 329.824 98.0178C330.917 98.0178 331.755 97.7717 332.336 97.2795C332.924 96.7805 333.313 95.9158 333.505 94.6853H335.484ZM348.188 86.113H343.39V99.4226H341.431V86.113H336.643V84.4929H348.188V86.113ZM355.879 93.3831H352.372V99.4226H350.393V84.4929H355.335C357.017 84.4929 358.309 84.8757 359.211 85.6414C360.121 86.407 360.575 87.5212 360.575 88.9841C360.575 89.9138 360.322 90.7239 359.816 91.4143C359.317 92.1047 358.62 92.6208 357.725 92.9626L361.231 99.2996V99.4226H359.119L355.879 93.3831ZM352.372 91.7732H355.397C356.375 91.7732 357.15 91.5203 357.725 91.0144C358.306 90.5085 358.596 89.8318 358.596 88.9841C358.596 88.0613 358.319 87.3538 357.766 86.8616C357.219 86.3694 356.426 86.1199 355.387 86.113H352.372V91.7732ZM365.456 99.4226H363.487V84.4929H365.456V99.4226ZM380.047 94.6853C379.863 96.2644 379.278 97.4846 378.294 98.3459C377.316 99.2004 376.014 99.6277 374.387 99.6277C372.624 99.6277 371.208 98.9954 370.142 97.7307C369.083 96.4661 368.553 94.7742 368.553 92.655V91.2195C368.553 89.8318 368.799 88.6116 369.291 87.5588C369.79 86.5061 370.494 85.6995 371.403 85.1389C372.312 84.5715 373.365 84.2878 374.562 84.2878C376.147 84.2878 377.419 84.7322 378.376 85.6208C379.333 86.5027 379.89 87.7263 380.047 89.2917H378.068C377.897 88.1023 377.525 87.241 376.951 86.7078C376.383 86.1746 375.587 85.908 374.562 85.908C373.304 85.908 372.316 86.3728 371.598 87.3025C370.887 88.2322 370.532 89.5549 370.532 91.2708V92.7166C370.532 94.3367 370.87 95.6252 371.547 96.5823C372.224 97.5393 373.17 98.0178 374.387 98.0178C375.481 98.0178 376.318 97.7717 376.899 97.2795C377.487 96.7805 377.877 95.9158 378.068 94.6853H380.047Z"
                fill="#F1F1F1"
              />
              <path
                d="M62.7862 2.2063H24.62C21.7575 1.76506 -20.9886 32.8723 13.1701 66.1857H49.428L53.2446 48.5362H28.4366C28.4366 48.5362 15.0784 39.7115 28.4366 19.8558H58.9696L62.7862 2.2063Z"
                fill="#FE0000"
              />
              <path
                d="M93.3191 0L62.7861 66.1856H83.7775L89.5025 52.9484H110.494V66.1856H131.485V0H93.3191ZM110.494 39.7113H97.1357L110.494 13.2371V39.7113Z"
                fill="#FE0000"
              />
              <path
                d="M265.067 0L234.534 66.1856H255.526L261.251 52.9484H282.242V66.1856H303.233V0H265.067ZM282.242 39.7113H268.884L282.242 13.2371V39.7113Z"
                fill="#FE0000"
              />
              <path
                d="M142.935 66.1856L158.202 0H184.918L188.735 33.0928L205.909 0H234.534L223.084 66.1856H202.093L207.818 28.6804L190.643 66.1856H177.285L171.56 28.6804L163.926 66.1856H142.935Z"
                fill="#FE0000"
              />
              <path
                d="M305.142 79.4227L335.675 33.0928L328.041 0H349.033L354.185 18.0907L365.635 0.441239L391.016 0L370.024 33.0928L377.657 66.1856H358.574L350.941 44.1237L329.95 79.4227H305.142Z"
                fill="#FE0000"
              />
            </svg>
          </span>
        </a>
        <a href="/cart" className="nav-cart">
          <span>
            <svg
              viewBox="0 0 22 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={icons}
                d="M10.9375 1.73126C11.9735 1.73126 12.9671 2.18726 13.6996 2.99895C14.4322 3.81064 14.8438 4.91152 14.8438 6.05942V6.92505H7.03125V6.05942C7.03125 4.91152 7.4428 3.81064 8.17536 2.99895C8.90793 2.18726 9.9015 1.73126 10.9375 1.73126ZM16.4062 6.92505V6.05942C16.4062 4.45236 15.8301 2.91112 14.8045 1.77476C13.7789 0.638401 12.3879 0 10.9375 0C9.4871 0 8.0961 0.638401 7.07051 1.77476C6.04492 2.91112 5.46875 4.45236 5.46875 6.05942V6.92505H0V24.2377C0 25.156 0.32924 26.0367 0.915291 26.6861C1.50134 27.3354 2.2962 27.7002 3.125 27.7002H18.75C19.5788 27.7002 20.3737 27.3354 20.9597 26.6861C21.5458 26.0367 21.875 25.156 21.875 24.2377V6.92505H16.4062ZM1.5625 8.65631H20.3125V24.2377C20.3125 24.6968 20.1479 25.1372 19.8549 25.4619C19.5618 25.7865 19.1644 25.9689 18.75 25.9689H3.125C2.7106 25.9689 2.31317 25.7865 2.02015 25.4619C1.72712 25.1372 1.5625 24.6968 1.5625 24.2377V8.65631Z"
                fill="#1F1F1F"
              />
            </svg>
          </span>
        </a>
      </div>
      <NavMenu list={list} />
    </nav>
  );
};

export default NavBar;
