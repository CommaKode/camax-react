import React, { useRef } from "react";

const CheckBoxList = (props) => {
  const { title, index, variant,id, ...rest } = props;
  let input = useRef(null);
  let label = useRef(null);
  
 
  return (
    <div className={variant} {...rest}>
      <label
        htmlFor={`${id}-${index}`}
        ref={(el) => {
          label = el;
        }}
      >
        {title}
      </label>
      <input
        id={`${id}-${index}`}
        type="checkbox"
        ref={(el) => {
          input = el;
        }}
      />
    </div>
  );
};

export default CheckBoxList;
