"use client";
import React, { useContext, useState } from "react";
import { AlignJustify } from "lucide-react";
import SideMenu from "./SideMenu";
import { ThemeContext } from "@/context/ThemeContext";

export default function Navbar({ lng }) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const { mode, setMode } = useContext(ThemeContext);
  const handleMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <div
      className={`${
        mode === "dark" ? "text-slate-700" : "text-white"
      } container mx-auto mt-5 flex justify-between items-center absolute max-w-full z-40`}
    >
      <h1 className="font-bold text-4xl">ATHAN</h1>
      <AlignJustify onClick={handleMenu} className="cursor-pointer h-12 w-12" />
      <SideMenu
        showSideMenu={showSideMenu}
        setShowSideMenu={setShowSideMenu}
        lng={lng}
      />
    </div>
  );
}
