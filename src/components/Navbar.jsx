"use client";
import React, { useState } from "react";
import { AlignJustify } from "lucide-react";
import SideMenu from "./SideMenu";

export default function Navbar({ lng }) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const handleMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <div
      className={`text-white container mx-auto mt-5 flex justify-between items-center absolute max-w-full z-40`}
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
