import React, { useContext } from 'react'
import { FaMedal, FaLock } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import AuthContext from '../Context/auth-context'
import {BiBadgeCheck} from 'react-icons/bi'

export default function Header() {
  const [session, loading] = useSession();

  const authContext = useContext(AuthContext);
  console.log(authContext);
  return (
    <header className='h-20 bg-purple-800 sticky top-0 z-30 flex items-center justify-between px-8'>
      <div className='flex items-center'>
        <BiBadgeCheck className='text-white text-xl m-1'/>
      <h1 className='text-white text-2xl font-bold'>Hadgits</h1>
      </div>
      {session ? <nav className='flex w-5/12 h-full justify-between items-center'>
        <Link href='/' passHref>
          <FaWallet className='text-white text-2xl hover:text-backgroundPink cursor-pointer active:text-purple-500' />
        </Link>
        <Link href='/create' passHref>
          <BsFillPlusSquareFill className='text-white text-2xl hover:text-backgroundPink cursor-pointer' />
        </Link>
        <Link href='/badges' passHref>
          <FaMedal className='text-white text-2xl hover:text-backgroundPink cursor-pointer' />
        </Link>
      </nav> : <nav className='flex h-full justify-around items-center'><FaLock className='text-white text-2xl'/></nav>
      }    </header>
  )
}
