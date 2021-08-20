import React from 'react';
import './Services.scss';

import ServicesForm from './ServicesForm';
import pic from '../../Images/servicePic.png';

import ServiceFormData from './ServiceFormData';
import Heading from '../Heading/Heading';

const Services = () => {
  return (
    <div className="service-section container">
      <ServicesForm data={ServiceFormData} />
      <div className="serv-img">
        <Heading title="خدمات پس از فروش" />
        <img src={pic} alt="services" />
      </div>
    </div>
  );
};

export default Services;
