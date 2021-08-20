import React, { useRef, useState, useEffect } from "react";
import { TweenMax } from "gsap";
import Button from "../Buttons/Button";
import {ReactComponent as Arrow} from '../../Images/icons/arrow.svg';

export const Sort = (props) => {
  let container = useRef(null);
  const {
    containerVariant,
    btnTitles,
    animEase,
    animDuration,
    title,
    btnVariant,
  } = props;

  const [ShowSort, setShowSort] = useState(false);
  const [DropDown, setDropDown] = useState("");
  const [Show, setShow] = useState("fade");
  const [Rotate, setRotate] = useState(false);
  

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
        title={title}
        variant={`${btnVariant} ${Rotate? "rotate":" "}`}
        onClick={() => {
          setShowSort(!ShowSort);
          setRotate(!Rotate);

        }}
        Icon={Arrow}
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
