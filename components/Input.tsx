import React, {ReactNode } from "react";

interface InputProps {
  id: string;
  value: string;
  placeholder: string;
  min?: number;
  max?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  white?: boolean;
  type?: string;
}

export default function Input({
  id,
  value,
  placeholder,
  onChange,
  children,
  white,
  type,
  min,
  max,
}: InputProps) {
  return (
    <>
      <label className={white ? "white" : "label"} htmlFor={id}>
        {children}
      </label>
      <br />
      <input
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        type={type}
        min={min}
        max={max}
      />
    </>
  );
}
