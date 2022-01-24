
import axios from 'axios'
import { ContextType, useCallback, useEffect, useState } from 'react'
import Link from 'next/link';
import PageWrapper from '../components/PageWrapper'
import HabitCard from '../components/HabitCard'
import AuthForm from '../components/AuthForm'
import { signOut, useSession } from 'next-auth/client';
import { getSession } from "next-auth/client"
import { useRouter } from 'next/router';
import { Session } from '../types/Session'
import { Context } from 'vm';
import {UserHabit} from '../types/Habit' 
import Modal from '../components/Modal'
import PropagateLoader from 'react-spinners/PropagateLoader'
interface Habits {
  habits: UserHabit[]
}

export default function Home({ session }: Session) {
  const [habits, setHabits] = useState<Habits | []>([]);
  const [waiting, setWaiting] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [confirm, setConfirm] = useState('')


  const router = useRouter()

  const loadData = async (email: string) => {
    const response = await axios.get(`/api/badge?user=${email}`)
    console.log(response)
    setHabits(response.data.message)
    setWaiting(false)
  }

  useEffect(() => {
    if (session) {
    setWaiting(true)
      setTimeout(() => 
      loadData(session.user.email)
      , 2000)
    } else {
      router.replace('/auth')
    }
    
  }, [session])


  return (
    <PageWrapper>
       
      <h1 className='underline tracking-wider decoration-purple-700 text-purple-600 text-center font-bold text-4xl mt-10'>Your Habits</h1>

      {waiting && <div className='flex flex-col justify-center h-60 items-center'>
        <h2 className='mb-2 text-purple-500'>Gathering Your Habits</h2>
        <PropagateLoader color='#6B21A8'/>
      </div>}
      <div className='flex flex-wrap justify-center items-start h-full py-6'>
        {habits && habits.map(habit => {
          return <HabitCard key={habit._id} title={habit.title} reason={habit.reason} resources={habit.resources} length={habit.length} refresh={loadData} user={session.user.email} longest={habit.longest} />
        })}
      </div>

     
      
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