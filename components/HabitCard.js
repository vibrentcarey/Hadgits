import React, { useState } from 'react'
import Badge from './Badge'
import { colors } from '../pages/data/colors';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { RiRestartLine, RiAddCircleLine } from 'react-icons/ri'
import axios from 'axios';
import { useFormik } from 'formik'


export default function HabitCard({ title, reason, resources, length, refresh, user }) {
  const [showReasonInput, setShowReasonInput] = useState(false);
  const [showResourcesInput, setShowResourcesInput] = useState(false);

  console.log(user);
  console.log(resources)
  const formik = useFormik({
    initialValues: {
      reason: '',
      resource: '',
      resourceLink: ''
    }, onSubmit: values => {
      console.log(values)
      const updatedInfo = {
        title,
        reason: values.reason,
        resource: { title: values.resource, resourceLink: values.resourceLink },
        user
      }
      axios.put('/api/badge', updatedInfo)
        .then(() => {
          setShowReasonInput(false)
          refresh()
        })
    }
  })

  let background = null;
  colors.forEach((color, i) => {
    const shade = color.shades.find(shade => shade.day === length)
    if (shade) {
      background = shade.shade;
    }
  })

  // Delete A Card
  const handleDelete = (title) => {
    axios.delete('/api/badge', { data: { title, user } });
    refresh();
  }
  // Restart A Streak
  const handleRestart = (title) => {
    axios.put('/api/badge', { title });
    refresh();
  }

  return (
    <article className=' bg-primaryBlack rounded-xl my-8 mx-2 px-8 py-4 shadow-2xl max-w-sm w-full '>
      {/* Delete Button */}
      <FaTrashAlt className='float-right text-primaryRed text-2xl ml-4 hover:animate-pulse cursor-pointer' onClick={() => handleDelete(title)
      } />
      {/* Card Title */}
      <h2 className='text-white font-bold text-3xl text-center'>{title}</h2>
      {/* Reasons */}
      <div className='flex justify-between mt-4'>
        <h2 className='text-white font-bold text-xl'>Reasons</h2>
        {/* Reasons Edit Button */}
        <FaEdit className='text-white text-xl mx-2 hover:animate-pulse cursor-pointer' onClick={() => setShowReasonInput(!showReasonInput)} />
      </div>
      <ul className='flex flex-wrap'>
        {reason.map(reason => <li className='list-none text-white capitalize mx-2'> - {reason}</li>)}
      </ul>
      {/* Reason Input Dropdown */}
      {showReasonInput && <form className='mt-4' onSubmit={formik.handleSubmit}>
        <label className='text-primaryRed font-bold text-md' htmlFor='reason'>New Reason</label>
        <br />
        <input className='outline-none text-white bg-primaryGrey border-b-4 border-black px-2 py-1 mb-4 text-sm' value={formik.values.reason} onChange={formik.handleChange} id='reason' placeholder='Enter a new reason...' />
      </form>}
      
      {/* Resources */}
      <div className='flex justify-between mt-4'>
        <h2 className='text-white font-bold text-xl'>Resources</h2>
        {/* Resources Edit Button */}
        <FaEdit className='text-white text-xl mx-2 hover:animate-pulse cursor-pointer' onClick={() => setShowResourcesInput(!showResourcesInput)} />
      </div>
      <div className='flex flex-wrap'>
        {
          resources.map(resource => {
            return <a href={resource.resourceLink} target='_blank' className='underline decoration-primaryRed text-white'>{resource.title}</a>
          })
        }</div>
      {/* Resource Input Dropdown */}
      {showResourcesInput && <form className='mt-4' onSubmit={formik.handleSubmit}>
        <label className='text-primaryRed font-bold text-md' htmlFor='resource'>New Resource Title</label>
        <br />
        <input className='outline-none text-white bg-primaryGrey border-b-4 border-black px-2 py-1 mb-4 text-sm' value={formik.values.resource} onChange={formik.handleChange} id='resource' placeholder='Enter a new resource title...' />
        <br />
        <label className='text-primaryRed font-bold text-md' htmlFor='resourceLink'>New Resource Link</label>
        <input className='outline-none w-full text-white bg-primaryGrey border-b-4 border-black px-2 py-1 mb-4 text-sm' value={formik.values.resourceLink} onChange={formik.handleChange} id='resourceLink' placeholder='Enter a new resource link...' />
        <button className='text-white text-lg'>+</button> 
      </form>}

      <h2 className='text-white font-bold text-xl'>Current Streak</h2>

      {/* Restart Button*/}
      <RiRestartLine className='float-right text-primaryRed text-3xl mx-2 hover:animate-spin cursor-pointer' onClick={() => handleRestart(title)} />
      <p className='text-green-500 font-bold text-xl'>{length}</p>

      <h2 className='text-white font-bold text-xl'>Highest Badge Earned</h2>
      <hr className='border-b-2 border-primaryRed mb-4' />
      <Badge day={length} style={background && background} />
    </article>
  )
}
