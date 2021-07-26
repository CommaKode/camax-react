import { React, useState } from "react";
import "./filter.scss";
import FilterItem from "./FilterItem";
import { Options } from "../Detail-Lists/Monitor";
import HamButton from "../NavBar/HamButton/HamButton";
import NavMenu from "../NavBar/NavMenu";

const Filters = (props) => {
  const { ...rest } = props;
  
  const [click, setClick] = useState("unClicked");
  const [cNames, setCNames] = useState({
      icons: "icon-color-switch-uc",
      list: "nav-list-uc",
    });
    const clickHandler = () => {
        switch (click) {
            case "unClicked":
                setClick("clicked");
                setCNames({
                    icons: "icon-color-switch-c",
                    list: "nav-list-c",
                });
                break;
                default:
                    setClick("unClicked");
                    setCNames({
                        icons: "icon-color-switch-uc",
                        list: "nav-list-uc",
                    });
                }
            };
            const { icons, list } = cNames;
            return (
                <aside className="filters">
      <span>
        <h1>فیلتر ها </h1>
        <HamButton clk={clickHandler} />
      </span>
      <ul>
        {Options.map((option, index) => (
          <li>
            <FilterItem title={option} key={index} index={index} />
          </li>
        ))}
      </ul>
      <NavMenu list={list} />
    </aside>
  );
};

export default Filters;
