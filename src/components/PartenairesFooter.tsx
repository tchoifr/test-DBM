import React from "react";
import puy from "../assets/images/partenaires/puyDeDome.png";
import speedo from "../assets/images/partenaires/speedo.png";
import vichy from "../assets/images/partenaires/vichy.png";
import region from "../assets/images/partenaires/region.png";
import biotherm from "../assets/images/partenaires/biotherm.png";

const PartenairesFooter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="pt-40 text-[38px] font-medium leading-[50px] tracking-[0.63px] text-center text-black">
        Nos partenaires
      </h2>
      <div className="partenaires-images flex justify-center">
        <img
          className="p-8 w-35 h-35 object-contain"
          src={puy}
          alt="Puy de Dôme"
        />
        <img
          className="p-8 w-35 h-35 object-contain"
          src={speedo}
          alt="Speedo"
        />
        <img className="p-8 w-35 h-35 object-contain" src={vichy} alt="Vichy" />
        <img
          className="p-8 w-35 h-35 object-contain"
          src={region}
          alt="Région"
        />
        <img
          className="p-8 w-35 h-35 object-contain"
          src={biotherm}
          alt="Biotherm"
        />
      </div>
    </div>
  );
};

export default PartenairesFooter;
