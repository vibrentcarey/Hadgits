import React from 'react'
import AuthForm from '../components/AuthForm'
import Form from '../components/Form'
import PageWrapper from '../components/PageWrapper'
export default function Create() {
  return (
    <PageWrapper>
      <div className='flex flex-col mt-10 sm:mt-40'>
        <h1 className='underline decoration-primaryRed text-white text-center font-bold text-4xl'>Start A New Streak</h1>
        {/* <Form /> */}
        <AuthForm/>
      </div>
    </PageWrapper>
  )
}
