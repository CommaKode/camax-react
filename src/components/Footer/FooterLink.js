import React from 'react';

const FooterLink = (props) => {
  const { title, options } = props;
  return (
    <li className={`footer-link`}>
      <button>{title}</button>
      <ul>
        {options.map((option, index) => {
          return (
            <li key={index}>
              <a href={option.url}>{option.title}</a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default FooterLink;
