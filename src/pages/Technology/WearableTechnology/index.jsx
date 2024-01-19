import React, { useEffect, useRef } from "react";
import Navbar from "../../../component/Navbar";
import "./style.css";
import Footer from "../../../component/Footer";

const WearableTechnology = () => {
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
      <div className="wt-first wt-bg-video">
        <video ref={videoRef} className="wt-video" autoPlay muted loop>
          <source src="/mp4/Wearable.mp4" />
        </video>
        <h1 className="wt-title">Wearable Technology</h1>
      </div>
      <div className="wt-second">
        <img
          src="/image/technology/wearable-screen2.svg"
          className="wt-bg"
          alt=""
        />
        <h1>Apa itu Artificial Intelligent?</h1>
        <p>
          Wearable technology merujuk pada perangkat elektronik yang dikenakan
          atau dipasang pada tubuh pengguna, biasanya sebagai aksesori pribadi.
          Dalam konteks penerapan Smart City, wearable technology dapat
          digunakan sebagai alat pemantauan, pengukuran, atau interaksi yang
          terintegrasi dengan infrastruktur perkotaan untuk meningkatkan
          efisiensi, keamanan, dan kualitas hidup.
        </p>
      </div>
      <div className="wt-third">
        <h1>Contoh Penerapan AI Dalam Smart City</h1>
        <div className="wt-image-container">
          <img src="/image/blog1-pict.webp" alt="" />
          <img src="/image/blog1-pict.webp" alt="" />
        </div>
        <p>
          Penggunaan Smart Watch dan juga Smart Phone adalah beberapa contoh
          dari penerapan Wearable Technology yang digunakan dalam kehidupan
          sehari-hari yang menyangkut dengan konsep smart city.
        </p>
        <p>
          Penggunaan kedua device tersebut tentu akan membantu kehidupan manusia
          dari aspek teknologi tentunya dan mempermudah kegiatan sehari-hari.
        </p>
      </div>

      <div className="wt-fourth">
        <h1>Other Technology</h1>
        <div className="ot-card-container">
          <div className="ot-card">
            <h2>Internet of Things</h2>
            <img src="/image/technology/interofthings.svg" alt="" />
            <a className="ot-button" href="/technology/iot">Selengkapnya</a>
          </div>
          <div className="mid-card ot-card">
            <h2>Artificial Intelligent</h2>
            <img src="/image/technology/ai.svg" alt="" />
            <a className="ot-button" href="/technology/ai">Selengkapnya</a>
          </div>
          <div className="ot-card">
            <h2>Cloud Computing</h2>
            <img src="/image/technology/clouddomputing.svg" alt="" />
            <a className="ot-button" href="/technology/cloudcomputing">Selengkapnya</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WearableTechnology;
