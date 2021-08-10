import React from "react";
import "./filter.scss";
import { Options } from "../Detail-Lists/Monitor";
import FilterIcon from "../../Images/icons/filter.svg";
import SortIcon from "../../Images/icons/sort.svg";
import {  Power3 } from "gsap";
import PopUp from "../PopUp/PopUp";
import { useSelector, useDispatch } from "react-redux";
import "./sort.scss";
import Sort from "./Sort";

const Filters = React.memo((props) => {
  const filterPopUp = useSelector((state) => state.popUp.filterPopUp);
  const sortPopUp = useSelector((state) => state.popUp.sortPopUp);
  const dispatch = useDispatch();
  const btns = [
    "پربازدید ترین",
    "پرفروش ترین",
    "محبوب ترین",
    "جدید ترین",
    "ارزان ترین",
    "گران ترین",
  ];

  return (
    <aside className="filters">
      <div className="filter-tools">
        <button
          className="btn btn-tool"
          onClick={() => dispatch({ type: "open-filterPopUp" })}
        >
          فیلتر ها <img src={FilterIcon} alt="" />
        </button>
        <button className="btn btn-tool"
        onClick={() =>dispatch({ type:"open-sortPopUp"})}
        >
          مرتب سازی <img src={SortIcon} alt="" />
        </button>
      </div>

      <PopUp
        checkList={true}
        variant={"filter-items-field"}
        animDuration={0.8}
        header="فیلترها"
        items={Options}
        animEase={Power3.easeInOut}
        top={"30%"}
        doneBtn={true}
        doneTitle={"Done"}
        doneVariant={"btn-primary"}
        state={filterPopUp}
      />

      <PopUp
        checkList={true}
        variant={"filter-items-field"}
        animDuration={0.8}
        header="فیلترها"
        items={btns}
        animEase={Power3.easeInOut}
        top={"30%"}
        doneBtn={true}
        doneTitle={"Done"}
        doneVariant={"btn-primary"}
        state={sortPopUp}
      />
      <ul className="filter-items-desktop">
        <Sort
          containerVariant={"sort-container"}
          btnTitles={btns}
          animDuration={1.5}
          animEase={"slow(0.7, 0.7, false)"}
        />
        {Options.map((item, index) => (
          <li key={index}>
            <label htmlFor={`sort-${index}`}>{item}</label>
            <input id={`sort-${index}`} type="checkbox" />
          </li>
        ))}
      </ul>
    </aside>
  );
});

export default Filters;
