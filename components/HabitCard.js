import React from 'react'
import Badge from './Badge'

export default function HabitCard({ title, reason, resource, length, resourceLink }) {
  return (
    <article className=' bg-primaryBlack rounded-xl my-4 px-8 py-4 shadow-2xl'>
      <h2 className='text-white font-bold text-3xl text-center'>{title}</h2>
      <h2 className='text-white font-bold text-xl'>Reasons</h2>
      <ul>
        <li className='list-disc text-white m-2'>{reason}</li>
      </ul>
      <h2 className='text-white font-bold text-xl'>Resources</h2>
    <a href={resourceLink} target='_blank' className='underline decoration-primaryRed text-white'>{resource}</a>
      <h2 className='text-white font-bold text-xl'>Current Streak</h2>
      <p className='text-primaryRed font-bold text-xl'>{length}</p>

      <h2 className='text-white font-bold text-xl'>Badges Earned</h2>
      <hr className='border-b-2 border-primaryRed mb-4'/>
      <Badge day={length} />
    </article>
  )
}
