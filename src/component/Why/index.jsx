import React, { useState } from "react";
import "./why.css";
import PopUp from "../../PopUp";

const Why = () => {
  const [active, setActive] = useState(0);

  const boxClick = (num) => {
    setActive(num)
  }
  return (
    <section id="why" class="why">
      <h2>Why?</h2>
      <div class="box-container-why">
        <div onClick={() => boxClick(1)} class="box-why">
          <div class="box-img">
            <img src="/image/productivity.svg" alt="" />
          </div>
          <h5>Productivity</h5>
        </div>
        <div onClick={() => boxClick(2)} class="box-why">
          <div class="box-img">
            <img src="/image/infrastructure.svg" alt="" />
          </div>
          <h5>Infrastructure</h5>
        </div>
        <div onClick={() => boxClick(3)} class="box-why">
          <div class="box-img">
            <img src="/image/quality.svg" alt="" />
          </div>
          <h5>Quality</h5>
        </div>
        <div onClick={() => boxClick(4)} class="box-why">
          <div class="box-img">
            <img src="/image/efficiency.svg" alt="" />
          </div>
          <h5>Eficiency</h5>
        </div>
      </div>
      <PopUp active={active} setActive={setActive} />
    </section>
  );
};



export default Why;
