import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let lastScrollTop = 0;
    let navbar = document.getElementById("nav");
    window.addEventListener("scroll", function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
        lastScrollTop = scrollTop;
      } else {
        navbar.style.top = "0";
        lastScrollTop = scrollTop;
      }
    });
  }, []);

  const onLinkClick = () => {
    setOpen(!open);
  }

  return (
    <nav id="nav">
      <h1 class="nav-logo">NGCT</h1>
      <ul class={`navigation ${open ? "nav-show" : "nav-hidden"}`}>
        <li>
          <Link onClick={onLinkClick} to="/">Home</Link>
        </li>
        <li>
          <a onClick={onLinkClick} href="#about"> About</a>
        </li>
        <li>
          <a onClick={onLinkClick} href="#technology"> Technology</a>
        </li>
        <li>
          <a onClick={onLinkClick} href="#effect"> Effect</a>
        </li>
        <li>
          <a onClick={onLinkClick} href="#example"> Example</a>
        </li>
        <li>
          <Link onClick={onLinkClick} to="/blog">Blog</Link>
        </li>
      </ul>
      <div
        id="button"
        onClick={() => setOpen((prev) => !prev)}
        class={`hamburger ${open ? "active" : "not-active"}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
