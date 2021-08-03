import React ,{useRef} from "react";
import { useSelector, useDispatch } from "react-redux";


 const CheckBoxList = (props) => {
  const { title,index, variant,...rest } = props;
  let input = useRef(null);
  const dispatch = useDispatch()
  const filters = useSelector(state => state.filters)
  // for (let index = 0; index < 13; index++) {
  //   array.forEach(element => {
  //     if (input.value===element) {
        
  //     }
  //   });
    
  // }
    console.log(input.value)
  return (
    <div className={variant}>
      <label for={`input-${index}`}>{title}</label>
      <input id={`input-${index}`} type="checkbox"
      ref={(el) => {
        input = el;
      }}
      />
    </div>
  );
};


export default CheckBoxList