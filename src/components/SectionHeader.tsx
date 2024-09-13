import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Bandeau from "./Bandeau";
import BandeauResponsive from "./BandeauResponsive";

const SectionHeader = () => {
  // Initialiser avec la condition de la largeur de l'écran
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1440);

  useEffect(() => {
    // Fonction de mise à jour de l'état en fonction de la taille de l'écran
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1440);
    };

    // Ajouter un écouteur d'événements pour la redimension
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {isWideScreen ? <Bandeau /> : <BandeauResponsive />}

      <div
        style={{
          position: "absolute",
          width: "100%",
        }}
      >
        {isWideScreen ? <Navbar /> : null}
      </div>
    </div>
  );
};

export default SectionHeader;
