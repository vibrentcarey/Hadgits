
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import PropagateLoader from "react-spinners/PropagateLoader";
import PageWrapper from '../components/PageWrapper'
import HabitCard from '../components/HabitCard'
import AuthForm from '../components/AuthForm'
import { FiLogOut } from 'react-icons/fi'
import { signOut, useSession } from 'next-auth/client';
import { getSession } from "next-auth/client"
import { useRouter } from 'next/router';

export default function Home({ session }) {
  const [habits, setHabits] = useState([]);
  const [waiting, setWaiting] = useState(false)
  const router = useRouter()
  const loadData = async (email) => {
    console.log(email);
    setWaiting(true)

    const response = await axios.get(`/api/badge?user=${email}`)
    setHabits(response.data.message)
    setWaiting(false)
  }

  const handleLogout = () => {
    signOut()
  }

  useEffect(() => {
    if (session) {
      loadData(session.user.email)
    } else {
      router.replace('/auth')
    }
  }, [session])


  return (
    <PageWrapper>
      <FiLogOut className='text-white text-xl m-2 float-right hover:text-primaryRed cursor-pointer' onClick={handleLogout} />
      <h1 className='underline decoration-primaryRed text-white text-center font-bold text-4xl mt-10'>Your Habits</h1>
      <div className='flex flex-wrap justify-center h-full py-16'>
        {habits && habits.map(habit => {
          return <HabitCard key={habit._id} title={habit.title} reason={habit.reason} resources={habit.resources} length={habit.length} refresh={loadData} />
        })}
      </div>
      {/* <><h2 className='text-white font-bold text-2xl'>Nothing Here -</h2> <Link  href='/create'><h2 className='text-primaryRed cursor-pointer font-bold text-2xl animate-pulse'> Add A Habit</h2></Link></> */}
      {waiting && <div className='flex justify-center h-60 items-center'>
        <PropagateLoader color='#DA0037' />
      </div>}
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