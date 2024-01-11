import React from "react";
import "./technology.css"

const Technology = () => {
  return (
    <section id="technology" class="technology">
      <h1 class="title">Technology</h1>
      <div class="container">
        <div class="iot">
          <h1 class="title-content">Internet Of Things</h1>
          <p>
            Internet Of Things (IoT) adalah teknologi yang menggunakan Jaringan
            Internet untuk mengoperasikan berbagai macam perangkat.
          </p>
        </div>
        <div class="ai">
          <h1 class="title-content">Artificial Inteligence</h1>
          <p>
            Artificial Intelligent (AI) adalah teknologi yang memiliki
            kecerdasaran tersendiri. AI biasanya digunakan sebagai Virtual
            Assistant, Smart Services dan Smart Control.
          </p>
        </div>
      </div>
      <div class="container">
        <div class="cc">
          <h1 class="title-content">Cloud Computing</h1>
          <p>
            Cloud Computing adalah model komputasi yang memungkinkan akses
            penyimpanan data dan akses jarak jauh melalui internet.
          </p>
        </div>
        <div class="wt">
          <h1 class="title-content">Wearable Technology</h1>
          <p>
            Wearable Technology adalah perangkat Teknologi yang dapat dipakai,
            seperti Smart Watch, dan Fitness Tracker.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
