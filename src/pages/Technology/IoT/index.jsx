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
      <div className="iot-first iot-bg-video">
        <video ref={videoRef} className="iot-video" autoPlay muted loop>
          <source src="/mp4/IoT.mp4" />
        </video>
        <h1 className="iot-title">Internet Of Things</h1>
      </div>
      <div className="iot-second">
        <img
          src="/image/technology/IoT-Screen2.svg"
          className="iot-bg"
          alt=""
        />
        <h1>Apa itu Internet of Things?</h1>
        <p>
          Internet of Things (IoT) adalah konsep di mana objek-objek fisik atau
          perangkat yang biasanya tidak terhubung ke internet, seperti peralatan
          rumah tangga, kendaraan, atau sensor-sensor industri, dapat saling
          berkomunikasi dan berbagi data melalui jaringan internet.
        </p>
      </div>
      <div className="iot-third">
        <h1>Contoh Penerapan IoT Dalam Smart City</h1>
        <div className="iot-mainframe-img">
          <div className="iot-img-container">
            <img src="/image/technology/SPL.svg" alt="" />
            <p>Sensor Pemantauan Lingkungan</p>
          </div>
          <div className="iot-outerframe-img">
            <div className="iot-secondframe-img">
              <div className="iot-img-container">
                <img src="/image/technology/MSC.svg" alt="" />
                <p>Manajemen Sampah Cerdas</p>
              </div>
              <div className="iot-img-container">
                <img src="/image/technology/SPA.svg" alt="" />
                <p>Sistem Pemantauan Air</p>
              </div>
            </div>
            <div className="iot-secondframe-img">
              <div className="iot-img-container">
                <img src="/image/technology/STP.svg" alt="" />
                <p>Sistem Transportasi Pintar</p>
              </div>
              <div className="iot-img-container">
                <img src="/image/technology/IK.svg" alt="" />
                <p>Infrastruktur Kesehatan</p>
              </div>
            </div>
          </div>
        </div>
        <div className="iot-mainframe-img">
          <div className="iot-img-container">
            <img src="/image/technology/RRL.svg" alt="" />
            <p>Rumah Ramah Lingkungan</p>
          </div>
          <div className="iot-outerframe-img">
            <div className="iot-secondframe-img">
              <div className="iot-img-container">
                <img src="/image/technology/SKP.svg" alt="" />
                <p>Sistem Keamanan dan Pengawasan</p>
              </div>
              <div className="iot-img-container">
                <img src="/image/technology/PJP.svg" alt="" />
                <p>Penerangan Jalan Pintar</p>
              </div>
            </div>
            <div className="iot-secondframe-img">
              <div className="iot-img-container">
                <img src="/image/technology/SPC.svg" alt="" />
                <p>Sensor Pemantauan Cuaca</p>
              </div>
              <div className="iot-img-container">
                <img src="/image/technology/SMP.svg" alt="" />
                <p>Sistem Manajemen Parkir </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="iot-fourth">
        <h1>
          MEWUJUDUKAN SMART CITY YANG IDEAL MENGGUNAKAN INTERNET OF THINGS
        </h1>
        <img src="/image/technology/IoT Screen-4.svg" alt="" />
        <h3>Mari bersama wujudkan smart city yang lebih pintar</h3>
      </div>
      <div className="iot-fourth">
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
            <h2>Artificial Intelligent</h2>
            <img src="/image/technology/ai.svg" alt="" />
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

export default WearableTechnology;
