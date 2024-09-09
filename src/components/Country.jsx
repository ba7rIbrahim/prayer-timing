import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

export default function Country({ lng, country, setCountry }) {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <div
      className="relative container mx-auto top-[-70px] md:w-[50%]"
    >
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search{" "}
      </label>

      <input
        onChange={(e) => {
          setCountry(e.target.value);
        }}
        type="text"
        id="Search"
        value={country}
        placeholder="Search for City..."
        className={`${
          mode === "dark" ? "bg-[#1e293b] text-white" : ""
        } w-full rounded-lg py-2.5 pe-10 shadow-sm sm:text-sm p-2 h-12 focus:outline-none border focus:border-primary focus:shadow-md`}
        onFocus={(e) => {
          e.target.value = "";
        }}
        onBlur={(e) => {
          e.target.value = country;
        }}
      />

      <span className={`${lng === 'en' ? 'right-[10px]' : ' left-[10px]'} absolute inset-y-0 end-0 grid w-10 place-content-center`}>
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
}
