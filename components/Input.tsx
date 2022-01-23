import React, { ReactNode } from "react";

interface InputProps {
  id: string;
  value: string;
  placeholder: string;
  label: string;
  onChange: () => void;
  children: ReactNode;
}

export default function Input({
  id,
  value,
  placeholder,
  onChange,
  children,
  label,
}: InputProps) {
  return (
    <>
      <label className="label" htmlFor={label}>
        {children}
      </label>
      <br />
      <input
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
      />
    </>
  );
}
