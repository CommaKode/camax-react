import React, { useState, useRef, useEffect } from "react";
import "./filter.scss";
import FilterItem from "../List/CheckBoxList";
import { Options } from "../Detail-Lists/Monitor";
import FilterIcon from "../../Images/icons/filter.svg";
import SortIcon from "../../Images/icons/sort.svg";
import Lists from "../List/Lists";
import { TweenMax, Power3 } from "gsap";
import ComingUpNav from "../ComingUpNav/ComingUpNav";
import { useSelector, useDispatch } from "react-redux";

const Filters = React.memo((props) => {
  const { ...rest } = props;
  const comeUp = useSelector((state) => state.comeUp);
  const dispatch = useDispatch();

  return (
    <aside className="filters">
      <div className="filter-tools">
        <button
          className="btn btn-tool"
          onClick={() => dispatch({ type: "open-comeUp" })}
        >
          فیلتر ها <img src={FilterIcon} alt="" />
        </button>
        <button className="btn btn-tool">
        
          مرتب سازی <img src={SortIcon} alt="" />
        </button>
      </div>

      <ComingUpNav
        checkList={true}
        variant={"filter-items-field"}
        animDuration={0.8}
        header="فیلترها"
        items={Options}
        animEase={Power3.easeInOut}
        top={"30%"}
        doneBtn={true}
        doneTitle={'Done'}
        doneVariant={"btn-primary"}
      />
    </aside>
  );
});

export default Filters;
