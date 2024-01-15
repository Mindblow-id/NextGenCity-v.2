import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"

const Indicator = () => {
  const [open, setOpen] = useState(false);

  const onLinkClick = () => {
    setOpen(!open);
  };
  return (
    <div className="indicator">
      <div className="header-indicator">
        <h3>Indicator</h3>
        <div className="btn-indicator">
          <Link onClick={onLinkClick} to="/indicator">
            More Explation
          </Link>
        </div>
      </div>
      <div className="carousel">
        <div id="slider" className="slider">
          <div className="carousel-slide">
            <div className="container">
              <img src="/image/Economy.svg" alt="Economic" />
              <h3>Smart Economy</h3>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="container">
              <img src="/image/SmartEnv.svg" alt="Economic" />
              <h3>Smart Environment</h3>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="container">
              <img src="/image/Govern.svg" alt="Economic" />
              <h3>Smart Government</h3>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="container">
              <img src="/image/SmartHome.svg" alt="Economic" />
              <h3>Smart Living</h3>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="container">
              <img src="/image/Mobility.svg" alt="Economic" />
              <h3>Smart Mobility</h3>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="container">
              <img src="/image/SmartPeople.svg" alt="Economic" />
              <h3>Smart People</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indicator;
