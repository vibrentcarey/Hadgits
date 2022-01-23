import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: WrapperProps) {
  return <div className="h-full w-full px-6 sm:px-12">{children}</div>;
}
