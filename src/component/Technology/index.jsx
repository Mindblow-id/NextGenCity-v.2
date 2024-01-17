import React, { useState } from "react";
import "./style.css";
import { div } from "react-router-dom";

const Technology = () => {
  const [] = useState()
  return (
    <section id="technology" className="technology">
      <h1 className="title">Technology</h1>
      <div className="container">
        <div className="iot">
          <h1 className="title-content">Internet Of Things</h1>
          <p>
            Internet Of Things (IoT) adalah teknologi yang menggunakan Jaringan
            Internet untuk mengoperasikan berbagai macam perangkat.
          </p>
          <div className="more-container">
            <img className="more-icon" src="/image/more-icon.svg" alt="" />
          </div>
        </div>
        <div className="ai">
          <h1 className="title-content">Artificial Inteligence</h1>
          <p>
            Artificial Intelligent (AI) adalah teknologi yang memiliki
            kecerdasaran tersendiri. AI biasanya digunakan sebagai Virtual
            Assistant, Smart Services dan Smart Control.
          </p>
          <div className="more-container">
            <img className="more-icon" src="/image/more-icon.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cc">
          <h1 className="title-content">Cloud Computing</h1>
          <p>
            Cloud Computing adalah model komputasi yang memungkinkan akses
            penyimpanan data dan akses jarak jauh melalui internet.
          </p>
          <div className="more-container">
            <img className="more-icon" src="/image/more-icon.svg" alt="" />
          </div>
        </div>
        <div className="wt">
          <h1 className="title-content">Wearable Technology</h1>
          <p>
            Wearable Technology adalah perangkat Teknologi yang dapat dipakai,
            seperti Smart Watch, dan Fitness Tracker.
          </p>
          <div className="more-container">
            <img className="more-icon" src="/image/more-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
