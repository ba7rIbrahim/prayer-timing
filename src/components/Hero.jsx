import React from "react";
import Navbar from "./Navbar";
import Country from "./Country";

export default function Hero({ country, setCountry, lng }) {
  return (
    <div className="h-[44vh] w-full">
      <Navbar lng={lng} />
      
      <div className="bg-primary w-[100%] h-[100%] bg-cover relative">
        <div className="w-full h-full bg-black/20 absolute top-0 left-0 "></div>
      </div>

      <Country lng={lng} country={country} setCountry={setCountry} />
    </div>
  );
}
