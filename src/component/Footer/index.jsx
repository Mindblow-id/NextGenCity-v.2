import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <h1 className="footer-logo">NGCT</h1>
      <h2>Contact Us</h2>
      <div className="contact">
        <a href="#">
          <img src="/image/instagram.svg " alt="instagram" />
        </a>
        <a href="#">
          <img src="/image/gmail.svg " alt="gmail" />
        </a>
        <a href="#">
          <img src="/image/linkedin.svg " alt="linkedin" />
        </a>
      </div>
      <div className="copyright ">
        <h3>© Copyright 2023</h3>
      </div>
    </footer>
  );
};

export default Footer;
