import React from "react";
import "./filter.scss";

 const FilterItem = (props) => {
  const { title,index,...rest } = props;
 

  return (
    <>
      <label for={`input-${index}`}>{title}</label>
      <input id={`input-${index}`} type="checkbox"/>
    </>
  );
};


export default FilterItem