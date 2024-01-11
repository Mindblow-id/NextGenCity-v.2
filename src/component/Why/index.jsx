import React from "react";
import "./why.css";

const Why = () => {
  return (
    <section id="why" class="why">
      <h2>Why?</h2>
      <div class="box-container-why">
        <div class="box-why">
          <div class="box-img">
            <img src="/image/productivity.svg" alt="" />
          </div>
          <h5>Productivity</h5>
        </div>
        <div class="box-why">
          <div class="box-img">
            <img src="/image/infrastructure.svg" alt="" />
          </div>
          <h5>Infrastructure</h5>
        </div>
        <div class="box-why">
          <div class="box-img">
            <img src="/image/quality.svg" alt="" />
          </div>
          <h5>Quality</h5>
        </div>
        <div class="box-why">
          <div class="box-img">
            <img src="/image/efficiency.svg" alt="" />
          </div>
          <h5>Eficiency</h5>
        </div>
      </div>
    </section>
  );
};

export default Why;
