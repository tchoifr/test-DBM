import React from "react";
import dbm from "../assets/images/DBM.png";
import btnRetour from "../assets/images/btnRetour.png";
const BandeauFooter = () => {
  return (
    <div className="flex h-16 items-center justify-around mt-10 border bg-white">
      <div className="flex pl-60">
        <p className="p-5">Copyright © 2021 Portail du bien-être</p>
        <p className="p-5">Mentions légales</p>
        <p className="p-5">Politique de confidentialité des données</p>
      </div>
      <img src={dbm} alt="" />
      <img src={btnRetour} alt="" />
    </div>
  );
};

export default BandeauFooter;
