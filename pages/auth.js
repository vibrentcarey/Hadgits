import React, { useEffect } from 'react';
import AuthForm from '../components/AuthForm';
import PageWrapper from '../components/PageWrapper';
import { useSession } from 'next-auth/client';
import { getSession } from "next-auth/client"
import { useRouter } from 'next/router';
import {BiBadgeCheck} from 'react-icons/bi'

export default function Auth({ session }) {
  const router = useRouter()
  console.log(session);
  useEffect(() => {
    if (session) {
      router.replace('/')
    }
  }, [session])
  return (
    <PageWrapper>
      <h1 className='decoration-purple-700 text-purple-600 text-center font-bold underline text-5xl mt-10'><BiBadgeCheck className='inline-block'/>Hadgits</h1>
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