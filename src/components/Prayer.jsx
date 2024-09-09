import Image from "next/image";
import React, { useEffect, useState } from "react";
import SkeletonPrayer from "./SkeletonPrayer";
import moment from "moment";

export default function Prayer({ athanResponse, t, country }) {
  athanResponse = athanResponse?.data?.timings;
  const [timer, setTimer] = useState("");
  const [nextPrayer, setNextPrayer] = useState(null);
  const [prayersTimeState, setPrayersTimeState] = useState([]);

  useEffect(() => {
    const fetchDataAndSetupTimer = async () => {
      try {
        await getNextPrayer(); 
      } catch (error) {
        console.error("Error fetching next prayer:", error);
      }
    };
    fetchDataAndSetupTimer();
  }, [athanResponse]);


  useEffect(() => {
    // Function count down timer to next prayer.
    if (nextPrayer) {
      if (athanResponse) {
        setTimer("00:00:00");
        if (nextPrayer != null) {
          const calculateTimeDifference = () => {
            const currentTime = moment();
            const nextPrayerTime = moment(nextPrayer.time, "HH:mm");
            const diffCalcPrayers = nextPrayerTime.diff(currentTime);
            if (diffCalcPrayers > 0) {
              const duration = moment.duration(diffCalcPrayers);
              const hours = Math.floor(duration.asHours())
                .toString()
                .padStart(2, "0");
              const minutes = duration.minutes().toString().padStart(2, "0");
              const seconds = duration.seconds().toString().padStart(2, "0");
  
              setTimer(`${hours}:${minutes}:${seconds}`);
            } else {
              setTimer("00:00:00");
            }
          };
  
          const interval = setInterval(calculateTimeDifference, 1000);
  
          return () => clearInterval(interval);
        }
      }
    }
  }, [nextPrayer]);

  let prayersTimeArray = [];

  // Function to get Next Prayer Auto.
  const getNextPrayer = async () => {
    const currentTime = moment();
    if (athanResponse) {
      Object.entries(athanResponse).map((athan) => {
        if (
          athan[0] === "Fajr" ||
          athan[0] === "Asr" ||
          athan[0] === "Dhuhr" ||
          athan[0] === "Isha" ||
          athan[0] === "Maghrib"
        )
          prayersTimeArray.push({
            name: athan[0],
            time: athan[1],
          });
      });
    }
    // We calculate the time difference for each prayer and only save what has not happened yet(value greater than zero).
    const upcomingPrayers = prayersTimeArray
      .map((prayer) => {
        const prayerTime = moment(prayer.time, "HH:mm");
        const timeDifference = prayerTime.diff(currentTime);
        return { ...prayer, diffTime: timeDifference };
      })
      .filter((prayer) => prayer.diffTime >= 0);
    if (upcomingPrayers.length > 0) {
      // Find the closest prayer by finding the least time difference.
      const closestPrayer = upcomingPrayers.reduce((prev, curr) =>
        curr.diffTime < prev.diffTime ? curr : prev
      );
      // =========> console.log("from getNextPrayer function => ", closestPrayer);
      setNextPrayer(closestPrayer);
    }
  };

// Function count down timer to next prayer.  
  // const setupCountdownTimerToNextPrayer = () => {
  // };

  return (
    <div className="flex flex-col mb-12 mt-12 ">
      {athanResponse ? (
        Object.entries(athanResponse).map((athan, id) => {
          if (
            athan[0] === "Fajr" ||
            athan[0] === "Asr" ||
            athan[0] === "Dhuhr" ||
            athan[0] === "Isha" ||
            athan[0] === "Maghrib"
          )
            return (
              <div
                key={id}
                className={`${
                  athan[0] === nextPrayer?.name ? "border" : ""
                } border-primary rounded-xl md:px-8 flex justify-between items-center my-4`}
              >
                <div className="flex items-center w-[140px]">
                  <Image
                    src={
                      athan[0] === "Fajr"
                        ? "/Fajr.png"
                        : athan[0] === "Dhuhr"
                        ? "/Dhuhr.png"
                        : athan[0] === "Asr"
                        ? "/Asr.png"
                        : athan[0] === "Maghrib"
                        ? "/Maghrib.png"
                        : "/Isha.png"
                    }
                    alt="prayer"
                    width={64}
                    height={64}
                    className="mx-1 md:mx-0 w-1/3 h-1/3 md:w-full md:h-full my-3"
                  />
                  <p className="text-primary font-bold mx-2 md:mx-4 text-base md:text-2xl">
                    {t(athan[0])}
                  </p>
                </div>

                <div
                  className={`${
                    athan[0] === nextPrayer?.name ? "block" : "hidden"
                  } font-semibold md:font-bold text-primary text-center text-sm md:text-base`}
                >
                  <p>{t("Remaining until the next prayer:")}</p>
                  <span>{timer}</span>
                </div>

                <div className=" md:text-xl font-bold mx-2">
                  {Number(athan[1].split(":")[0]) > 12
                    ? `0${Number(athan[1].split(":")[0] - 12)}`
                    : athan[1].split(":")[0]}
                  :{athan[1].split(":")[1]}
                  <span className="ml-1 text-gray-400 font-medium text-sm md:text-base">
                    {athan[1].split(":")[0] >= 12 ? "PM" : "AM"}
                  </span>
                </div>
              </div>
            );
        })
      ) : (
        <SkeletonPrayer />
      )}
    </div>
  );
}
