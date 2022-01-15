import React from 'react'
import PropTypes from 'prop-types';

export default function Badge({ style, day }) {
  const background = style
  return (
    <div className={`h-14 w-14 border-dashed m-2 border-2 ${background} rounded-full shadow-2xl flex justify-center items-center`}>
      <p className='font-bold text-xl'>{day}</p>
    </div>
  )
}

Badge.propTypes = {
  color: PropTypes.string.isRequired,
  shade: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired
}
