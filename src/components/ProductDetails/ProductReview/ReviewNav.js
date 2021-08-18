import React from "react";
import {HashLink as Link} from 'react-router-hash-link';

const ReviewNav = (props) => {
  const {  variant } = props;

  return (
    <div className={variant + " "}>
      <ul>
          <li className={""}>
              <Link smooth to={"#review"}>نقد و بررسی</Link>
          </li>
          <li className={""}>
              <Link smooth to={"#technical"}>مشخصات فنی</Link>
          </li>
          <li class>
              <Link smooth to={"#Comments"}>نظرات کاربران</Link>
          </li>
      </ul>
    </div>
  );
};

export default ReviewNav;
