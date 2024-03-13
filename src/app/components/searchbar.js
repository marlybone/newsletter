import React from "react";

export default function SearchBar() {
  return (
    <div className="relative inset-y-1">
      <div className="container items-end justify-end shadow-custom rounded-lg border-transparent border md:block hidden">
        <input
          type="text"
          placeholder=""
          className="max-w-2xl h-8 rounded-lg"
        />
        <svg
          className="absolute inset-y-0 right-0 mr-3 mt-2 h-4 w-4 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14 3v4a1 1 0 0 0 1 1h4"
            fillRule="evenodd"
            clipRule="evenodd"
            stroke="#2c3e50"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5"
            stroke="#2c3e50"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"
            stroke="#2c3e50"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M18.5 19.5l2.5 2.5"
            stroke="#2c3e50"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
