import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="nav">
      <h1 class="nav-logo">NGCT</h1>
      <ul class="navigation nav-hidden">
        <li>
          <a href="index.html"> Home</a>
        </li>
        <li>
          <a href="#about"> About</a>
        </li>
        <li>
          <a href="#technology"> Technology</a>
        </li>
        <li>
          <a href="#effect"> Effect</a>
        </li>
        <li>
          <a href="#example"> Example</a>
        </li>
        <li>
          <a href="blog.html"> Blog</a>
        </li>
      </ul>
      <div id="button" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
