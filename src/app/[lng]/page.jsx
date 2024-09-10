"use client";
// COMPONETS
import Hero from "@/components/Hero";
import Time from "@/components/Time";
import Prayers from "@/components/Prayers";
import Footer from "@/components/Footer";
// HOOKS
import { useState, useEffect } from "react";
import { AthanContext } from "@/context/AthanContext";
import { ThemeContext } from "@/context/ThemeContext";
// LIBRARIES
import axios from "axios";

export default function Home({ params: { lng } }) {
  const [response, setResponse] = useState([]);
  const [country, setCountry] = useState("Baghdad");
  const [mode, setMode] = useState('light');
  
  useEffect(() => {
    axios
      .get(
        `https://api.aladhan.com/v1/timingsByCity?city=${country}&country=iraq`
      )
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }, [country]);




  return (
    <div>
      <AthanContext.Provider value={response}>
        <ThemeContext.Provider value={{ mode, setMode }}>
          <div className={mode}>
            <Hero lng={lng} country={country} setCountry={setCountry} />
            <Time lng={lng} />
            <Prayers lng={lng} country={country}/>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </AthanContext.Provider>
    </div>
  );
}
