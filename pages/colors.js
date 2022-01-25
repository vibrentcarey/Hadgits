//TODO: Change purple badges to higher numbers
const red = [{ day: 0, shade: 'bg-red-200' }, { day: 3, shade: 'bg-red-300' }, { day: 6, shade: 'bg-red-400' }, { day: 9, shade: 'bg-red-500' }, { day: 12, shade: 'text-white bg-red-600 text-white' }]

const orange = [{ day: 16, shade: 'bg-orange-200' }, { day: 20, shade: 'bg-orange-300' }, { day: 24, shade: 'bg-orange-400' }, { day: 28, shade: 'bg-orange-500' }, { day: 32, shade: 'bg-orange-600 text-white' }]

const purple = [{ day: 320, shade: 'bg-purple-200' }, { day: 330, shade: 'bg-purple-300' }, { day: 340, shade: 'bg-purple-400' }, { day: 350, shade: 'bg-purple-500' }, { day: 360, shade: 'bg-purple-600 text-white' }]

const blue = [{ day: 63, shade: 'bg-blue-200' }, { day: 69, shade: 'bg-blue-300' }, { day: 75, shade: 'bg-blue-400' }, { day: 81, shade: 'bg-blue-500' }, { day: 87, shade: 'bg-blue-600 text-white' }]

const cyan = [{ day: 94, shade: 'bg-cyan-200' }, { day: 101, shade: 'bg-cyan-300' }, { day: 108, shade: 'bg-cyan-400' }, { day: 115, shade: 'bg-cyan-500' }, { day: 122, shade: 'bg-cyan-600 text-white' }]

const teal = [{ day: 130, shade: 'bg-teal-200' }, { day: 138, shade: 'bg-teal-300' }, { day: 146, shade: 'bg-teal-400' }, { day: 154, shade: 'bg-teal-500' }, { day: 162, shade: 'bg-teal-600 text-white' }]

const green = [{ day: 171, shade: 'bg-green-200' }, { day: 180, shade: 'bg-green-300' }, { day: 189, shade: 'bg-green-400' }, { day: 197, shade: 'bg-green-500' }, { day: 206, shade: 'bg-green-600 text-white' }]

const lime = [{ day: 216, shade: 'bg-lime-200' }, { day: 226, shade: 'bg-lime-300' }, { day: 236, shade: 'bg-lime-400' }, { day: 246, shade: 'bg-lime-500' }, { day: 256, shade: 'bg-lime-600 text-white' }]

const pink = [{ day: 267, shade: 'bg-pink-200' }, { day: 278, shade: 'bg-pink-300' }, { day: 289, shade: 'bg-pink-400' }, { day: 300, shade: 'bg-pink-500' }, { day: 311, shade: 'bg-pink-600 text-white' }]

const amber = [{ day: 37, shade: 'bg-amber-200' }, { day: 42, shade: 'bg-amber-300' }, { day: 47, shade: 'bg-amber-400' }, { day: 52, shade: 'bg-amber-500' }, { day: 57, shade: 'bg-amber-600 text-white' }]

export const colors = [
  {
    level: 1,
    shades: red,
    header: 'bg-red-600'
  },
  {
    level: 2,
    shades: orange,
    header:  'bg-orange-600'
  },
  {
    level: 3,
    shades: amber,
    header: 'bg-amber-600'
  },
  {
    level: 4,
    shades: blue,
    header:  'bg-blue-600'
  },
  {
    level: 5,
    shades: cyan,
    header:  'bg-cyan-600'
  },
  {
    level: 6,
    shades: teal,
    header: 'bg-teal-600'
  },
  {
    level: 7,
    shades: green,
    header: ' bg-green-600'
  }, {
    level: 8,
    shades: lime,
    header:  'bg-lime-600'

  }, {
    level: 9,
    shades: pink,
    header: 'bg-pink-600'
  },
  {
    level: 10,
    shades: purple,
    header: ' bg-purple-600'
  },
  {
    level: '🥳',
    shades: [{ day: 365, shade: "bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white" }],
    header:"bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white"
  }
]

import React from 'react';

export default function Colors() {
  return <div>Nothing here!</div>;
}
