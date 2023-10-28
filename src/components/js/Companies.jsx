import React from "react";
import C1 from "../assets/images/prologis.png";
import C2 from "../assets/images/tower.png";
import C3 from "../assets/images/equinix.png";
import C4 from "../assets/images/realty.png";
import C5 from "../assets/images/dropbox.png";
import C6 from "../assets/images/nortan.png";
import C7 from "../assets/images/Autodesk.png";
import C8 from "../assets/images/HubSpot.png";

export default function Companies() {
  return (
    <section id="companies">
    <section className="company-wrapper">
      <div className="company-container container py-3">
        <img src={C1} alt="Company Logo" />
        <img src={C2} alt="Company Logo" />
        <img src={C3} alt="Company Logo" />
        <img src={C4} alt="Company Logo" />
      </div>
      <div className="company-container container py-3">
      <img src={C5} alt="Company Logo"/>
      <img src={C6} alt="Company Logo"/>
      <img src={C7} alt="Company Logo"/>
      <img src={C8} alt="Company Logo"/>
      </div>
    </section>
    </section>
  );
}
