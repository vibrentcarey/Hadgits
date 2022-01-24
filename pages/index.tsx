
import axios from 'axios'
import { ContextType, useEffect, useState } from 'react'
import Link from 'next/link';
import PageWrapper from '../components/PageWrapper'
import HabitCard from '../components/HabitCard'
import AuthForm from '../components/AuthForm'
import { FiLogOut } from 'react-icons/fi'
import { signOut, useSession } from 'next-auth/client';
import { getSession } from "next-auth/client"
import { useRouter } from 'next/router';
import { Session } from '../types/Session'
import { Context } from 'vm';
import {UserHabit} from '../types/Habit' 

interface Habits {
  habits: UserHabit[]
}

export default function Home({ session }: Session) {
  const [habits, setHabits] = useState<Habits | []>([]);
  const [waiting, setWaiting] = useState(false)
  const router = useRouter()

  const loadData = async (email: string) => {
    setWaiting(true)
    const response = await axios.get(`/api/badge?user=${email}`)
    console.log(response)
    setHabits(response.data.message)
    setWaiting(false)
  }

  const handleLogout = () => {
    signOut()
  }

  useEffect(() => {
    if (session) {
      loadData(session.user.email)
      .then(()=> console.log(habits))
      console.log(habits)

    } else {
      router.replace('/auth')
    }
    
  }, [session])


  return (
    <PageWrapper>
      <FiLogOut className='text-purple-600 text-2xl font-bold m-2 float-right hover:text-purple-700 cursor-pointer' onClick={handleLogout} />
      <h1 className='underline decoration-purple-700 text-purple-600 text-center font-bold text-4xl mt-10'>Your Habits</h1>
      <div className='flex flex-wrap justify-center items-start h-full py-6'>
        {habits && habits.map(habit => {
          return <HabitCard key={habit._id} title={habit.title} reason={habit.reason} resources={habit.resources} length={habit.length} refresh={loadData} user={session.user.email} longest={habit.longest} />
        })}
      </div>
      {waiting && <div className='flex justify-center h-60 items-center'>Loading
      </div>}
    </PageWrapper>
  )
}
export async function getServerSideProps(ctx : Context) {
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}