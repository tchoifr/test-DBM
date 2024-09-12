import React from "react";
import Navbar from "./Navbar";
import Bandeau from "./Bandeau";
import "../sass/sizeBull.scss";

const SectionHeader = () => {
  return (
    <div>
      <Bandeau />
      <Navbar />
    </div>
  );
};

export default SectionHeader;
