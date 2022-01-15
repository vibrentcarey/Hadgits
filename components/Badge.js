import React from 'react'
import PropTypes from 'prop-types';

export default function Badge({ style, day, big }) {
  console.log(style);
  const background = style
    return (
      <div className={`h-14 w-14 border-dashed m-2 border-2 ${background} rounded-full shadow-xl flex justify-center items-center ${big && 'h-20 w-20'}`}>
        <p className={`font-bold ${big ? 'text-2xl' :'text-xl'}`}>{day}</p>
      </div>
    )
}

Badge.propTypes = {
  shade: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  star: PropTypes.bool
}
