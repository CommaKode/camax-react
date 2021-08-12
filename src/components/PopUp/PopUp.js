import React, { useState, useRef, useEffect } from "react";
import "./PopUp.scss";
import Lists from "../List/Lists";
import { TweenMax } from "gsap";
import CheckBoxList from "../List/CheckBoxList";
import Button from "../Buttons/Button";
import {  useDispatch } from "react-redux";

const PopUp = React.memo((props) => {

 
   
  const {
    animDuration,     // Duration of the anniamation
    btnVariant,      // this btn is just for storybook 
    btnTitle,       // this btn is just for storybook 
    icon,           // icon for btn
    items,          // list of items for the popUp
    checkList,      // if you want your list be a checklist you should pass it true
    header,         // the header tha shown at the top of popUP
    animEase,       //  the ease of animation
    top,            // how much do you want the popUp comes up 
    variant,        //  the variant of div of that contains the list
    // overlay,     // 
    doneBtn,        // if you want a done btn you should pass it true
    doneVariant,     // the variant of the done btn
    doneIcon,       //  the icon of doneBtn
    doneTitle,      // the title of doneBtn
    id,             // the id of labels and inputs that used in your list     **!important**
    state,          // you should pass the state that you introduced in your reducer for the popUP **!important**
    // ...rest
  } = props;
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);

  let ComingUp = useRef(null);
  let popUpOverlay = useRef(null);
  useEffect(() => {
    
    setshow(!show);
    if (show === true) {
      TweenMax.to(ComingUp, animDuration, {
        top: top,
        ease: animEase,
      });
      TweenMax.to(popUpOverlay, animDuration, {
        top: 0,
        ease: animEase,
      });
    } else {
      TweenMax.to(ComingUp, animDuration, {
        top: "120%",
        ease: animEase,
      });
      TweenMax.to(popUpOverlay, animDuration, {
        top: "120%",
        ease: animEase,
      });
    }
  }, [state]);

  return (
    <>
      <div
        className="overlay"
        onClick={() => dispatch({ type: "close" })}
        ref={(el) => {
          popUpOverlay = el;
        }}
      ></div>

      <div>
        {btnVariant ? (
          <Button
            variant={btnVariant}
            Icon={icon}
            onClick={() => dispatch({ type: "open-comeUp" })}
            title={btnTitle}
          />
        ) : null}
      </div>

      <div
        className={variant ? variant : "filter-items-field"}
        ref={(el) => {
          ComingUp = el;
        }}
      >
        <h3>{header}</h3>
        {checkList ? (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <CheckBoxList title={item} index={index} id={id} />
              </li>
            ))}
          </ul>
        ) : (
          <div className={variant}>
            <Lists items={items} />
          </div>
        )}
        {doneBtn ? (
          <Button
            variant={doneVariant}
            Icon={doneIcon}
            onClick={() => dispatch({ type: "close" })}
            title={doneTitle}
          />
        ) : null}
      </div>
    </>
  );
});

export default PopUp;
