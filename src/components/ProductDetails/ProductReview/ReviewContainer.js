import React, { useState, useEffect, useRef } from "react";
import "./ProductReview.scss";
import "../ProductHero/ProductFeatures/ProductFeatures.scss";
import { TweenMax, Power3 } from "gsap";

const ReviewContainer = (props) => {
  const {
    header,
    text,
    features,
    list,
    extraFeatures,
    id,
    reference,
    variant,
    ...rest
  } = props;
  let container = useRef(null);
  const [handler, sethandler] = useState(false);

  // Object.size = function (obj) {
  //   var size = 0,
  //     key;
  //   for (key in obj) {
  //     if (obj.hasOwnProperty(key)) size++;
  //   }
  //   return size;
  // };
  // let size = Object.size(features);
  // let cHeight = `${size * 2.2}em`;

  useEffect(() => {
    if (handler === true) {
      TweenMax.to(container, 0.5, {
        height: "auto",
        ease: Power3.easeInOut,
      });
    } else {
      TweenMax.to(container, 0.5, {
        height: "13.5em",
        ease: Power3.easeInOut,
      });
    }
  }, [handler]);

  return (
   <div
   ref={reference}
   >
      <div
      className={`ReviewContainer ${variant} `}
      ref={(el) => {
        container = el;
      }}
      id={id}
      // ref={reference}

      {...rest}
    >
      <span
        onClick={() => {
          sethandler(!handler);
        }}
      >
        بیشتر{" "}
      </span>

      <h3>{header}</h3>
      {list ? (
        <div className={" features"}>
          <div>
            <span>سایز صفحه نمایش :</span>
            <span>{features.size}inch</span>
          </div>
          <div>
            <span>حافظه داخلی:</span>
            <span>{features.sd ? "دارد" : "ندارد"}</span>
          </div>
          <div>
            <span>صفحه نمایش لمسی:</span>
            <span>{features.touch ? "دارد" : "ندارد"}</span>
          </div>
          <div>
            <span>دسته گوشی:</span>
            <span>{features.handyPhone ? "دارد" : "ندارد"}</span>
          </div>
          <div>
            <span>ارتباط داخلی:</span>
            <span>{features.intercommunicate ? "دارد" : "ندارد"}</span>
          </div>
          <div>
            <span>کارتخوان:</span>
            <span>{features.cart ? "دارد" : "ندارد"}</span>
          </div>
          <div>
            <span>قفل اضافه:</span>
            <span>{features.extraLock ? "دارد" : "ندارد"}</span>
          </div>
          {extraFeatures
            ? extraFeatures.map((feature, index) => (
                <div key={index}>
                  <span>{feature.title}</span>
                  <span>{features.option ? "دارد" : "ندارد"}</span>
                </div>
              ))
            : null}
        </div>
      ) : (
        <p>{text}</p>
      )}
    </div>
   </div>
  );
};

export default ReviewContainer;
