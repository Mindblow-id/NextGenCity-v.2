import React from "react";
import "./style.css";

export default function Quality({ setActive }) {
  return (
    <div className="pop-up-container">
      {/* <img className="pop-bg" src="/image/chip-effect.svg" alt="" /> */}
      <h1 className="pop-title">quality</h1>
      <div onClick={() => setActive(0)} className="close-button">
        <img src="/image/x.svg" alt="" />
      </div>
      <div class="pop-box">
        <div class="pop-box-img">
          <img src="/image/quality.svg" alt="" />
        </div>
        <h5>quality</h5>
      </div>
      <div className="pop-paragraph">
        <p>
          Pada konsep Smart City, kualitas tentu menjadi alasan utama mengapa
          Smart City itu diimplementasikan. Dengan menerapkan konsep ini, tentu
          kualitas akan meningkat dari segala aspek.
        </p>
      </div>
      <img className="quality-pop" src="/image/quality-pop.svg" alt="" />
    </div>
  );
}
