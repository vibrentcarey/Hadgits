import { data } from 'autoprefixer'
import { connectToDatabase } from '../../../lib/mongodb'

async function handler(req, res) {
  const data = req.body
  const { email, password } = data

  let { db } = await connectToDatabase();


  await db.collection('users').insertOne({
    email,
    password
  })
  res.status(201).json('created user')
}

export default handler