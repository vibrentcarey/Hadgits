import React from "react";
import Button from "@material-tailwind/react/Button";

type ButtonProps = {
  children: React.ReactNode;
  color: string;
  type?: string;
  size?: string
};

export default function LocalButton({ children, color, type, size} : ButtonProps) {
  return (
    <Button
    className='my-5'
    color={color}
    buttonType={type}
    rounded
    size={size}
    >
      {children}
    </Button>
  );
}
