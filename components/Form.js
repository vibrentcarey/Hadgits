import React from 'react'
import { useFormik } from 'formik'
import Button from './Button';

export default function Form() {
  const formik = useFormik({
    initialValues: {
      title: '',
      length: 0,
      reason: '',
      resource: ''
    }, 
    onSubmit: values => {
      console.log(values)
    }
  })
  return (
    <form className='p-2 mt-10 flex flex-col' onSubmit={formik.handleSubmit}>
      <section className='mt-4'>
        <label className='text-white font-bold text-2xl' htmlFor='title'>Title</label>
        <br />
        <input className='outline-none w-full text-white bg-primaryGrey border-b-4 border-black px-2 py-1 text-xl' value={formik.values.title} onChange={formik.handleChange} id='title' />
      </section>
      <section className='mt-4'>
        <label className='text-white font-bold text-2xl' htmlFor='length'>Active Days</label>
        <br />
        <input type='number' className=' w-full outline-none text-white bg-primaryGrey border-b-4 border-black px-2 py-1 text-xl' value={formik.values.length} onChange={formik.handleChange} id='length' />
      </section>
      <section className='mt-4'>
        <label className='text-white font-bold text-2xl' htmlFor='reason'>Reason</label>
        <br />
        <input className='w-full outline-none text-white bg-primaryGrey border-b-4 border-black px-2 py-1 text-lg' value={formik.values.reason} onChange={formik.handleChange} id='reason' />
      </section>
      <section className='mt-4'>
        <label className='text-white font-bold text-2xl' htmlFor='resource'>Resource Link</label>
        <br />
        <textarea className='w-full mt-2 h-24 rounded-lg outline-none text-white bg-primaryGrey border-4 border-black px-2 py-1 text-lg' value={formik.values.resource} onChange={formik.handleChange} id='resource' />
      </section>
      <Button>Generate Badge</Button>
    </form>
  )
}
