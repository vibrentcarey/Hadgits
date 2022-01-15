import React from 'react'
import PropTypes from 'prop-types';

export default function Badge({ style, day, big, i }) {
  const animate = i === 4 || day === 365
  const background = style
    return (
      <div className={`xs: h-14 w-14 border-dashed m-2 border-2 ${background} rounded-full shadow-xl flex justify-center items-center ${big && 'h-20 w-20'} sm: h-20 w-20 ${animate && 'animate-bounce'}`}>
        <p className={`font-bold ${big ? 'text-3xl' :'text-2xl'}`}>{day}</p>
      </div>
    )
}

Badge.propTypes = {
  shade: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  star: PropTypes.bool
}
