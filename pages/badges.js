import React, { useEffect, useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import { colors } from './colors'
import BadgeBar from '../components/BadgeBar'
import { useRouter } from 'next/router'
import { getSession } from "next-auth/client"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export default function Badges({ session }) {
  const router = useRouter();
  const [browser, setBrowser] = useState(false)

  useEffect(() => {
    setBrowser(true)
  }, [])

  useEffect(() => {
    if (!session) {
      router.replace('/auth')
    }
  }, [session])
  return (
    <PageWrapper>
      <div className="flex flex-col items-center px-4">

        <h1 className='underline tracking-wider decoration-purple-700 text-primaryPurple text-center font-bold text-4xl mt-10'>Badges</h1>

        {colors.map((color, i) => {
          return (
            <div key={i} className='w-full max-w-md flex flex-col items-center mb-2 last:mb-24'>
              <h1 className={`${color.header} max-w-md  w-full font-bold text-2xl p-2 mt-8 mb-4 shadow-md text-center text-white rounded-md `}>
                {color.level === '🥳' ? color.level : `Badge ${color.level}`}</h1>
              {browser && <AnimationOnScroll animateIn="animate__flipInX" animateOut='animate__flipOutX'>

                <BadgeBar color={color} />
              </AnimationOnScroll>}
            </div>
          )
        })
        }


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