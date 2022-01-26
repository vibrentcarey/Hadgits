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
import Input from '../components/Input'
import { MdOutlineCatchingPokemon } from 'react-icons/md'
import Card from '@material-tailwind/react/Card';
import Head from 'next/head';

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
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col items-center px-8'>
        {browser && <AnimationOnScroll animateIn="animate__jackInTheBox">
          <Intro />
        </AnimationOnScroll>}
        {/* QUOTE */}
        <Quote style={{ margin: '6rem 1rem', textAlign: 'center', fontWeight: 'bold', maxWidth: '600px' }} color="deepPurple" footer="John Dryden" cite=''>
          We first make our habits, and then our habits make us.
        </Quote>
        <hr className='border border-primaryPurple w-full max-w-lg' />
        <section className='sm:grid grid-cols-2 max-w-xl'>
          {/* INTRO TEXT */}
          {browser && <AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>
            <IntroText />
          </AnimationOnScroll>}
          <div className='flex items-center justify-center mt-10'>
            {browser && <AnimationOnScroll animateIn="animate__rotateIn" animateOut='animate__rotateOut'>
              <MdOutlineCatchingPokemon className='text-primaryPurple text-9xl w-full' />
            </AnimationOnScroll>}
          </div>
        </section>
        <hr className='border border-primaryPurple w-full max-w-lg my-4' />

        <section className='sm:grid grid-cols-2 gap-10'>
          {/* INPUT */}
          {browser && <AnimationOnScroll animateIn="animate__rotateInDownLeft" animateOut='animate__rotateOutDownRight'>
            <ImageTitle title='Add Habits' >
              <Input color='purple' id="habit" placeholder="Build your streaks.." read >Add A Habit</Input>
            </ImageTitle>
          </AnimationOnScroll>}
          {/* BADGES */}
          {browser && <AnimationOnScroll animateIn="animate__flipInX" animateOut='animate__flipOutX'>
            <ImageTitle title='Earn Badges' flex>
              <Badge style='bg-red-600' day={15} />
              <Badge style='bg-orange-600' day={38} />
              <Badge style='bg-pink-600' day={150} />
              <Badge style='bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white' day={365} />
            </ImageTitle>
          </AnimationOnScroll>}
        </section>
        <hr className='border border-primaryPurple w-full max-w-lg my-4' />

        {/* SHAKE */}
        <div className='my-24 w-full max-w-md flex flex-col items-center'>
          <p className='font-bold text-2xl'>Are You Ready To</p>
          {browser && <AnimationOnScroll animateIn="animate__shakeX">
            <H4 style={{ margin: '1rem 0 ' }} color="deepPurple">SHAKE OFF</H4>
          </AnimationOnScroll>}
          <p className='text-2xl font-bold'>Bad Habits?</p>
        </div>
        <hr className='border border-primaryPurple w-full max-w-lg my-4' />

        {/* FORM */}
        {browser && <AnimationOnScroll animateIn="animate__bounceInDown"
          animateOut='animate__bounceOutDown'>
          <H4 style={{ marginTop: '8rem' }} color="deepPurple">SIGN UP NOW</H4>
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