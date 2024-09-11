import React from "react";
import logoPortail from "../assets/images/logo.webp";
import "../sass/logo.scss";
const Logo = () => {
  return (
    <div className="position bloc-logo">
      <img className="logo-img" src={logoPortail} alt="Logo" />
    </div>
  );
};

export default Logo;
