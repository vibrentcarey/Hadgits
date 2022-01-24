import React, {ReactNode } from "react";
import Input from "@material-tailwind/react/Input";
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
  num?: boolean
  size?: string
}

export default function LocalInput({
  id,
  value,
  placeholder,
  onChange,
  children,
  white,
  type,
  min,
  max,
  num,
  size
}: InputProps) {
  return (
    <>
      <label className='text-purple-500 my-1 inline-block' htmlFor={id}>
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
        inputmode={num && 'numeric'}
        size={size}
        outline
      />
    </>
  );
}
