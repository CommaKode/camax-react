import React from 'react';
import Carousel from './Carousel';

import monitorVec from '../../Images/Illustrations/monitor-vector.svg';
import panelVec from '../../Images/Illustrations/panel-vector.svg';
import Monitor from '../Card/ShopCardList';

const HomePageCar = (props) => {
  const { cName, ...rest } = props;
  return (
    <div className={'car ' + cName} {...rest}>
      <h4 className="car-header container">محصولات پرفروش</h4>
      <Carousel data={Monitor} carImg={monitorVec} carAlt="monitor" />
      <Carousel data={Monitor} carImg={panelVec} carAlt="panel" />
    </div>
  );
};

export default HomePageCar;
