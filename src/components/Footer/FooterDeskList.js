import React from 'react';
import { Link } from 'react-router-dom';

const FooterDeskList = (props) => {
  const { items, cName, ...rest } = props;
  return (
    <div className={'footer-desk ' + cName} {...rest}>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <span>{item.title}</span>
            <ul>
              {item.options.map((opt, index) => {
                return (
                  <Link to={opt.url} key={index}>
                    {opt.title}
                  </Link>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FooterDeskList;
