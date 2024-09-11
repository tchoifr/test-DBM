import React, { useState } from "react";
import "../../src/sass/navbar.scss"; // Si nécessaire pour des styles Sass supplémentaires
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Empêche le comportement par défaut du bouton
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav className=" p-4">
        <div className="flex justify-between items-center">
          <div className="relative">
            <Logo />
          </div>
          <ul className="flex space-x-4 relative index-nav">
            <li className="relative mr-5 pl-link">
              <button
                id="dropdownDefaultButton"
                className="text-white bg-transparent inline-flex items-center"
                onClick={toggleDropdown}
              >
                Nos centres
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  className={`ml-2 mt-1 transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  width="20"
                  height="20"
                >
                  <path d="M7 10l5 5 5-5" />
                </svg>
              </button>

              {/* Liste déroulante */}
              {isDropdownOpen && (
                <div
                  id="dropdown"
                  className="absolute bg-gray-800 text-white mt-2 py-2 w-48 border border-gray-700"
                >
                  <ul className="py-2 text-sm">
                    <li>
                      <a
                        href="/centre1"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Centre 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="/centre2"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Centre 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="/centre3"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Centre 3
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {/* Autres éléments de navigation */}
            <li className="pl-link">
              <a href="/services" className="text-white size-link ">
                Nos formules bien être
              </a>
            </li>
            <li className="pl-link">
              <a href="/contact" className="text-white size-link ">
                Nos prestations
              </a>
            </li>
            <li className="pl-link">
              <a href="/contact" className="text-white size-link ">
                Offrez un bon cadeau
              </a>
            </li>
            <li className="pl-link">
              <a href="/contact" className="text-white size-link ">
                Qui sommes nous ?
              </a>
            </li>
            <li className="pl-link">
              <a
                href="/contact"
                className="text-white size-link fond-lien-structure "
              >
                Trouver une structure
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white size-link fond-lien-reservez "
              >
                Réservez un soin
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
