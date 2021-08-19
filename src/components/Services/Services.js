import React from 'react';
import './Services.scss';

import ServicesForm from './ServicesForm';
import pic from '../../Images/servicePic.png';

import ServiceFormData from './ServiceFormData';

const Services = () => {
  return (
    <div className="service-section container">
      <ServicesForm data={ServiceFormData} />
      <div className="serv-img">
        <h1>
          خدمات پس از فروش
          <span>کامکث</span>
        </h1>
        <img src={pic} alt="services" />
      </div>
    </div>
  );
};

export default Services;
