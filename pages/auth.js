import React, { useEffect } from 'react';
import AuthForm from '../components/AuthForm';
import PageWrapper from '../components/PageWrapper';
import { getSession } from "next-auth/client"
import { useRouter } from 'next/router';
import {BiBadgeCheck} from 'react-icons/bi'

export default function Auth({ session }) {
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.replace('/')
    }
  }, [session])
  return (
    <PageWrapper>
      <h1 className='tracking-wider decoration-purple-700 text-primaryPurple text-center font-bold underline text-5xl mt-10'><BiBadgeCheck className='inline-block'/>Hadgits</h1>
      <AuthForm />
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