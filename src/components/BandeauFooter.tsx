import React from "react";
import dbm from "../assets/images/DBM.png";
import btnRetour from "../assets/images/btnRetour.png";
import "../sass/footer.scss";
const BandeauFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-around flex-wrap mt-10 border bg-white container-responsive-bandeau-footer">
      <div className="flex flex-wrap pl-60 bloc-responsive-text-bandeau-footer">
        <p className="p-5">Copyright © 2021 Portail du bien-être</p>
        <p className="p-5">Mentions légales</p>
        <p className="p-5">Politique de confidentialité des données</p>
      </div>
      <img className="p-2" src={dbm} alt="DBM Logo" />
      <img
        src={btnRetour}
        alt="Retour en haut"
        className="cursor-pointer p-2"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default BandeauFooter;
