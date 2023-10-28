import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../assets/icons/logo3.png";

export default function Header() {
  return (
    <section className="h-wrapper ">
      <div className="h-container container">
        <img src={logo} alt="logo" width="120" />

        <div className="h-nav-wrapper">
          <nav className="h-menu">
            <Link to="hero" spy={true} smooth={true} duration={300} className="h-menu_item">
              Home
            </Link>
            <Link to="service" spy={true} smooth={true} duration={300} className="h-menu_item">
              Service
            </Link>
            <Link to="companies" spy={true} smooth={true} duration={300} className="h-menu_item">
              Portfolio
            </Link>
            <a href="#" className="h-menu_item">
              Get Started
            </a>
          </nav>
          <Link to="contact" spy={true} smooth={true} duration={300} className="btn">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
