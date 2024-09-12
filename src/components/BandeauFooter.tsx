import React from "react";
import dbm from "../assets/images/DBM.png";
import btnRetour from "../assets/images/btnRetour.png";

const BandeauFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex h-16 items-center justify-around mt-10 border bg-white">
      <div className="flex pl-60">
        <p className="p-5">Copyright © 2021 Portail du bien-être</p>
        <p className="p-5">Mentions légales</p>
        <p className="p-5">Politique de confidentialité des données</p>
      </div>
      <img src={dbm} alt="DBM Logo" />
      <img
        src={btnRetour}
        alt="Retour en haut"
        className="cursor-pointer"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default BandeauFooter;
