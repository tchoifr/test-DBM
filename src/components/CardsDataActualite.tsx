import React from "react";
import CardActualite from "./CardActualite";
import actualite1 from "../assets/images/actualite/actualite1.png";
import actualite2 from "../assets/images/actualite/actualite2.png";
import actualite3 from "../assets/images/actualite/actualite3.png";
import actualite4 from "../assets/images/actualite/actualite4.png";

const cardsData = [
  {
    imageSrc: actualite1,
    description: "Les bienfaits des bains nordiques.",
    link: "#",
  },
  {
    imageSrc: actualite2,
    description: "Plaisir et santé, les bienfaits reconnus du massage",
    link: "#",
  },
  {
    imageSrc: actualite3,
    description:
      "5 façons de profiter d’un spa en famille, entre amis ou en solo",
    link: "#",
  },
  {
    imageSrc: actualite4,
    description:
      "Tout ce que vous devez savoir sur l’utilisation des huiles de massages ",
    link: "#",
  },
];

const CardsDataActualite: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {cardsData.map((card, index) => (
        <CardActualite
          key={index}
          imageSrc={card.imageSrc}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardsDataActualite;
