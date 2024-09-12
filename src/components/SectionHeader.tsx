import React from "react";
import Navbar from "./Navbar";
import Bandeau from "./Bandeau";
import "../sass/sizeBull.scss";

const SectionHeader = () => {
  return (
    <div className="relative">
      <Bandeau />
      <div
        style={{
          position: "absolute",
          width: "100%",
        }}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default SectionHeader;
