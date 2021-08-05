import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const CheckBoxList = (props) => {
  const { title, index, variant, ...rest } = props;
  let input = useRef(null);
  let label = useRef(null);
  const filters = useSelector((state) => state.filters);
  // const [todos, dispatch] = useImmerReducer(filterReducer, []);

  const dispatch = useDispatch();
  // const [CheckBoxValue, setCheckBoxValue] = useState("")

  const handler = (value) => {
    // value ? dispatch({ type: label.value }) : null;
    if (value === true) {
      switch (title) {
        case "حافظه":
          dispatch({ type: "sd" });

          break;
        case "ارتباط داخلی":
          dispatch({ type: "sd" });

          break;
        case "گوشی":
          dispatch({ type: "sd" });

          break;
        case "باز کن درب پارکینگ":
          dispatch({ type: "sd" });

          break;
        case "نوع صفحه ی نمایش":
          dispatch({ type: "sd" });

          break;
        case "کارتخوان":
          dispatch({ type: "sd" });

          break;
        case "اتصال تلفن به مونیتور":
          dispatch({ type: "sd" });

          break;
        case  "اتصال به دوربین دیگر":
          dispatch({ type: "sd" });

          break;
        case "اتصال به دو پنل بیرونی":
          dispatch({ type: "sd" });

          break;
        case "اتصال به گارد نگهبانی":
          dispatch({ type: "sd" });

          break;
        case "قفل اضافه":
          dispatch({ type: "sd" });

          break;

        default:
          break;
      }
    }
  };
  return (
    <div className={variant}>
      <label
        for={`input-${index}`}
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
        onChange={(ev) => handler(ev.target.checked)}
      />
    </div>
  );
};

export default CheckBoxList;
