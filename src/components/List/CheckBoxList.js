import React from "react";

 const CheckBoxList = (props) => {
  const { title,index, variant,...rest } = props;
 

  return (
    <div className={variant}>
      <label for={`input-${index}`}>{title}</label>
      <input id={`input-${index}`} type="checkbox"/>
    </div>
  );
};


export default CheckBoxList