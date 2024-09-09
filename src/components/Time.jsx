// COMPONENTS
import SkeletonTime from "./SkeletonTime";
// HOOKS
import React, { useContext } from "react";
import { AthanContext } from "@/context/AthanContext";
// LIBRARIES
import { useTranslation } from "@/app/i18n/client";


export default function Time({ lng }) {
  let timeResponse = useContext(AthanContext);
  timeResponse = timeResponse?.data?.date;
  let { t } = useTranslation(lng);
  
  return (
    <div className="container mt-10 ">
      {timeResponse ? (
        <div className="flex items-center justify-around">
          <div className="text-center p-2 font-bold text-sm md:text-lg rounded-xl">{`${timeResponse?.hijri?.day}  ${t(timeResponse?.hijri?.month?.en)}  ${timeResponse?.hijri?.year}`}</div>
          <div className="text-center p-2 font-bold text-sm md:text-lg rounded-xl">
            {t(timeResponse?.gregorian?.weekday?.en)}
          </div>
          <div className="text-center p-2 font-bold text-sm md:text-lg rounded-xl">
          {`${timeResponse?.gregorian?.day}  ${t(timeResponse?.gregorian?.month?.en)}  ${timeResponse?.gregorian?.year}`}
          </div>
        </div>
      ) : (
        <SkeletonTime />
      )}
    </div>
  );
}
