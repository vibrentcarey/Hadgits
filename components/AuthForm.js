import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { signIn } from 'next-auth/client'
import { useFormik } from 'formik';
import { useRouter } from 'next/router';

export default function AuthForm() {
  const [loginMode, setLoginMode] = useState(true)
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      if (loginMode) {
        login(values.email, values.password)
          .then(res => console.log(res))
          .catch(err => console.log(err))
      } else {
        signUp(values.email, values.password)
      }
    }
  })

  async function login(email, password) {
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password
    })
    router.replace('/');
  }

  async function signUp(email, password) {
    const response = await axios.post('/api/auth/signup', { email, password })
    console.log(response)
    router.replace('/')
  }


  return (
    <form className='mt-12' onSubmit={formik.handleSubmit}>
      <input className='my-1' value={formik.values.email} onChange={formik.handleChange} id='email' />
      <br />
      <input value={formik.values.password} onChange={formik.handleChange} id='password' />
      <br />
      <button>{loginMode ? 'Login' : 'Sign Up'}</button>
      {loginMode && <><h3>New Here?</h3> <span onClick={() => setLoginMode(false)}>Sign Up</span></>}
      {!loginMode && <><h3>Already A Member?</h3> <span onClick={() => setLoginMode(true)}>Login</span></>}
    </form>)
}
