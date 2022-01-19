import axios from 'axios';
import React, { useEffect } from 'react';
import {signIn} from 'next-auth/client'

export default function AuthForm() {
  useEffect(() => {
    // axios.post('/api/auth/signup', { email: 'cowsi', password: "cows" })
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
    login()

  }, [])

  async function login() {
    const result = await signIn('credentials', {
      redirect: false,
      email: 'cowsi',
      password: 'cows'
    })

    console.log(result);
  }
  return <form><input /><input /><button>Submit</button></form>
}
