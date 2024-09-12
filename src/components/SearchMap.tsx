import React from "react";
import "../sass/searchMap.scss";

const SearchMap = () => {
  return (
    <div className="position-container">
      <div className="size-card w-full max-w-md bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-center font-bold leading-8 pt-10 pb-4 pl-16 pr-16 text-black">
            Trouvez un centre près de chez vous !
          </h2>
        </div>

        <div className="">
          <div className="custom-select-wrapper">
            <select className="custom-select block w-full mt-2 p-4 border-t border-gray-300 rounded-none bg-white text-[#919191]">
              <option value="">Département</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
            <svg
              className="custom-select-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <path d="M6 9l-4-4h8l-4 4z" fill="#919191" />
            </svg>
          </div>
        </div>

        <div className="">
          <div className="custom-select-wrapper">
            <select className="custom-select block w-full mt-2 p-4 border-t border-gray-300 rounded-none bg-white text-[#919191]">
              <option value="">Prestatations</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
            <svg
              className="custom-select-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <path d="M6 9l-4-4h8l-4 4z" fill="#919191" />
            </svg>
          </div>
        </div>

        <div className="">
          <div className="custom-select-wrapper">
            <select className="custom-select block w-full mt-2 p-4 border-t border-b border-gray-300 rounded-none bg-white text-[#919191]">
              <option value="">Disponibilité</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
            <svg
              className="custom-select-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <path d="M6 9l-4-4h8l-4 4z" fill="#919191" />
            </svg>
          </div>
        </div>

        <div className="p-10">
          <button className="w-full mt-4 p-2 bg-[#1CA5DD] text-white font-semibold rounded-lg shadow hover:bg-[#1598C9] focus:outline-none focus:ring-2 focus:ring-blue-500">
            Je trouve un centre
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchMap;
