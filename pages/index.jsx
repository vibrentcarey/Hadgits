
import axios from 'axios'
import { useEffect, useState } from 'react'
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
      <div className='flex flex-wrap justify-center'>
        {habits && habits.map(habit => {
          console.log(habit)
          return <HabitCard key={habit._id} title={habit.title} reason={habit.reason} resource={habit.resource} length={habit.length} resourceLink={habit.resourceLink} refresh={loadData}/>
        })}
      </div>
      {loading && <div className='flex justify-center h-60 items-center'>
        <PropagateLoader color='#DA0037' />
      </div>}

    </PageWrapper>
  )
}
