import React, { useEffect } from 'react';
import AuthForm from '../components/AuthForm';
import PageWrapper from '../components/PageWrapper';
import { useSession } from 'next-auth/client';
import { getSession } from "next-auth/client"
import { useRouter } from 'next/router';


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