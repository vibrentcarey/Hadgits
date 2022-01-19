import React, { useState } from 'react'
import Badge from './Badge'
import { colors } from '../pages/data/colors';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { RiRestartLine, RiAddCircleLine } from 'react-icons/ri'
import axios from 'axios';
import { useFormik } from 'formik'


export default function HabitCard({ title, reason, resources, length, refresh }) {
  const [showReasonInput, setShowReasonInput] = useState(false)

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
        resource: { title: values.resource, resourceLink: values.resourceLink }
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
    axios.delete('/api/badge', { data: title });
    refresh();
  }
  // Restart A Streak
  const handleRestart = (title) => {
    axios.put('/api/badge', { title });
    refresh();
  }

  return (
    <article className=' bg-primaryBlack rounded-xl my-8 mx-2 px-8 py-4 shadow-2xl max-w-sm w-full max-h-96'>
      {/* Delete Button */}
      <FaTrashAlt className='float-right text-primaryRed text-2xl ml-4 hover:animate-pulse cursor-pointer' onClick={() => handleDelete(title)
      } />
      {/* Edit Button */}
      <FaEdit className='float-right text-white text-2xl mx-2 hover:animate-pulse cursor-pointer' onClick={() => setShowReasonInput(!showReasonInput)} />
      <h2 className='text-white font-bold text-3xl text-center'>{title}</h2>
      <h2 className='text-white font-bold text-xl'>Reasons</h2>
      <ul>
        {reason.map(reason => <li className='list-disc text-white m-2'>{reason}</li>)}
      </ul>
      {showReasonInput && <form className='mt-4' onSubmit={formik.handleSubmit}>
        <label className='text-primaryRed font-bold text-sm' htmlFor='reason'>Reason</label>
        <br />
        <input className='outline-none text-white bg-primaryGrey border-b-4 border-black px-2 py-1 mb-4 text-sm' value={formik.values.reason} onChange={formik.handleChange} id='reason' placeholder='Enter a reason for this streak' />
        <button>+</button>
        </form>}

      <h2 className='text-white font-bold text-xl'>Resources</h2>
      {
        resources.map(resource => {
          return <a href={resource.resourceLink} target='_blank' className='underline decoration-primaryRed text-white'>{resource.resource}</a>
        })
      }


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
