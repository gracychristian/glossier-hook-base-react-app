import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Popularity = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-end bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 border border-rose-900 rounded"
    >
      Popularity
      <svg
        className="h-5 w-5 ml-1 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <polyline points="3 8 7 4 11 8" /> <line x1="7" y1="4" x2="7" y2="13" />{" "}
        <polyline points="13 16 17 20 21 16" />{" "}
        <line x1="17" y1="10" x2="17" y2="20" />
      </svg>
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default Popularity;
