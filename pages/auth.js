import React from 'react';
import AuthForm from '../components/AuthForm';
import PageWrapper from '../components/PageWrapper';
import { useSession } from 'next-auth/client';

export default function Auth() {

  return (
    <PageWrapper>
      <AuthForm />
    </PageWrapper>
  )
}
