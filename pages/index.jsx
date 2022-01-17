
import axios from 'axios'
import { useEffect, useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import HabitCard from '../components/HabitCard'

export default function Home() {
  const [habits, setHabits] = useState([]);
  console.log(habits)

  useEffect(() => {
    axios.get('/api/badge')
      .then(res => setHabits(res.data.message))
  }, [])
  return (
    <PageWrapper>
      <h1 className='underline decoration-primaryRed text-white text-center font-bold text-4xl mt-10'>Your Habits</h1>
      {habits && habits.map(habit => {
        return <HabitCard title={habit.title} reason={habit.reason} resource={habit.resource} length={habit.length} resourceLink={habit.resourceLink} />
      })}
    </PageWrapper>
  )
}
