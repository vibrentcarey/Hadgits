import axios from 'axios';
import React, { useEffect } from 'react';
import {signIn} from 'next-auth/client'

export default function AuthForm() {
  useEffect(() => {
    // axios.post('/api/auth/signup', { email: 'cows', password: "cows" })
    login()

  }, [])

  async function login() {
    const result = await signIn('credentials', {
      redirect: false,
      email: 'cows',
      password: 'cows'
    })

    console.log(result);
  }
  return <form><input /><input /><button>Submit</button></form>
}
