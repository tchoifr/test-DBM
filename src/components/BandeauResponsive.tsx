import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import phone from "../assets/images/phone.png";
import mail from "../assets/images/mail.png";

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
          alt="Logo"
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
        <div
          style={{
            zIndex: "1000",
          }}
          className="absolute top-12 right-0 bg-white border border-gray-200 shadow-lg"
        >
          <ul className="py-2 text-sm p-5">
            <li>
              <label htmlFor="centres" className="font-bold block px-4 py-2">
                Nos centres
              </label>
              <select
                id="centres"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => {
                  const selectedCentre = e.target.value;
                  if (selectedCentre) {
                    window.location.href = selectedCentre;
                  }
                }}
              >
                <option value="">Sélectionner un centre</option>
                <option value="/centre1">Centre 1</option>
                <option value="/centre2">Centre 2</option>
                <option value="/centre3">Centre 3</option>
              </select>
            </li>

            <li>
              <a
                href="/formules-bien-etre"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Nos formules bien être
              </a>
            </li>

            <li>
              <a
                href="/presentations"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Nos présentations
              </a>
            </li>

            <li>
              <a
                href="/offrez-bon-cadeau"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Offrez un bon cadeau
              </a>
            </li>

            <li>
              <a
                href="/qui-sommes-nous"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Qui sommes nous ?
              </a>
            </li>

            <li>
              <button
                style={{ backgroundColor: "#710d82" }}
                className="block px-4 py-2 m-2 w-full text-center text-white"
              >
                Trouver une Structure
              </button>
            </li>

            <li>
              <button
                style={{ backgroundColor: "#1ca5dd" }}
                className="block px-4 py-2 m-2 w-full text-center text-white"
              >
                Réserver un soin
              </button>
            </li>

            <li>
              <a
                href="/actualites"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Actualités
              </a>
            </li>

            <li>
              <a
                href="/mon-espace"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Mon espace
              </a>
            </li>
          </ul>
          <div className="flex justify-center">
            <img
              className="w-4 h-4 m-2"
              style={{ objectFit: "contain" }}
              src={phone}
              alt="Téléphone"
            />
            <img
              className="w-4 h-4 m-2"
              style={{ objectFit: "contain" }}
              src={mail}
              alt="Mail"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BandeauResponsive;
