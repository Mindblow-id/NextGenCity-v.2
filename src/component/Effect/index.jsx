import React from "react"; 
import "./style.css"

const Effect = () => {
  return (
    <section id="effect" class="effect">
      <h1>Effect</h1>
      <div class="box-container-effect">
        <div class="container">
          <h3>Positive</h3>
          <p>
            1. Ease and Comfort
            <br /> 2. Energy Efficiency
            <br /> 3. Security
            <br />
            4. Health
          </p>
        </div>
        <div class="container">
          <h3>Negative</h3>
          <p>
            1. Dependence Of Technology
            <br /> 2. Cost
            <br /> 3. Privacy Security
            <br /> 4.Technology Complexity
          </p>
        </div>
      </div>
      <div class="indicator">
        <h3>Indicator</h3>
        <div class="carousel">
         
          <div id="slider" class="slider">
            <div class="carousel-slide">
              <div class="container">
                <img src="/image/Economy.svg" alt="Economic" />
                <h3>Smart Economy</h3>
              </div>
            </div>
            <div class="carousel-slide">
              <div class="container">
                <img src="/image/SmartEnv.svg" alt="Economic" />
                <h3>Smart Environment</h3>
              </div>
            </div>
            <div class="carousel-slide">
              <div class="container">
                <img src="/image/Govern.svg" alt="Economic" />
                <h3>Smart Government</h3>
              </div>
            </div>
            <div class="carousel-slide">
              <div class="container">
                <img src="/image/SmartHome.svg" alt="Economic" />
                <h3>Smart Living</h3>
              </div>
            </div>
            <div class="carousel-slide">
              <div class="container">
                <img src="/image/Mobility.svg" alt="Economic" />
                <h3>Smart Mobility</h3>
              </div>
            </div>
            <div class="carousel-slide">
              <div class="container">
                <img
                  src="/image/SmartPeople.svg"
                  height={"85%"}
                  alt="Economic"
                />
                <h3>Smart People</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Effect;
