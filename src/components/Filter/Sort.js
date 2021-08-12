import React, { useRef, useState, useEffect } from "react";
import { TweenMax } from "gsap";
import Button from "../Buttons/Button";

export const Sort = (props) => {
  let container = useRef(null);
  const {
    containerVariant,
    btnTitles,
    // btnVariant,
    animEase,
    animDuration,
  } = props;

  const [ShowSort, setShowSort] = useState(false);
  const [DropDown, setDropDown] = useState("");
  const [Show, setShow] = useState("fade");


  let height = `${btnTitles.length * 3.4}em`;


  useEffect(() => {
    if (ShowSort === true) {
      TweenMax.to(container, animDuration, {
        height: height,
        ease: animEase,
        y: -10,
      });
      setTimeout(() => {
        setDropDown("dropDown");
      }, 100);
      setTimeout(() => {
        setShow("show");
      }, 130);
    } else {
      TweenMax.to(container, animDuration, {
        height: "0",
        ease: animEase,
      });
      setTimeout(() => {
        setDropDown("");
      }, 100);
      setTimeout(() => {
        setShow("fade");
      }, 130);
    }
  }, [ShowSort]);

  
  return (
    <>
      <Button
        title={"مرتب سازی"}
        variant={"sort-btn"}
        onClick={() => {
          setShowSort(!ShowSort);
        }}
      />
      <div
        className={containerVariant}
        ref={(el) => {
          container = el;
        }}
      >
        <ul>
          {btnTitles.map((btnTitle, index) => (
            <span
              key={index}
              className={`${DropDown} ${Show}`}
            >
              <label htmlFor={`sort-${index}`}>{btnTitle}</label>
              <input id={`sort-${index}`} type="checkbox" />
            </span>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Sort;
