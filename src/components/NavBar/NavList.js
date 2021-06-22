import React from 'react';

const NavList = (props) => {
  const { url, cName, title, ...rest } = props;
  return (
    <li>
      <a href={url} className={cName} {...rest}>
        {title}
      </a>
      <span>
        <svg
          className="color-switch"
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.101701 0.980594L6.63212 8.55301C6.81904 8.76976 7.17897 8.76976 7.36788 8.55301L13.8983 0.980594C14.1409 0.698218 13.9222 0.284599 13.5304 0.284599H0.469584C0.0778387 0.284599 -0.140902 0.698218 0.101701 0.980594Z"
            fill="#F1F1F1"
          />
        </svg>
      </span>
    </li>
  );
};

export default NavList;
