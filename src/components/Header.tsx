import React from "react";
import Navbar from "./Navbar";
import Bandeau from "./Bandeau";
import "../sass/sizeBull.scss";
import Bull from "./Bull";
import TitleHeader from "./TitleHeader";
import Map from "./Map";
const Header = () => {
  return (
    <div>
      <Bandeau />
      <Navbar />
      <div className="relative size-container">
        <TitleHeader />
        <Map />
        <Bull />
      </div>
    </div>
  );
};

export default Header;
