import React from "react";
import Carousel from "./Carousel";
import PrestationCarousel from "./PrestationCarousel";
import "../sass/carousel.scss";
const SectionCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="prestation-carousel">
        <PrestationCarousel />
      </div>
      <div className="main-carousel">
        <Carousel />
      </div>
    </div>
  );
};

export default SectionCarousel;
