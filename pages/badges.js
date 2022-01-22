import React, { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import { colors } from './data/colors'
import BadgeBar from '../components/BadgeBar'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { getSession } from "next-auth/client"

export default function Badges({session}) {
  const router = useRouter()
  useEffect(() => {
    if (!session) {
      router.replace('/auth')
    }
  })
  return (
    <PageWrapper>
      <div className="flex flex-col items-center">
        {colors.map((color) => {
          return (
            <>
              <h1 className={`${color.header} max-w-lg w-full font-bold text-2xl p-2 mt-8 mb-4 shadow-sm text-center text-white max-w-2xl rounded-md border-4 border-black`}>
                {color.level === '🥳' ? color.level : `Badge ${color.level}`}</h1>
              <BadgeBar color={color} />
            </>
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