import React from "react";
import "./style.css";

const Cities = () => {
  return (
    <section id="example" class="example">
      <div class="box-container-example">
        <div class="card">
          <img src="/image/CityJakarta.svg" alt="" />
          <p>
            Jakarta, merupakan salah satu kota dengan penduduk terpadat di
            Indonesia. Kota yang satu ini telah menerapkan konsep smart city
            dalam pengelolaan kotanya.{" "}
          </p>
          <p>
            Jakarta telah mengoptimalkan pemanfaatan teknologi demi
            memaksimalkan pelayanan publik yang lebih efektif dan efisien{" "}
          </p>
          <div class="title-box">
            <h4>Jakarta</h4>
          </div>
        </div>
        <div class="card">
          <img src="/image/CitySurabaya.svg" alt="" />
          <p>
            Surabaya, merupakan kota metropolitan yang terletak di provinsi Jawa
            Timur. Kota Surabaya telah menerapkan inovasi Smart City
          </p>
          <p>
            Surabaya, melalui kebijkannya telah membangun kota ini dengan
            menggunakan aspek-aspek dalam smart city
          </p>
          <div class="title-box">
            <h4>Surabaya</h4>
          </div>
        </div>
        <div class="card">
          <img src="/image/CityMedan.svg" alt="" />
          <p>
            Medan, merupakan kota metropolitan yang terletak di provinsi
            Sumatera Utara. Kota Medan telah menerapkan inovasi Smart City
          </p>
          <p>
            Medan, melalui kebijakan oleh pemerintahnya telah mewujudkan kota
            ini menjadi smart city dengan berbagai aspek{" "}
          </p>
          <div class="title-box">
            <h4>Medan</h4>
          </div>
        </div>
      </div>
      <h1>Cities</h1>
    </section>
  );
};

export default Cities;
