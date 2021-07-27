import { React, useState, useRef, useEffect } from "react";
import "./filter.scss";
import FilterItem from "../List/CheckBoxList";
import { Options } from "../Detail-Lists/Monitor";
import FilterIcon from "../../Images/icons/filter.svg";
import SortIcon from "../../Images/icons/sort.svg";
import Lists from "../List/Lists";
import { TweenMax, Power3 } from "gsap";
import ComingUpNav from "../ComingUpNav/ComingUpNav";

const Filters = (props) => {
  const [Show, setShow] = useState(false)
  const { ...rest } = props;
  let ComingUpNave = useRef(null);
  // const clickHandlerFilter = () => {
  //   TweenMax.to(ComingUpNave, 0.8, {
  //     top: "35%",
  //     ease: Power3.easeInOut,
  //   });
  // };
  return (
    <aside className="filters">
      <div className="filter-tools">
        <button className='btn-tool' onClick={()=>setShow(!Show)}>
          فیلتر ها <img src={FilterIcon} alt="" />{" "}
        </button>
        <button className='btn-tool'>
          {" "}
          مرتب سازی <img src={SortIcon} alt="" />
        </button>
      </div>
      {/* <div
        className="filter-items-field"
        ref={(el) => {
          ComingUpNave = el;
        }}
      >
        <h3>فیلتر ها</h3>
        <ul>
          {Options.map((option, index) => (
            <li>
              <FilterItem title={option} key={index} index={index} variant="filter-items"/>
            </li>
          ))}
        </ul>
      </div> */}
      <ComingUpNav
        checkList={true}
        variant={"filter-items-field"}
        animDuration={0.8}
        checkList={true}
        header="فیلترها"
        items={Options}
        animEase={Power3.easeInOut}
        top="35%"
        state={Show}
      />
    </aside>
  );
};

export default Filters;
