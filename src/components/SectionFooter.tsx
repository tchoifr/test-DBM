import React from "react";
import PartenairesFooter from "./PartenairesFooter";
import ContactFooter from "./ContactFooter";
import BandeauFooter from "./BandeauFooter";
import "../sass/bgUrl.scss";
const SectionFooter = () => {
  return (
    <div className="bg-footer">
      <PartenairesFooter />
      <ContactFooter />
      <BandeauFooter />
    </div>
  );
};

export default SectionFooter;
