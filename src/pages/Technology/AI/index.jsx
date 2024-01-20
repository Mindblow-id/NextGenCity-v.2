import React, { useEffect, useRef } from "react";
import Navbar from "../../../component/Navbar";
import "./style.css";
import Footer from "../../../component/Footer";

const ArtificialInteligence = () => {
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
      <div className="ai-first ai-bg-video">
        <video ref={videoRef} className="ai-video" autoPlay muted loop>
          <source src="/mp4/Ai.mp4" />
        </video>
        <h1 className="ai-title">Artificial Inteligent</h1>
      </div>
      <div className="ai-second">
        <img src="/image/technology/AI-Screen2.svg" className="ai-bg" alt="" />
        <h1>Apa itu Artificial Intelligent?</h1>
        <p>
          AI atau Artificial Intelligence (Intelejensia Buatan) adalah cabang
          ilmu komputer yang berfokus pada pengembangan sistem yang dapat
          melakukan tugas-tugas yang memerlukan kecerdasan manusia.
        </p>
      </div>
      <div className="ai-third">
        <h1>Contoh Penerapan AI Dalam Smart City</h1>
        <div className="ai-image-container">
          <img src="/image/technology/PLL.svg" alt="" />
          <img src="/image/technology/KMA.svg" alt="" />
          <img src="/image/technology/SPPi.svg" alt="" />
        </div>
      </div>

      <div className="ai-fourth">
        <h1>Other Technology</h1>
        <div className="ot-card-container">
          <div className="ot-card">
            <h2>Internet of Things</h2>
            <img src="/image/technology/interofthings.svg" alt="" />
            <a className="ot-button" href="/technology/iot">
              Selengkapnya
            </a>
          </div>
          <div className="mid-card ot-card">
            <h2>Wearable Technology</h2>
            <img src="/image/technology/wearabletech.svg" alt="" />
            <a className="ot-button" href="/technology/ai">
              Selengkapnya
            </a>
          </div>
          <div className="ot-card">
            <h2>Cloud Computing</h2>
            <img src="/image/technology/clouddomputing.svg" alt="" />
            <a className="ot-button" href="/technology/cloudcomputing">
              Selengkapnya
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ArtificialInteligence;
