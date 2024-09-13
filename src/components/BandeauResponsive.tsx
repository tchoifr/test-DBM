import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
const BandeauResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" h-12 bg-white flex items-center justify-between px-4 border-b border-gray-200">
      <div>
        <img
          style={{
            width: "141px",
            height: "28px",
            objectFit: "cover",
          }}
          src={logo}
          alt=""
        />
      </div>

      <div>
        <button
          onClick={toggleMenu}
          className="text-gray-600 focus:outline-none"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
              fill="#000000"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-12 right-0 mt-2 bg-white border border-gray-200 shadow-lg">
          <ul className="py-2 text-sm">
            <li>
              <a href="/centre1" className="block px-4 py-2 hover:bg-gray-100">
                Centre 1
              </a>
            </li>
            <li>
              <a href="/centre2" className="block px-4 py-2 hover:bg-gray-100">
                Centre 2
              </a>
            </li>
            <li>
              <a href="/centre3" className="block px-4 py-2 hover:bg-gray-100">
                Centre 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BandeauResponsive;
