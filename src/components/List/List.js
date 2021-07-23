import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  const { url, cName, title, options, ...rest } = props;

  const [click, setClick] = useState("sub-uc");
  const [rotate, setRotate] = useState("arrow-uc");

  const clickHandler = () => {
    switch (click) {
      case "sub-uc":
        setClick("sub-c");
        setRotate("arrow-c");
        break;
      default:
        setClick("sub-uc");
        setRotate("arrow-uc");
    }
  };

  return options !== undefined ? (
    <li className="list">
      <button
        className={`sub-btn ${rotate} ${cName}`}
        onClick={clickHandler}
        {...rest}
      >
        <span>{title}</span>
        <span>
          <svg
            className="color-switch"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.101701 0.980594L6.63212 8.55301C6.81904 8.76976 7.17897 8.76976 7.36788 8.55301L13.8983 0.980594C14.1409 0.698218 13.9222 0.284599 13.5304 0.284599H0.469584C0.0778387 0.284599 -0.140902 0.698218 0.101701 0.980594Z"
              fill="#F1F1F1"
            />
          </svg>
        </span>
      </button>
      <ul className={`sub-list ${click}`}>
        {options.map((option, index) => (
          <li key={index}>
            <Link to={option.url}>{option.title}</Link>
          </li>
        ))}
      </ul>
    </li>
  ) : (
    <li className="list">
      <Link to={url} className={cName} {...rest}>
        {title}
      </Link>
    </li>
  );
};

export default List;
