import React, { useEffect, useRef } from "react";
import Navbar from "../../../component/Navbar";
import "./style.css";

const AI = () => {
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
      <div className="video-background">
        <video ref={videoRef} className="video" autoPlay muted loop>
          <source src="/mp4/Ai.mp4"/>
        </video>
      </div>
    </>
  );
};

export default AI;
