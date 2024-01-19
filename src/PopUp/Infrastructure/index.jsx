import React from "react";
import "./style.css";

export default function Infrastructure({ setActive }) {
  return (
    <div className="pop-up-container">
      {/* <img className="pop-bg" src="/image/chip-effect.svg" alt="" /> */}
      <h1 className="pop-title">Infrastructure</h1>
      <div onClick={() => setActive(0)} className="close-button">
        <img src="/image/x.svg" alt="" />
      </div>
      <div class="pop-box">
        <div class="pop-box-img">
          <img src="/image/infrastructure.svg" alt="" />
        </div>
        <h5>infrastructure</h5>
      </div>
      <div className="pop-paragraph">
        <p>
          Infrastructure pada konsep smart city tentu akan menjadi hal penting
          karena, dengan penerapan smart city, perkembangan infrastruktur di
          kota akan lebih berkembang dan terjamin dalam teknologi yang lebih
          maju.
        </p>
      </div>
      <img
        className="productivity-pop"
        src="/image/infrastructure-pop.svg"
        alt=""
      />
    </div>
  );
}
