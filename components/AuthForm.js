import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { signIn } from 'next-auth/client'
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import Card from "@material-tailwind/react/Card";
import Input from './Input'
import Button from './Button'

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
    <Card className='p-8 max-w-md w-full mt-10'>
      <form onSubmit={formik.handleSubmit}>
        <Input
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          placeholder="Enter your email"
        >
          Email
        </Input>
        <Input
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
          placeholder="Enter your password"
          type='password'
        >
          Password
        </Input>
        <Button color='purple'>{loginMode ? 'Login' : 'Sign Up'}</Button>
        {loginMode && <><h3>New Here? <span className='text-purple-500 font-bold' onClick={() => setLoginMode(false)}>Sign Up</span></h3></>}
        {!loginMode && <><h3>Returning? <span className='text-purple-500 font-bold' onClick={() => setLoginMode(true)}>Login</span></h3></>}

      </form>
    </Card>
  )
}
