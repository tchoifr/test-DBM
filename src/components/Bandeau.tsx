import React from "react";
import "../../src/sass/bandeau.scss";
const Bandeau = () => {
  return (
    <div className="w-full h-12 bg-white flex items-center justify-end px-4 border-b border-gray-200">
      <div className="flex items-center space-x-5 mr-6">
        <div className="text-2xl font-bold text-gray-800 mr-3 ">
          <svg
            width="19.83"
            height="14.45"
            viewBox="0 0 512 376"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M452 336H60C48.972 336 40 327.028 40 316V72.264L256 232.926L472 72.264V316C472 327.028 463.028 336 452 336V336ZM448.353 40L256 183.074L63.647 40H448.353ZM452 0H60C26.916 0 0 26.916 0 60V316C0 349.084 26.916 376 60 376H452C485.084 376 512 349.084 512 316V60C512 26.916 485.084 0 452 0V0Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex items-center">
          <svg
            width="14.32"
            height="14.32"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_0_219"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="14"
              height="14"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0H14V14H0V0Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_0_219)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.8766 9.1894C12.0195 9.1894 11.1779 9.05534 10.3803 8.79178C9.98955 8.65849 9.50917 8.78077 9.27066 9.02573L7.69646 10.2141C5.87089 9.23956 4.7464 8.11541 3.78518 6.30354L4.93857 4.77039C5.23819 4.47114 5.3457 4.03401 5.2169 3.62385C4.95225 2.82213 4.81779 1.98093 4.81779 1.12343C4.81779 0.503963 4.31386 0 3.69443 0H1.12335C0.503964 0 0 0.503964 0 1.12339C0 8.22365 5.77635 14 12.8766 14C13.496 14 14 13.496 14 12.8766V10.3127C14 9.69336 13.496 9.1894 12.8766 9.1894"
                fill="black"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex space-x-6">
        <a href="/actualites" className="font-inter">
          Actualités
        </a>
        <a href="/mon-espace" className="font-inter">
          Mon espace
        </a>
      </div>
    </div>
  );
};

export default Bandeau;
