import React, { useEffect, useState } from 'react'
import Badge from './Badge'
import { colors } from '../pages/data/colors';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { RiRestartLine, RiAddCircleLine } from 'react-icons/ri'
import axios from 'axios';
import { useFormik } from 'formik'
import Input from './Input.tsx'


export default function HabitCard({ title, reason, resources, length, refresh, user, longest }) {
  const [showReasonInput, setShowReasonInput] = useState(false);
  const [showResourcesInput, setShowResourcesInput] = useState(false);
  const [highestBadge, setHighestBadge] = useState(0)

  useEffect(() => {
    console.log(longest);

    switch (true) {
      case (longest >= 12 && longest < 32):
        setHighestBadge(12);
        break;
      case (longest >= 32 && longest < 57):
        setHighestBadge(32);
        break;
      case longest >= 57 && longest < 87:
        setHighestBadge(57);
        break;
      case longest >= 87 && longest < 122:
        setHighestBadge(87);
        break;
      case longest >= 122 && longest < 162:
        setHighestBadge(122);
        break;
      case longest >= 162 && longest < 206:
        setHighestBadge(162);
        break;
      case longest >= 206 && longest < 256:
        setHighestBadge(206);
        break;
      case longest >= 256 && longest < 311:
        setHighestBadge(256);
        break;
      case longest >= 311 && longest < 360:
        setHighestBadge(311);
        break;
      case longest >= 360 && longest < 365:
        setHighestBadge(360);
        break;
      case longest === 365:
        setHighestBadge(365);
        break;
      default:
        setHighestBadge(0);

    }

  }, [])


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
    const shade = color.shades.find(shade => shade.day === highestBadge)
    if (shade) {
      background = shade.shade;
      console.log(background);
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
    <article className=' bg-primaryBlack rounded-xl my-2 mx-2 px-8 py-4 shadow-2xl max-w-sm w-full '>
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
        <Input label='reason' value={formik.values.reason} onChange={formik.handleChange} id='reason' placeholder='Enter a new reason...' >New Reason</Input>
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
        <Input label='resourceLink' value={formik.values.resourceLink} onChange={formik.handleChange} id='resourceLink' placeholder='Enter a new resource link...' >New Resource Link</Input>
        <br />
        <Input label='resource' value={formik.values.resource} onChange={formik.handleChange} id='resource' placeholder='Enter a new resource title...' >New Resource Title</Input>
        <button className='text-white text-lg'>+</button>
      </form>}
      {/* Current Streak */}
      <h2 className='text-white font-bold text-xl'>Current Streak</h2>
      {/* Restart Button*/}
      <RiRestartLine className='float-right text-primaryRed text-3xl mx-2 hover:animate-spin cursor-pointer' onClick={() => handleRestart(title)} />
      <p className='text-green-500 font-bold text-xl'>{length}</p>
      {/* Badge */}
      <h2 className='text-white font-bold text-xl'>Highest Badge Earned</h2>
      <hr className='border-b-2 border-primaryRed mb-4' />
      <Badge day={highestBadge > 0 && highestBadge} style={background && background} />
    </article>
  )
}
