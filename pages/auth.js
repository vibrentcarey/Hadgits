import React, { useEffect, useState } from 'react';
import AuthForm from '../components/AuthForm';
import PageWrapper from '../components/PageWrapper';
import { getSession } from "next-auth/client"
import { useRouter } from 'next/router';
import Intro from '../components/IntroHeader';
import dynamic from 'next/dynamic'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import Quote from "@material-tailwind/react/Quote"
import IntroText from '../components/IntroText';
import ImageTitle from '../components/ImageTitle';
import Badge from '../components/Badge'
import H4 from "@material-tailwind/react/Heading4";

export default function Auth({ session }) {
  const router = useRouter();
  const [browser, setBrowser] = useState(false)

  useEffect(() => {
    setBrowser(true)
  }, [])

  useEffect(() => {
    if (session) {
      router.replace('/')
    }
  }, [session])

  const DynamicIntro = dynamic(
    () => import('../components/IntroHeader'),
    { ssr: false }
  )

  return (
    <PageWrapper>
      <div className='flex flex-col items-center'>
        {browser && <AnimationOnScroll animateIn="animate__jackInTheBox">
          <Intro />
        </AnimationOnScroll>}
        <Quote style={{ margin: '3rem 1rem', textAlign: 'center', fontWeight: 'bold', maxWidth: '600px' }} color="deepPurple" footer="John Dryden" >
          We first make our habits, and then our habits make us.
        </Quote>
        {browser && <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>
          <IntroText />
        </AnimationOnScroll>}
        {browser && <AnimationOnScroll animateIn="animate__flipInX" animateOut='animate__flipOutX'>

          <ImageTitle title='Earn Badges'>
            <Badge style='bg-red-600' day={15} />
            <Badge style='bg-orange-600' day={38} />
            <Badge style='bg-pink-600' day={150} />
            <Badge style='bg-purple-600' day={350} />
            <Badge style='bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white' day={365} />
          </ImageTitle>
        </AnimationOnScroll>}
        <div className='my-36 w-full max-w-md flex flex-col items-center'>
          <p className='font-bold text-2xl'>Are You Ready To</p>
          {browser && <AnimationOnScroll animateIn="animate__shakeX">
            <H4 style={{ margin: '1rem 0 ' }} color="deepPurple">SHAKE OFF</H4>
          </AnimationOnScroll>}
          <p className='text-2xl font-bold'>Bad Habits?</p>
        </div>
        {browser && <AnimationOnScroll  animateIn="animate__bounceInDown" 
        animateOut='animate__bounceOutDown'>
          <H4 style={{ margin: ' 0' }} color="deepPurple">SIGN UP NOW</H4>
        </AnimationOnScroll>}
        {browser && <AnimationOnScroll 
        className='min-w-full flex items-center justify-center' animateIn="animate__bounceInUp"
        animateOut="animate__bounceOutDown" >
        <AuthForm />

        </AnimationOnScroll>}
      </div>
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