
import React from 'react';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

export default function AnimateThis({ children }) {
  return (
    <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
      {children}
    </Animate>
  )
}

