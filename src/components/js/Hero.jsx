import React from "react";
import heroIMG from "../assets/images/mainpic.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero">
    <section className="hero-wrapper">
      <div className="hero-container container py-3">
        {/* ------------------------------ Left Section ------------------------------ */}
        <motion.div
          className="hero-left"
          //info: framer-motion animation
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <div className="bg-gradient"></div>
          <div className="orange-circle"></div>
          <h1>
          Your Digital<br />Transformation <br /> Partner
          </h1>
          <p className="ch-small">Unlocking Future Possibilities Through Innovative Software Solutions. Your Trusted Guide in the Journey of Digital Transformation.</p>

          <div className="search-bar--wrapper">
            <div className="search-bar">
              <HiLocationMarker color="var(--clr-accent-400)" size={25} />
              <input type="text" />
              <button>Search</button>
            </div>
            
          </div>

          <div className="c-wrapper pt-3">
            <div className="c-container">
              <span>
                <CountUp start={90} end={100} duration={4} />
                <span>+</span>
              </span>
              <span>Projects Compleated</span>
            </div>
            <div className="c-container">
              <span>
                <CountUp start={85} end={100} duration={4} />
                <span>+</span>
              </span>
              <span>Happy Customer</span>
            </div>
            <div className="c-container">
              <span>
                <CountUp start={88} end={99} duration={4} />
                <span>%</span>
              </span>
              <span>Satisfied</span>
            </div>
          </div>
        </motion.div>
        {/* ------------------------------ Right Section ----------------------------- */}
        <motion.div
          className="hero-right"
          //info: framer-motion animation
          initial={{ x: "5rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <div className="img-container">
            <img src={heroIMG} alt="Hero Image" />
          </div>
        </motion.div>
      </div>
    </section>
    </section>
  );
}
