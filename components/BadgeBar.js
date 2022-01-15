import React from 'react'
import Badge from "./Badge";

export default function BadgeBar(color) {
  return (
    <div className='flex flex-wrap'>
      {color.color.shades.map((shade, i) => {
        console.log(i)
        return <Badge style={shade.shade} day={shade.day} big={shade.day === 365} i={i}/>
      })}
    </div>
  )
}