import React from "react";

const Indicator = () => {
  return (
    <div class="indicator">
      <h3>Indicator</h3>
      <div class="carousel">
        <div id="slider" class="slider">
          <div class="carousel-slide">
            <div class="container">
              <img src="src/Economy.svg" alt="Economic" />
              <h3>Smart Economy</h3>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="container">
              <img src="src/SmartEnv.svg" alt="Economic" />
              <h3>Smart Environment</h3>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="container">
              <img src="src/Govern.svg" alt="Economic" />
              <h3>Smart Government</h3>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="container">
              <img src="src/SmartHome.svg" alt="Economic" />
              <h3>Smart Living</h3>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="container">
              <img src="src/Mobility.svg" alt="Economic" />
              <h3>Smart Mobility</h3>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="container">
              <img
                src="src/SmartPeople.svg"
                alt="Economic"
              />
              <h3>Smart People</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indicator;
