import React from 'react'
import Badge from "./Badge.tsx";

export default function BadgeBar(color) {
  return (
    <div className='flex flex-wrap'>
      {color.color.shades.map((shade, i) => {
        return <Badge style={shade.shade} day={shade.day} big={shade.day === 365} i={i}/>
      })}
    </div>
  )
}
