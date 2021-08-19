import React from 'react';

const ServiceFormInput = (props) => {
  const { title, opt, inpID, placeH, inpDir, textArea, ...rest } = props;
  return (
    <div className="serv-inp" {...rest}>
      <label htmlFor={inpID}>{title}</label>
      {opt ? (
        <select name={title} id={inpID} className="inp-option">
          {opt.map((item, index) => {
            return <option value={item.title}>{item.title}</option>;
          })}
        </select>
      ) : textArea ? (
        <textarea name={title} id={inpID} className="serv-text-area"></textarea>
      ) : (
        <input id={inpID} type="text" placeholder={placeH} className={inpDir} />
      )}
    </div>
  );
};

export default ServiceFormInput;
