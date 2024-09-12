import React from "react";
import Carousel from "./Carousel";
import PrestationCarousel from "./PrestationCarousel";

const SectionCarousel = () => {
  return (
    <div className="flex h-full bg-white pt-32 pb-pt-32">
      {" "}
      <div className="w-1/4 p-2 flex items-center justify-center">
        <PrestationCarousel />
      </div>
      <div className="w-3/4 ">
        <Carousel />
      </div>
    </div>
  );
};

export default SectionCarousel;
