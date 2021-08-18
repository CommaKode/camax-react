import React, { useEffect, useState } from "react";
import "./ProductActions.scss";
import Button from "../../../Buttons/Button";
import { ReactComponent as Delivery } from "../../../../Images/icons/delivery.svg";
export const ProductActions = () => {
  const [quantity, setquantity] = useState(
    JSON.parse(localStorage.getItem("quantity"))
  );

  useEffect(() => {
    localStorage.setItem("quantity", JSON.stringify(quantity));
  }, [quantity]);

  return (
    <div className={"product-actions"}>
      <div className={"delivery"}>
        <span>ارسال به سراسر کشور</span>
        <Delivery className={"delivery-icon"} />
      </div>
      <div className={"btn quantity"}>
        <Button title={"+"} onClick={() => setquantity((q) => q + 1)} />
        <Button title={"-"} onClick={() =>quantity<1? setquantity(0) : setquantity((q) => q - 1)} />
        <span>{quantity}</span>
      </div>
      <div className={"buy-action"}>
        <Button variant={"btn buy-action-btn"} title={"افزودن به سبد خرید"} />
      </div>
      <div className={"buy-action-lg"}>
        <Button
          variant={"btn buy-action-btn-lg"}
          title={"افزودن به سبد خرید"}
        />
      </div>
    </div>
  );
};
export default ProductActions;
