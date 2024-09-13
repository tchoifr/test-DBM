import React from "react";
import TitleHeader from "./TitleHeader";
import Map from "./Map";
import SearchMap from "./SearchMap";

const SectionLanding = () => {
  return (
    <div className="bg-landing">
      <div className="relative size-container">
        <TitleHeader />
        <SearchMap />
        <Map />
      </div>
    </div>
  );
};

export default SectionLanding;
