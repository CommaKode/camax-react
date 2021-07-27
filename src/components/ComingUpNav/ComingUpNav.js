import { React, useState, useRef, useEffect } from "react";
import "./ComingUpNav.scss";
import Lists from "../List/Lists";
import { TweenMax, Power3 } from "gsap";
import CheckBoxList from "../List/CheckBoxList";
import Button from "../Buttons/Button";

const ComingUpNav = (props) => {
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
    state,
    variant,

    ...rest
  } = props;

  let ComingUpNave = useRef(null);

  useEffect(() => {
    state
      ? TweenMax.to(ComingUpNave, animDuration, {
          top: top,
          ease: animEase,
        })
      : TweenMax.to(ComingUpNave, animDuration, {
          top: "120%",
          ease: animEase,
        });
  }, [state]);

  return (
    <div className={state?"overlay":null} onClick={()=>setshow(false)}>
      <div>
        {btnVariant ? (
          <Button
            variant={btnVariant}
            Icon={icon}
            onClick={() => setshow(!show)}
            title={btnTitle}
          />
        ) : null}
      </div>
      <div
        className={variant?variant:"ComingUpNav"}
        ref={(el) => {
          ComingUpNave = el;
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
      </div>
    </div>
  );
};

export default ComingUpNav;
