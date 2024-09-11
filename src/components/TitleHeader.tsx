import React from "react";

const TitleHeader = () => {
  return (
    <div>
      <span className="flex text-center flex-col text-white">
        <h1 className="font-montserrat mt-10 text-[60px] font-bold leading-[50px] tracking-[0.226px]">
          Une parenthèse de bien-être
        </h1>{" "}
        <br />
        <h2 className="font-inter-white text-[20px] font-semibold leading-[29px] tracking-[0.333px] text-center">
          Le portail du bien-être des centres en
        </h2>
        <h2 className="font-inter-white text-[20px] font-semibold leading-[29px] tracking-[0.333px] text-center">
          Auvergne-Rhône-Alpes
        </h2>
      </span>
    </div>
  );
};

export default TitleHeader;
