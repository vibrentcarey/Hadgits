
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import PropagateLoader from "react-spinners/PropagateLoader";
import PageWrapper from '../components/PageWrapper'
import HabitCard from '../components/HabitCard'

export default function Home() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false)
  console.log(habits)

  const loadData = async () => {
    setLoading(true)
    const response = await axios.get('/api/badge')
    setHabits(response.data.message)
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    <PageWrapper>
      <h1 className='underline decoration-primaryRed text-white text-center font-bold text-4xl mt-10'>Your Habits</h1>
      <div className='flex flex-wrap justify-center h-full py-16'>
        {habits.length > 0 ? habits.map(habit => {
          console.log(habit)
          return <HabitCard key={habit._id} title={habit.title} reason={habit.reason} resource={habit.resource} length={habit.length} resourceLink={habit.resourceLink} refresh={loadData} />

        }) :  <><h2 className='text-white font-bold text-2xl'>Nothing Here -</h2> <Link  href='/create'><h2 className='text-primaryRed cursor-pointer font-bold text-2xl animate-pulse'> Add A Habit</h2></Link></>}
      </div>
      {loading && <div className='flex justify-center h-60 items-center'>
        <PropagateLoader color='#DA0037' />
      </div>}

    </PageWrapper>
  )
}
