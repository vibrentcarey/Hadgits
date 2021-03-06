import React, { useEffect, useState } from 'react'
import Badge from './Badge'
import { colors } from '../pages/colors';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { RiRestartLine } from 'react-icons/ri'
import axios from 'axios';
import { useFormik } from 'formik'
import Input from './Input'
import Card from "@material-tailwind/react/Card";
import LocalButton from './Button';
import { signOut, } from 'next-auth/client';
import Modal from './Modal'
import { Animate } from "react-simple-animate";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

//TODO: Add form validation
export default function HabitCard({ title, reason, resources, length, refresh, user, longest }) {
  const [showReasonInput, setShowReasonInput] = useState(false);
  const [showResourcesInput, setShowResourcesInput] = useState(false);
  const [highestBadge, setHighestBadge] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [confirm, setConfirm] = useState('')
  const [browser, setBrowser] = useState(false)

  useEffect(() => {
    setBrowser(true)
  }, [])

  useEffect(() => {

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
    }
  })

  // Delete A Card
  const handleDelete = (title) => {
    axios.delete('/api/badge', { data: { title, user } })
      .then(() => refresh())
  }
  // Restart A Streak
  const handleRestart = (title) => {
    axios.put('/api/badge', { title })
      .then(() => refresh())
  }

  const confirmDelete = () => {
    setModalTitle('Delete Habit?')
    setModalMessage('Please confirm that you want to delete this habit, you cannot undo this action.')
    setConfirm('Delete')
    setShowModal(true)
  }
  const confirmRestart = () => {
    setModalTitle('Restart Counter?')
    setModalMessage('Please confirm that you want to restart this streak, you will still keep any badges earned.')
    setConfirm('Restart')
    setShowModal(true)
  }

  const submit = () => {
    if (confirm === 'Logout') {
      signOut()
    }
    if (confirm === 'Delete') {
      handleDelete(title)
    }
    if (confirm === 'Restart') {
      handleRestart(title)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <Card className='mb-4 mt-10 mx-2 px-8 py-8 max-w-sm w-full'>
      <Modal title={modalTitle} message={modalMessage} showModal={showModal} closeModal={closeModal} confirm={confirm} submit={submit} />
      {/* Delete Button */}
      <FaTrashAlt className='float-right text-purple-600 text-2xl ml-4 hover:animate-pulse cursor-pointer' onClick={confirmDelete
      } />
      {/* Card Title */}
      <h2 className='text-purple-600 font-bold text-3xl text-center capitalize'>{title}</h2>

      {/* Reasons */}

      <h2 className='text-purple-600 font-bold text-xl mt-2'>Reasons</h2>
      <hr className='border-b-3 border-purple-600 mt-1 mb-1' />

      {/* Reasons Edit Button */}
      <FaEdit className='text-purple-500 text-xl mx-2 hover:animate-pulse float-right cursor-pointer' onClick={() => setShowReasonInput(!showReasonInput)} />

      <ul className='flex flex-wrap'>
        {reason.map(reason => <li key={reason} className='list-none font-bold text-primaryGreen text-sm capitalize mx-2'> - {reason}</li>)}
      </ul>
      {/* Reason Input Dropdown */}

      {showReasonInput &&
        <form className='mt-4' onSubmit={formik.handleSubmit} autoComplete='off'>

          {browser && <AnimationOnScroll animateIn="animate__zoomIn"
          >
            <Input size='sm' label='reason' value={formik.values.reason} onChange={formik.handleChange} id='reason' placeholder='Enter a new reason...' >New Reason</Input>
            <LocalButton size='sm' color='purple'>Add Reason</LocalButton>
          </AnimationOnScroll>}
        </form>}


      {/* Resources */}

      <h2 className='text-purple-600 font-bold text-xl mt-2'>Resources</h2>
      <hr className='border-b-3 border-purple-600 mt-1 mb-1' />

      {/* Resources Edit Button */}
      <FaEdit className='text-purple-500 text-xl mx-2 hover:animate-pulse cursor-pointer float-right' onClick={() => setShowResourcesInput(!showResourcesInput)} />

      <div className='flex flex-wrap'>
        {
          resources.map(resource => {
            return <a key={resource.title} href={resource.resourceLink} target='_blank' className='hover:animate-pulse font-bold underline decoration-green-600 text-sm text-primaryGreen capitalize mx-2'>{resource.title}</a>
          })
        }</div>
      {/* Resource Input Dropdown */}
      {showResourcesInput &&

        <form className='mt-2' onSubmit={formik.handleSubmit} autoComplete='off'>
          {browser && <AnimationOnScroll animateIn="animate__zoomIn"
          >
            <Input size='sm' label='resourceLink' value={formik.values.resourceLink} onChange={formik.handleChange} id='resourceLink' placeholder='Enter a new resource link...' >New Resource Link</Input>
            <br />
            <Input size='sm' label='resource' value={formik.values.resource} onChange={formik.handleChange} id='resource' placeholder='Enter a new resource title...' >New Resource Title</Input>
            <LocalButton size='sm' color='purple'>Add Resource</LocalButton>
          </AnimationOnScroll>}
        </form>}

      {/* Current Streak */}
      <h2 className='text-purple-600 font-bold text-xl mt-2'>Current Streak</h2>
      <hr className='border-b-3 border-purple-600 mt-1 mb-1' />

      {/* Restart Button*/}
      <RiRestartLine className='float-right text-purple-500 text-3xl mx-2 hover:animate-spin cursor-pointer' onClick={confirmRestart} />
      <p className='text-primaryGreen font-bold text-xl'>{length}</p>
      {/* Badge */}
      <h2 className='text-purple-600 font-bold text-xl mt-2'>Highest Badge Earned</h2>
      <hr className='border-b-3 border-purple-600 mt-1 mb-7' />
      <Badge day={highestBadge > 0 && highestBadge} style={background && background} />
    </Card>

  )
}
