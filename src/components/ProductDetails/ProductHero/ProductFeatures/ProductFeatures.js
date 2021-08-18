import React from "react";
import "./ProductFeatures.scss";

const ProductFeatures = (props) => {
  const { features } = props;

  return (
    <div className={"product-features"}>
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
    </div>
  );
};

export default ProductFeatures;
