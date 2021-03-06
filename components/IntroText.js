import React from 'react';
import H4 from "@material-tailwind/react/Heading4";
import "animate.css/animate.min.css";
import {SiPokemon} from 'react-icons/si';

export default function IntroText() {
  return (
     <article className='flex flex-col items-center mt-12 max-w-md'>
        <H4 color="deepPurple">Why Hadgits?</H4>
        <ul className='flex flex-col h-48 justify-evenly'>
           <li className='list-disc text-lg sm:text-xl text-primaryPurple ml-4'>Dynamic Habit Tracking ๐งฎ</li>
           <li className='list-disc text-lg sm:text-xl text-primaryPurple ml-4'>Integrated Streak Counter ๐</li>
           <li className='list-disc text-lg sm:text-xl text-primaryPurple ml-4'>Reason & Resource Storage ๐</li>
           <li className='list-disc text-lg sm:text-xl text-primaryPurple ml-4'>Personal Motivation โจ</li>
           <li className='list-disc text-lg sm:text-xl text-primaryPurple ml-4'>Badges Reward System๐</li>
        </ul>
     </article>
  )
}
