import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import DesktopNav from './DesktopNav/DesktopNav';

const Nav = () => {
  const [scroll, setScroll] = useState('');

  useEffect(() => {
    let lastScroll = Number;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setScroll('');
      }
      if (currentScroll > lastScroll && scroll !== 'scroll-down') {
        setScroll('scroll-down');
      }
      if (currentScroll < lastScroll && scroll === 'scroll-down') {
        setScroll('');
      }

      lastScroll = currentScroll;
    });
  }, [scroll]);

  return (
    <header className={`header-sec ${scroll}`}>
      <NavBar />
      <DesktopNav />
    </header>
  );
};

export default Nav;
