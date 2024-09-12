import React from "react";
import logo from "../assets/images/logo.webp";
import phone from "../assets/images/phone.png";
import mail from "../assets/images/mail.png";
import fb from "../assets/images/fb.png";
import youtube from "../assets/images/youtube.png";
const ContactFooter = () => {
  return (
    <div className="flex justify-around items-end h-60 flex-wrap">
      <div>
        <img
          className="w-52 h-24"
          style={{ objectFit: "contain" }}
          src={logo}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <img
            className="w-4 h-4"
            style={{ objectFit: "contain" }}
            src={phone}
            alt="Téléphone"
          />
          <a
            href="tel:04 73 33 15 53"
            className="text-black text-[20px] font-semibold leading-[29px] tracking-[0.33px] text-center"
          >
            04 73 33 15 53
          </a>
          <p className="p-5">|</p>
          <img
            className="w-4 h-4"
            style={{ objectFit: "contain" }}
            src={mail}
            alt="Mail"
          />
          <a
            className="uppercase text-black text-[20px] font-semibold leading-[29px] tracking-[0.33px] text-center"
            href="btn@email.com"
          >
            Nous Contacter
          </a>
        </div>

        <div className="flex justify-center">
          <p className="m-2">Restez au coeur de l'actualité</p>
          <img
            className="w-6 h-6 p-1 m-2"
            style={{ objectFit: "contain" }}
            src={fb}
            alt=""
          />
          <img
            className="w-6 h-6 p-1 m-2"
            style={{ objectFit: "contain" }}
            src={youtube}
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-[#710D82] h-[45px] px-6 py-2 text-white rounded-md hover:bg-[#5e0b69] transition duration-300 ease-in-out">
          Mon espace
        </button>
      </div>
    </div>
  );
};

export default ContactFooter;
