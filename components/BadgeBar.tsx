import React from "react";
import Badge from "./Badge";

type BadgeBarProps = {
  color: {
    header: string;
    level: number;
    shades: {
      day: number;
      shade: string;
    }[];
  };
};

export default function BadgeBar(color: BadgeBarProps) {
  return (
    <div className="flex flex-wrap">
      {color.color.shades.map((shade: { day: number; shade: string }) => {
        return <Badge style={shade.shade} day={shade.day} />;
      })}
    </div>
  );
}
