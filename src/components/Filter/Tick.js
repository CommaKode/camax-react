import "./tick.scss";

import React from "react";

const Tick = () => {
    const pathStyle ={
        fill:"none",
        stroke:"#000",
        strokeWidth:"3",
        strokeLinejoin:"round",
        strokeMiterlimit:"10",
    }
  return (
    <>
      <div className="trigger"></div>
      <svg
        version="1.1"
        id="tick"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 37 37"
        style={{enableBackground:"new 0 0 37 37"}}
        xmlSpace="preserve"
      >
        <path
          className="circ path"
          style={pathStyle}
          d="
	M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
        />
        <polyline
          className="tick path"
          style={pathStyle}
          points="
	11.6,20 15.9,24.2 26.4,13.8 "
        />
      </svg>
    </>
  );
};

export default Tick;
