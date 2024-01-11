import "./style.css";
import React from "react";
import Navbar from "../../component/Navbar";
import About from "../../component/About";
import Why from "../../component/Why";
import Technology from "../../component/Technology";
import Effect from "../../component/Effect";
import Cities from "../../component/Cities";
import Footer from "../../component/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <header class="hero">
        <div class="header-text">
          <h1 class="depth">NextGenCity</h1>
          <h4>SOLUTIONS FOR THE NEXT SMART CITY</h4>
        </div>
      </header>
      <About />
      <Why />
      <Technology />
      <div className="background">
        <Effect />
        <Cities />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
