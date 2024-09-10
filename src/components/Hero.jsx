// COMPONENTS
import Navbar from "./Navbar";
import Country from "./Country";
// HOOKS
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
// LIBRARIES
import { useTranslation } from "@/app/i18n/client";

export default function Hero({ country, setCountry, lng }) {
  const {t} = useTranslation(lng);
  const {mode} = useContext(ThemeContext);
  return (
    <div className="h-[44vh] w-full relative">
      <Navbar lng={lng} />
      
      <div className={`${mode === 'dark' ? 'from-indigo-500 from-5% via-sky-700 via-30% to-emerald-700' : ''} bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-[100%] h-[100%] bg-cover relative`}>
        <div className="w-full h-full bg-black/40 absolute top-0 left-0 "></div>
      </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-3xl text-center">{t('Find out the prayer times in the Iraqi governments')}</h1>

      <Country lng={lng} country={country} setCountry={setCountry} />
    </div>
  );
}
