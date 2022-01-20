import { Router, useRouter } from 'next/router'
import React, { useEffect } from 'react'
import AuthForm from '../components/AuthForm'
import Form from '../components/Form'
import PageWrapper from '../components/PageWrapper'
import { getSession } from "next-auth/client"

export default function Create({ session }) {
  const router = useRouter()
  useEffect(() => {
    if (!session) {
      router.replace('/auth')
    }
  })
  return (
    <PageWrapper>
      <div className='flex flex-col mt-10 sm:mt-40'>
        <h1 className='underline decoration-primaryRed text-white text-center font-bold text-4xl'>Start A New Streak</h1>
        <Form user={session.user} />
      </div>
    </PageWrapper>
  )
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}