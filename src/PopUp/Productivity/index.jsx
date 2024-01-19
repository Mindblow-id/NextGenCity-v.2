import React from "react";
import "./style.css";

export default function Productivity({ setActive }) {
  return (
    <div className="pop-up-container">
      {/* <img className="pop-bg" src="/image/chip-effect.svg" alt="" /> */}
      <h1 className="pop-title">Productivity</h1>
      <div onClick={() => setActive(0)} className="close-button">
        <img src="/image/x.svg" alt="" />
      </div>
      <div class="pop-box">
        <div class="pop-box-img">
          <img src="/image/productivity.svg" alt="" />
        </div>
        <h5>Productivity</h5>
      </div>
      <div className="pop-paragraph">
        <p>
          Productivity yang dimaksud disini adalah, ketika sebuah kota itu sudah
          menerapkan sistem Smart City, tentu produktivitas dari kota tersebut
          akan meningkat lebih tinggi daripada sebelumnya.
        </p>
      </div>
      <img className="productivity-pop" src="/image/productivity-pop.svg" alt="" />
    </div>
  );
}
