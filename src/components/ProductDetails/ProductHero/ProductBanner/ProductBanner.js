import React, { useEffect, useRef } from "react";
import "./ProductBanner.scss";
import { TweenMax, Power3 } from "gsap";
import { ReactComponent as CommentIcon } from "../../../../Images/icons/comment.svg";
import { ReactComponent as StarIcon } from "../../../../Images/icons/star.svg";


const ProductBanner = (props) => {
  let banner = useRef(null);

  const { title, price } = props;
  useEffect(() => {
    TweenMax.to(banner, 0.5, {
      width: "85%",
      ease: Power3.easeInOut,
    });
  }, []);

  return (
    <div className={"product-banner"}>
      <div
        className={"banner"}
        ref={(el) => {
          banner = el;
        }}
      >
        <h2 className={"banner-name"}>{title.toUpperCase()}</h2>
        <div className={"banner-rating"}>
          <div className={"banner-comments"}>
            {/* <span>46</span> */}
            <span><CommentIcon/><span> 46 دیدگاه</span></span>
          </div>
          <div className={"banner-star"}>
            {/* <span>4.5</span> */}
            <span><StarIcon /><span> 4.5 (125)</span></span>
          </div>
        </div>
        <h3 className={"banner-price"}>
          <span>قیمت:</span>
          {price}
        </h3>
      </div>
    </div>
  );
};

export default ProductBanner;
