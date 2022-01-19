import { data } from 'autoprefixer'
import { hash } from 'bcrypt'
import { connectToDatabase } from '../../../lib/mongodb'

// Hash password using bcrypt
async function hashPassword(password){
  return await hash(password, 12);
}

async function handler(req, res) {
  const data = req.body
  const { email, password } = data

  let { db } = await connectToDatabase();

  await db.collection('users').insertOne({
    email,
    password: await hashPassword(password)
  })
  res.status(201).json('created user')
  db.close();
}

export default handler