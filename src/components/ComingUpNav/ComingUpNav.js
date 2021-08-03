import React, { useState, useRef, useEffect } from "react";
import "./ComingUpNav.scss";
import Lists from "../List/Lists";
import { TweenMax, Power3 } from "gsap";
import CheckBoxList from "../List/CheckBoxList";
import Button from "../Buttons/Button";
import { useSelector, useDispatch } from "react-redux";


const ComingUpNav = React.memo((props) => {
  const comeUp = useSelector((state) => state.comeUp);
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);
  const {
    animDuration,
    btnVariant,
    btnTitle,
    icon,
    items,
    checkList,
    header,
    animEase,
    top,
    variant,
    overlay,
    doneBtn,
    doneVariant,
    doneIcon,
    doneTitle,
    ...rest
  } = props;

  let ComingUp = useRef(null);
  let ComeUpOverlay = useRef(null);
  useEffect(() => {
    setshow(!show);
    if (show === true) {
      TweenMax.to(ComingUp, animDuration, {
        top: top,
        ease: animEase,
      });
      TweenMax.to(ComeUpOverlay, animDuration, {
        top: 0,
        ease: animEase,
      });
    } else {
      TweenMax.to(ComingUp, animDuration, {
        top: "120%",
        ease: animEase,
      });
      TweenMax.to(ComeUpOverlay, animDuration, {
        top: "120%",
        ease: animEase,
      });
    }
  }, [comeUp]);

  return (
    <>
    <div
      className="overlay"
      onClick={() => dispatch({ type: "close-comeUp" })}
      ref={(el) => {
        ComeUpOverlay = el;
      }}
    >
    </div>

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
              <li>
                <CheckBoxList title={item} key={index} index={index} />
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
          onClick={() => dispatch({ type: "close-comeUp" })}
          title={doneTitle}
        />
      ) : null
      }
      </div>
    </>
  );
});

export default ComingUpNav;
