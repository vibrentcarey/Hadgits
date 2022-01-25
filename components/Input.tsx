import React, {ReactNode } from "react";
import Input from "@material-tailwind/react/Input";

interface InputProps {
  id: string;
  value: string;
  placeholder: string;
  min?: number;
  max?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  type?: string;
  num?: boolean
  size?: string
  error?: string | boolean
  read?: boolean
  auto?: boolean
}

export default function LocalInput({
  id,
  value,
  placeholder,
  onChange,
  children,
  type,
  min,
  max,
  num,
  size,
  error,
  read,
  onBlur,
}: InputProps) {
  return (
    <>
      <label className='text-purple-500 my-1 inline-block font-bold' htmlFor={id}>
        {children}
      </label>
      <br />
      <Input
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        type={type}
        min={min}
        max={max}
        color='purple'
        inputMode={num && 'numeric'}
        size={size}
        outline
        error={error}
        onBlur={onBlur}
        readOnly={read}
      />
    </>
  );
}
