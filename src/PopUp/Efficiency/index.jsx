import React from 'react'
import "./style.css"

export default function Efficiency({setActive}) {
  return (
    <div className="pop-up-container">
      {/* <img className="pop-bg" src="/image/chip-effect.svg" alt="" /> */}
      <h1 className="pop-title">efficiency</h1>
      <div onClick={() => setActive(0)} className="close-button">
        <img src="/image/x.svg" alt="" />
      </div>
      <div class="pop-box">
        <div class="pop-box-img">
          <img src="/image/efficiency.svg" alt="" />
        </div>
        <h5>efficiency</h5>
      </div>
      <div className="pop-paragraph">
        <p>
          Pada konsep Smart City, kualitas tentu menjadi alasan utama mengapa
          Smart City itu diimplementasikan. Dengan menerapkan konsep ini, tentu
          kualitas akan meningkat dari segala aspek.
        </p>
      </div>
      <img className="efficiency-pop" src="/image/efficiency-pop.svg" alt="" />
    </div>
  )
}
