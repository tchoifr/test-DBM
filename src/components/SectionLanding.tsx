import React from "react";
import TitleHeader from "./TitleHeader";
import Map from "./Map";
import SearchMap from "./SearchMap";
import Bull from "./Bull";

const SectionLanding = () => {
  return (
    <div>
      <div className="relative size-container">
        <TitleHeader />
        <Map />
        <SearchMap />
        <Bull />
      </div>
    </div>
  );
};

export default SectionLanding;
