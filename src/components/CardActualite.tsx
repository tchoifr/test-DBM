import React from "react";

interface CardProps {
  imageSrc: string;
  description: string;
  link: string;
}

const CardActualite: React.FC<CardProps> = ({
  imageSrc,
  description,
  link,
}) => {
  return (
    <div className="max-w-sm bg-transparent flex flex-col items-center">
      <a href={link}>
        <img className="rounded-t-lg" src={imageSrc} alt={description} />
      </a>
      <div className="p-5 text-center">
        <p
          className="mb-3 font-semibold text-white"
          style={{
            fontFamily: "Inter",
            fontSize: "20px",
            lineHeight: "29px",
            letterSpacing: "0.3333333432674408px",
            textAlign: "left",
            padding: "13px",
          }}
        >
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-transparent border-none"
          style={{
            width: "100%",
            textAlign: "start",
          }}
        >
          lire l’article
          <svg
            className="ml-2 w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v14m7-7H5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardActualite;
