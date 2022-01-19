import React from 'react'
import PropTypes from 'prop-types';

export default function Badge({ style, day, i }) {
  // Animation Logic For Specific days
  const animate = i === 4 || day === 12 || day === 32 || day === 57 || day === 87 || day === 122 || day === 162 || day === 206 || day === 256 || day === 311 || day === 360 || day === 365
  const background = style;
  return (
    <div className={`  xs: h-10 w-10 sm: h-18 w-18 p-6 border-dashed m-1 border-2 ${background} rounded-full shadow-xl flex justify-center items-center ${animate && 'animate-bounce'}`}>
      <p className={`font-bold text-2xl`}>{day}</p>
    </div>
  )
}

Badge.propTypes = {
  style: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired
}
