import React, { useEffect, useState } from 'react';
import { BiBadgeCheck, BiWindowOpen } from 'react-icons/bi'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


export default function Intro() {
  const [browser, setBrowser] = useState(false)

  useEffect(() => {
    setBrowser(true)
  }, [])

  return (
    <div className='flex flex-col my-8 items-center'>
      <span className='text-xl font-bold mt-10'>Welcome to </span>
        <h2 className='tracking-wider decoration-purple-700 text-primaryPurple text-center font-bold underline text-5xl'><BiBadgeCheck className='inline-block' />Hadgits</h2>
    
    </div>
  )
}
