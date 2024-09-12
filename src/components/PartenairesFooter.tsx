import React from "react";
import "../sass/partenaire.scss";
import puy from "../assets/images/partenaires/puyDeDome.png";
import speedo from "../assets/images/partenaires/speedo.png";
import vichy from "../assets/images/partenaires/vichy.png";
import region from "../assets/images/partenaires/region.png";
import biotherm from "../assets/images/partenaires/biotherm.png";

const PartenairesFooter = () => {
  return (
    <div className="responsive-partenaire">
      <h2>Nos partenaires</h2>
      <div className="partenaires-images">
        <img src={puy} alt="Puy de Dôme" />
        <img src={speedo} alt="Speedo" />
        <img src={vichy} alt="Vichy" />
        <img src={region} alt="Région" />
        <img src={biotherm} alt="Biotherm" />
      </div>
    </div>
  );
};

export default PartenairesFooter;
