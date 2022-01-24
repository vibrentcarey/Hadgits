
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
import Modal from '../components/Modal'

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
    setWaiting(true)
    const response = await axios.get(`/api/badge?user=${email}`)
    console.log(response)
    setHabits(response.data.message)
    setWaiting(false)
  }

  const confirmLogout = () => {
    setModalTitle('Are You Sure You Want To Logout?')
    setModalMessage('Please confirm logout, you can always sign in again later.')
    setConfirm('Logout')
    setShowModal(true)
  }

  const submit = () => {
    if(confirm === 'Logout'){
    signOut()
    }
  }

  const closeModal = () => {
    setShowModal(false)
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
      <div className='float-right flex items-center text-purple-600 text-sm hover:text-purple-700 cursor-pointer' onClick={confirmLogout} >
        <span>Logout</span>
        <FiLogOut  />
      </div>
     
      <h1 className='underline tracking-wider decoration-purple-700 text-purple-600 text-center font-bold text-4xl mt-10'>Your Habits</h1>
      <div className='flex flex-wrap justify-center items-start h-full py-6'>
        {habits && habits.map(habit => {
          return <HabitCard key={habit._id} title={habit.title} reason={habit.reason} resources={habit.resources} length={habit.length} refresh={loadData} user={session.user.email} longest={habit.longest} />
        })}
      </div>
      <Modal title={modalTitle} message={modalMessage} showModal={showModal} closeModal={closeModal} confirm={confirm} submit={submit}/>
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