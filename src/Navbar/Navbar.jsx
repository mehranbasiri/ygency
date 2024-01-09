import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import NavLinks from "./NavLinks";
import { IoSearch } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";

import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const scrollToTopButton = document.getElementsByClassName("navbar");

  const scrollFunc = () => {
    let y = window.scrollY;

    if (y > 50) {
      scrollToTopButton.classList = "nav-bg-active";
      console.log("true");
      setNavBg(true);
    } else {
      scrollToTopButton.classList = "nav-bg-none";
      console.log("false");
      setNavBg(false);
    }
  };

  window.addEventListener("scroll", scrollFunc);

  return (
    <nav className={navBg ? "navbar nav-bg-active" : "navbar nav-bg-none"}>
      <div>
        <img src={Logo} alt="logo" className="logo-image" />
      </div>
      <div
        className="navbar-section
"
      >
        <ul>
          <NavLinks />
        </ul>
        <div className="search-box">
          <IoSearch />
        </div>
        <div className="nav-button">
          <IoGridOutline />
        </div>
        {/* Mobile nav */}
        {/* <ul
          className={` navbar-mobile
        ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />

          <div className="py-5">
            <button className="bg-primary text-white  px-6 py-2 rounded-full">
              Get Started
            </button>{" "}
          </div>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
