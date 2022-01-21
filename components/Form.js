import React from 'react'
import { useFormik } from 'formik'
import Button from './Button';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

export default function Form({ user }) {

  const router = useRouter();
  // Form Logic & State
  const formik = useFormik({
    initialValues: {
      title: '',
      length: 0,
      reason: '',
      resource: '',
      resourceLink: '',
    },
    onSubmit: values => {
      const streakInfo = {
        title: values.title,
        length: values.length,
        reason: [values.reason],
        resources: [{ title: values.resource, resourceLink: values.resourceLink }],
        longest: values.length,
        user: user.email
      }
      axios.post('/api/badge', streakInfo)
        .then(res => {
          console.log(res.data)
          router.replace('/')
        })
        .catch(err => console.log(err))
    }
  })
  return (
    <form className='p-2 mt-10 flex flex-col' onSubmit={formik.handleSubmit}>
      <section className='mt-4'>
        <label className='text-white font-bold text-2xl' htmlFor='title'>Title</label>
        <br />
        <input className='outline-none w-full text-white bg-primaryGrey border-b-4 border-black px-2 py-1 text-lg' value={formik.values.title} onChange={formik.handleChange} id='title' placeholder='Enter the title for this streak' />
      </section>
      <section className='mt-4'>
        <label className='text-white font-bold text-2xl' htmlFor='length'>Active Days</label>
        <br />
        <input type='number' max={365} className=' w-full outline-none text-white bg-primaryGrey border-b-4 border-black px-2 py-1 text-lg' value={formik.values.length} onChange={formik.handleChange} id='length' placeholder='Enter active streak if you have one' />
      </section>
      <section className='mt-4'>
        <label className='text-white font-bold text-2xl' htmlFor='reason'>Reason</label>
        <br />
        <input className='w-full outline-none text-white bg-primaryGrey border-b-4 border-black px-2 py-1 text-lg' value={formik.values.reason} onChange={formik.handleChange} id='reason' placeholder='Enter a reason for this streak' />
      </section>
      <section className='mt-4'>
        <label className='text-white font-bold text-2xl' htmlFor='resource'>Resource Title</label>
        <br />
        <input className='w-full outline-none text-white bg-primaryGrey border-b-4 border-black px-2 py-1 text-lg' value={formik.values.resource} onChange={formik.handleChange} id='resource' placeholder='Enter a title for the resource link' />
      </section>
      <section className='mt-4'>
        <label className='text-white font-bold text-2xl' htmlFor='resourceLink'>Resource Link</label>
        <br />
        <textarea className='w-full mt-2 h-24 rounded-lg outline-none text-white bg-primaryGrey border-4 border-black px-2 py-1 text-lg' value={formik.values.resourceLink} onChange={formik.handleChange} id='resourceLink' placeholder='Enter a link to a useful resource' />
      </section>
      <Button>Start Habit</Button>
    </form>
  )
}
