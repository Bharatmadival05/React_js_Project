import React from "react";
import "swiper/css";
import data from "../utils/slider.json";

export default function Services(
) {
  return (
    <section id="service">
      <section className="r-wrapper">
        <div className="r-container container">
          <div className="r-title flow-xsm">
            <h4>Why Us?</h4>
            <h3>Explore our Services</h3>
          </div>
          <img src="/assets/images/S1.png" alt="HI"/>
          <div className="r-slider py-2">
              {data.map((card, i) =>{console.log("Image path:", card.images); return (
                
                  <div className="r-card">
                    <div className="explore-btn">
                      <span>Explore More</span>
                      <div className="r-card-image">
                        <img src={card.images} alt=""/>
                      </div>
                      <div className="r-card-content flow-xsm">
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </div>
              )})}
          </div>
        </div>
      </section>
    </section>
  );
}
