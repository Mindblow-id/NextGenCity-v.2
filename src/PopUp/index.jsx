import React from "react";
import Productivity from "./Productivity";
import Infrastructure from "./Infrastructure";
import Quality from "./Quality";
import Efficiency from "./Efficiency";

import "./style.css"

export default function PopUp({ active, setActive }) {
  return (
    <>
      <div className={`${active === 1 ? "pop-show" : "pop-hidden"} pop-up`}>
        <Productivity  setActive={setActive}/>
      </div>
      <div className={`${active === 2 ? "pop-show" : "pop-hidden"} pop-up`}>
        <Infrastructure setActive={setActive}/>
      </div>
      <div className={`${active === 3 ? "pop-show" : "pop-hidden"} pop-up`}>
        <Quality setActive={setActive}/>
      </div>
      <div className={`${active === 4 ? "pop-show" : "pop-hidden"} pop-up`}>
        <Efficiency setActive={setActive}/>
      </div>
    </>
  );
}
