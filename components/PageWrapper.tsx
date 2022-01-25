import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: WrapperProps) {
  return <div className="h-full w-full md:px-24 sm:px-20">{children}</div>;
}
