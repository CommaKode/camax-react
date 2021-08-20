import React, { useEffect, useState } from "react";
import "./filter.scss";
import { Options } from "../Detail-Lists/Monitor";
import FilterIcon from "../../Images/icons/filter.svg";
import SortIcon from "../../Images/icons/sort.svg";
import { Power3 } from "gsap";
import PopUp from "../PopUp/PopUp";
import { useSelector, useDispatch } from "react-redux";
import "./sort.scss";
import Sort from "./Sort";
import Tick from "./Tick";
import { useRef } from "react";

const Filters = React.memo((props) => {
  const filterPopUp = useSelector((state) => state.popUp.filterPopUp);
  const sortPopUp = useSelector((state) => state.popUp.sortPopUp);
  const filter = useSelector((state) => state.filter);
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
        <button
          className="btn btn-tool"
          onClick={() => dispatch({ type: "open-sortPopUp" })}
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
        id={"filters"}
      />

      <PopUp
        checkList={true}
        variant={"filter-items-field"}
        animDuration={0.8}
        header="مرتب سازی"
        items={btns}
        animEase={Power3.easeInOut}
        top={"30%"}
        doneBtn={true}
        doneTitle={"Done"}
        doneVariant={"btn-primary"}
        state={sortPopUp}
        id={"sorts"}
      />
      <ul className="filter-items-desktop">
        <Sort
          title="مرتب سازی"
          containerVariant={"sort-container"}
          btnTitles={btns}
          animDuration={1.5}
          animEase={"slow(0.7, 0.7, false)"}
          btnVariant="sort-btn"
        />
        {/* {Options.map((item, index) => (
          <li
            key={index}
            onClick={()=>clickHandler(index)} 
        className= {tickTrigger.includes(`${index}`) ? "active" : "na"} 
          >
            <label htmlFor={`filter-${index}`}>{item}</label>
            <input id={`filter-${index}`} type="checkbox" />
            <Tick />


          </li>
        ))} */}

        <li
        // onClick={()=>dispatch(type:)}
        // className={tickTrigger.includes(`${index}`) ? "active" : "na"}
        >
          <label htmlFor={`filter-1}`}>فیلتر قیمت</label>
          <input id={`filter-1`} type="checkbox" />
          <Tick />
        </li>
        <Sort
          title="سایز صفحه ی نمایش"
          containerVariant={"sort-container"}
          btnTitles={[4.3, 5, 6.6]}
          animDuration={1.5}
          animEase={"slow(0.7, 0.7, false)"}
          btnVariant="filter-btn"
        />
        <li
          onClick={() => dispatch({ type: "sdHandle" })}
          className={filter.sd ? "active" : ""}
        >
          <label htmlFor={`filter-3}`}>حافظه</label>
          <input id={`filter-3`} type="checkbox" />
          <Tick />
        </li>
        <li
          onClick={() => dispatch({ type: "intercommunicateHandle" })}
          className={filter.intercommunicate ? "active" : ""}
        >
          <label htmlFor={`filter-4}`}>ارتباط داخلی</label>
          <input id={`filter-4`} type="checkbox" />
          <Tick />
        </li>
        <li
          onClick={() => dispatch({ type: "handyPhoneHandle" })}
          className={filter.handyPhone ? "active" : ""}
        >
          <label htmlFor={`filter-5}`}>گوشی</label>
          <input id={`filter-5`} type="checkbox" />
          <Tick />
        </li>
        <li
          onClick={() => dispatch({ type: "parkingOpenerHandle" })}
          className={filter.parkingOpener ? "active" : ""}
        >
          <label htmlFor={`filter-6}`}>باز کن درب پارکینگ</label>
          <input id={`filter-6`} type="checkbox" />
          <Tick />
        </li>
        <Sort
          title="نوع صفحه ی نمایش"
          containerVariant={"sort-container"}
          btnTitles={["لمسی","ساده"]}
          animDuration={1.5}
          animEase={"slow(0.7, 0.7, false)"}
          btnVariant="filter-btn"
        />
        <li
          onClick={() => dispatch({ type: "cartHandle" })}
          className={filter.cart ? "active" : ""}
        >
          <label htmlFor={`filter-8}`}>کارتخوان</label>
          <input id={`filter-8`} type="checkbox" />
          <Tick />
        </li>
        <li
          onClick={() => dispatch({ type: "mobileConnectHandle" })}
          className={filter.mobileConnect ? "active" : ""}
        >
          <label htmlFor={`filter-8}`}>اتصال تلفن به مونیتور</label>
          <input id={`filter-8`} type="checkbox" />
          <Tick />
        </li>
        <li
          onClick={() => dispatch({ type: "cameraHandle" })}
          className={filter.camera ? "active" : ""}
        >
          <label htmlFor={`filter-8}`}>اتصال به دوربین دیگر</label>
          <input id={`filter-8`} type="checkbox" />
          <Tick />
        </li>
        <li
          onClick={() => dispatch({ type: "twoPanelConnectHandle" })}
          className={filter.twoPanelConnect ? "active" : ""}
        >
          <label htmlFor={`filter-8}`}>اتصال به دو پنل بیرونی</label>
          <input id={`filter-8`} type="checkbox" />
          <Tick />
        </li>
        <li
          onClick={() => dispatch({ type: "guardHandle" })}
          className={filter.guard ? "active" : ""}
        >
          <label htmlFor={`filter-8}`}>اتصال به گارد نگهبانی</label>
          <input id={`filter-8`} type="checkbox" />
          <Tick />
        </li>
        <li
          onClick={() => dispatch({ type: "extraLockHandle" })}
          className={filter.extraLock ? "active" : ""}
        >
          <label htmlFor={`filter-8}`}>قفل اضافه</label>
          <input id={`filter-8`} type="checkbox" />
          <Tick />
        </li>
      </ul>
    </aside>
  );
});

export default Filters;
