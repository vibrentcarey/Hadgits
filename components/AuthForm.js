import axios from 'axios';
import React, { useEffect } from 'react';

export default function AuthForm() {
  useEffect(() => {
    axios.post('/api/auth/signup', { email: 'cows', password: "cows" })

  }, [])
  return <form><input /><input /><button>Submit</button></form>
}
