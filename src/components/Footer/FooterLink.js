import React from 'react';

const FooterLink = (props) => {
  const { title, options } = props;
  return (
    <li>
      <button>{title}</button>
      <ul>
        {options.map((option) => {
          return (
            <li>
              <a href={option.url}>{option.title}</a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default FooterLink;
