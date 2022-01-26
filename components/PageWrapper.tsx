import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: WrapperProps) {
  return <div className="h-full w-full md:px-8 sm:px-6">{children}</div>;
}
