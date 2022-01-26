import React from "react";

type BadgeProps = {
  style: string;
  day: number;
};

export default function Badge({ style, day } : BadgeProps) {
  // Animation Logic For Specific days
  const animate =
    day === 12 ||
    day === 32 ||
    day === 57 ||
    day === 87 ||
    day === 122 ||
    day === 162 ||
    day === 206 ||
    day === 256 ||
    day === 311 ||
    day === 360 ||
    day === 365;

  return (
    <div
      className={`${style} xs: h-10 w-10 sm: h-18 w-18 p-6 border-dashed m-1 border-2 rounded-full shadow-xl flex justify-center items-center ${
        animate && "animate-bounce"
      }`}
    >
      <p className={`font-bold text-2xl`}>{day}</p>
    </div>
  );
}

