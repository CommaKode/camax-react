import React from 'react';
import ServiceFormInput from './ServiceFormInput';
import Button from '../Buttons/Button';

const ServicesForm = (props) => {
  const { data, ...rest } = props;
  return (
    <div className="serv-form" {...rest}>
      {data.map((item, index) => {
        return (
          <ServiceFormInput
            title={item.title}
            placeH={item.placeH}
            inpDir={item.inpDir}
            opt={item.options}
            textArea={item.textArea}
            inpID={index}
            key={index}
          />
        );
      })}
      <Button title="ثبت درخواست" variant="btn-primary serv-btn" />
    </div>
  );
};

export default ServicesForm;
