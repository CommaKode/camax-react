import React from 'react';
import List from './List';
import './Lists.scss';

const Lists = (props) => {
  const { items } = props;

  return (
    <ul className="ul-list">
      {items.map((item, index) => (
        <List
          cName="main-links"
          url={item.url}
          title={item.title}
          options={item.options}
          key={index}
        />
      ))}
    </ul>
  );
};

export default Lists;
