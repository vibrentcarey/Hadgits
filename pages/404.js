import Card from '@material-tailwind/react/Card';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PageWrapper from '../components/PageWrapper'

export default function Custom404() {
  const [counter, setCounter] = useState(10)
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 10000)
    const interval = setInterval(() => {
      console.log('couting')
      setCounter(prevCount => prevCount = prevCount - 1)
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])
  return (
    <PageWrapper>
      <div className='flex flex-col items-center h-full mt-20 px-8'>
        <p className='text-primaryPurple text-lg font-semibold '>We looked until our eyes turned <span className='text-primaryRed'>red</span></p>
        <Image src="/404_image.png" height='350px' width='350px' className='rounded-xl shadow-md' />
        <p className='text-primaryPurple text-lg font-semibold '>But couldn't find this page 😿</p>
        <Card className='flex flex-col items-center max-w-sm mt-10'>
        <h1 className='text-primaryPurple text-xl font-bold'>Taking You Home In</h1>
          <p className='text-primaryRed font-bold text-2xl'>{counter}</p>
        {counter === 0 && <p>✌🏼</p>}
        </Card>

      </div>
    </PageWrapper>
  )
}
