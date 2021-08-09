import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const CheckBoxList = (props) => {
  const { title, index, variant, ...rest } = props;
  let input = useRef(null);
  let label = useRef(null);



  return (
    <div className={variant} {...rest}>
      <label
        htmlFor={`input-${index}`}
        ref={(el) => {
          label = el;
        }}
      >
        {title}
      </label>
      <input
        id={`input-${index}`}
        type="checkbox"
        ref={(el) => {
          input = el;
        }}
      />
    </div>
  );
};

export default CheckBoxList;
