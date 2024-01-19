import React, { useEffect, useRef } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import "./style.css";

const CloudComputing = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      video.currentTime = 0;
      video.play();
    };
    video.addEventListener("ended", handleVideoEnd);
    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="tcc-first tcc-bg-video">
        <video ref={videoRef} className="tcc-video" autoPlay muted loop>
          <source src="/mp4/cloud.mp4" />
        </video>
        <h1 className="tcc-title">Cloud Computing</h1>
      </div>
      <div className="tcc-second">
        <h1>Apa itu Cloud Computing?</h1>
        <p>
          Cloud computing merupakan sebuah sistem informasi yang memungkinkan
          kemudahan akses kepada komponen sumber daya seperti server, aplikasi,
          dan database melalui jaringan internet.
        </p>
      </div>
      <div className="tcc-third">
        <div className="tcc-first-container">
          <img src="/image/blog1-pict.webp" alt="" />
          <div className="tcc-text-container">
            <p>
              Platform pembelajaran digital yang di-host di Cloud, memungkinkan
              akses ke konten pendidikan dari berbagai perangkat.
            </p>
            <p>Ada beberapa manfaat:</p>
            <ul>
              <li>Akses pendidikan yang lebih merata.</li>
              <li>Kolaborasi dan pembelajaran jarak jauh.</li>
              <li>Peningkatan efisiensi administratif.</li>
            </ul>
          </div>
        </div>
        <div className="tcc-second-container">
          <img src="/image/blog1-pict.webp" alt="" />
          <div className="tcc-text-container">
            <p>
              Portal pelayanan publik yang di-host di Cloud, menyediakan
              informasi dan layanan online kepada warga.
            </p>
            <p>Ada beberapa manfaat:</p>
            <ul>
              <li>Akses layanan publik secara cepat dan efisien.</li>
              <li>Transparansi dan akuntabilitas dalam penyediaan layanan.</li>
              <li>Pengurangan waktu antrian dan birokrasi.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="tcc-fourth">
        <h1>Other Technology</h1>
        <div className="ot-card-container">
          <div className="ot-card">
            <h2>Wearable Technology</h2>
            <img src="/image/technology/wearabletech.svg" alt="" />
            <a className="ot-button" href="/technology/wearabletechnology">
              Selengkapnya
            </a>
          </div>
          <div className="mid-card ot-card">
            <h2>Internet of Things</h2>
            <img src="/image/technology/interofthings.svg" alt="" />
            <a className="ot-button" href="/technology/iot">
              Selengkapnya
            </a>
          </div>
          <div className="ot-card">
            <h2>Artificial Intelligent</h2>
            <img src="/image/technology/clouddomputing.svg" alt="" />
            <a className="ot-button" href="/technology/ai">
              Selengkapnya
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CloudComputing;
