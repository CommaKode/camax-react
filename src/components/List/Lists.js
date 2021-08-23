import React from 'react';
import List from './List';
import './Lists.scss';

const Lists = (props) => {
  const { items, cName, clk, ...rest } = props;

  return (
    <ul className={`ul-list ${cName}`} {...rest}>
      {items.map((item, index) => (
        <List
          cName="main-links"
          url={item.url}
          title={item.title}
          options={item.options}
          key={index}
          clk={clk}
        />
      ))}
    </ul>
  );
};

export default Lists;
