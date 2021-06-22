import React from 'react';

const NavList = (props) => {
  const { url, cName, title, ...rest } = props;
  return (
    <li>
      <a href={url} className={cName} {...rest}>
        {title}
      </a>
    </li>
  );
};

export default NavList;
