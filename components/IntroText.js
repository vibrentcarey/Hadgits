import React from 'react';
import H4 from "@material-tailwind/react/Heading4";
import "animate.css/animate.min.css";
import {SiPokemon} from 'react-icons/si';

export default function IntroText() {
  return (
     <article className='mt-12 max-w-md'>
        <H4 color="deepPurple">Why Hadgits?</H4>
        <ul className='flex flex-col h-48 justify-evenly'>
           <li className='list-disc text-lg sm:text-xl text-primaryPurple'>Dynamic Habit Tracking 🧮</li>
           <li className='list-disc text-lg sm:text-xl text-primaryPurple'>Integrated Streak Counter 📈</li>
           <li className='list-disc text-lg sm:text-xl text-primaryPurple'>Reason and Resource Storage 🗃</li>
           <li className='list-disc text-lg sm:text-xl text-primaryPurple'>Badge Based Reward System🎖</li>
        </ul>
     </article>
  )
}
