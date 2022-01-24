import React from "react";
import Button from "@material-tailwind/react/Button";

type ButtonProps = {
  children: React.ReactNode;
};

export default function LocalButton({ children } : ButtonProps) {
  return (
    <Button
    color='purple'
    rounded
    >
      {children}
    </Button>
  );
}
