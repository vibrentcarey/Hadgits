import React from 'react'
import Badge from "./Badge";

export default function BadgeBar(color) {
  return (
    <div className='flex'>
      {color.color.shades.map((shade, i) => {
        return <Badge style={shade.shade} day={shade.day} big={shade.day === 365}/>
      })}
    </div>
  )
}
