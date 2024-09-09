import React from "react";

export default function SkeletonTime() {
  return (
    <div className="flex items-center justify-around">
      <div className="animate-pulse w-[150px] h-10 bg-gray-200 rounded-xl"></div>
      <div className="animate-pulse w-[150px] h-10 bg-gray-200 rounded-xl"></div>
      <div className="animate-pulse w-[150px] h-10 bg-gray-200 rounded-xl"></div>
    </div>
  );
}
