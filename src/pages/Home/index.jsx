import "./style.css";
import React from "react";
import Navbar from "../../component/Navbar";
// import About from "../../component/About";


function Home() {
  return (
    <div>
      <Navbar />
      <header className="hero">
        <div className="header-text">
          <h1>NextGenCity</h1>
          <h4>SOLUTIONS FOR THE NEXT SMART CITY</h4>
        </div>
      </header>
    </div>
  );
}

export default Home;
