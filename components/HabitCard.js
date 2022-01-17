import React, { useState } from 'react'
import Badge from './Badge'
import { colors } from '../pages/data/colors';
import { FaEdit } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import {RiRestartLine} from 'react-icons/ri'

export default function HabitCard({ title, reason, resource, length, resourceLink }) {
  let background = null;
  colors.forEach((color, i) => {
    const shade = color.shades.find(shade => shade.day === length)
    if (shade) {
      background = shade.shade;
      console.log(background);
    }
  })
  return (
    <article className=' bg-primaryBlack rounded-xl my-8 mx-2 px-8 py-4 shadow-2xl max-w-sm w-full'>
      <FaTrashAlt className='float-right text-primaryRed text-2xl ml-4 hover:animate-pulse cursor-pointer' />
      <FaEdit className='float-right text-white text-2xl mx-2 hover:animate-pulse cursor-pointer'/>
      <h2 className='text-white font-bold text-3xl text-center'>{title}</h2>
      <h2 className='text-white font-bold text-xl'>Reasons</h2>
      <ul>
        <li className='list-disc text-white m-2'>{reason}</li>
      </ul>
      <h2 className='text-white font-bold text-xl'>Resources</h2>
      <a href={resourceLink} target='_blank' className='underline decoration-primaryRed text-white'>{resource}</a>
      <h2 className='text-white font-bold text-xl'>Current Streak</h2>
      <RiRestartLine className='float-right text-primaryRed text-3xl mx-2 hover:animate-spin cursor-pointer' />
      <p className='text-green-500 font-bold text-xl'>{length}</p>

      <h2 className='text-white font-bold text-xl'>Highest Badge Earned</h2>
      <hr className='border-b-2 border-primaryRed mb-4' />
      <Badge day={length} style={background && background} />
    </article>
  )
}
