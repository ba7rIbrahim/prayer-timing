"use client";
// COMPONENTS
import Prayer from "./Prayer";
// HOOKS
import React, { useContext, useEffect, useRef } from "react";
import { AthanContext } from "@/context/AthanContext";
import { ThemeContext } from "@/context/ThemeContext";
// LIBRARIES
import { useTranslation } from "../app/i18n/client";


export default function Prayers({ lng, country }) {
  const { t } = useTranslation(lng);
  const { mode, setMode } = useContext(ThemeContext);
  let athanResponse = useContext(AthanContext);
  
  return (
    <div
      className={`${
        mode === "dark" ? "bg-gray-700" : ""
      } container w-[97%] mx-auto bg-[#e3e0e036] px-5 mt-5 rounded-2xl`}
    >
      <Prayer athanResponse={athanResponse} t={t} country={country} />
    </div>
  );
}
