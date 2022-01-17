
import axios from 'axios'
import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'

export default function Home() {
  useEffect(() => {
    axios.get('/api/badge')
      .then(res => console.log(res))
  }, [])
  return (
    <PageWrapper>
      <h1 className='underline decoration-primaryRed text-white text-center font-bold text-4xl mt-10'>Your Badges</h1>
    </PageWrapper>
  )
}
