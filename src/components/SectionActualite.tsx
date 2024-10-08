import React from "react";
import TitleActualite from "./TitleActualite";
import CardsDataActualite from "./CardsDataActualite";
import "../sass/actualite.scss";
import PlusDactualites from "./PlusDactualites";
const SectionActualite: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 gradient-actualite">
      <TitleActualite />
      <CardsDataActualite />
      <PlusDactualites />
    </div>
  );
};

export default SectionActualite;
