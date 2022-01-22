import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children } : ButtonProps) {
  return (
    <button
      type="submit"
      className="hover:bg-red-600 font-bold text-2xl bg-primaryRed text-white my-4 py-2 rounded-md border-2-primaryRed shadow-2xl border-4 border-black"
    >
      {children}
    </button>
  );
}
