import React, { useContext } from 'react'
import { FaMedal } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import AuthContext from '../Context/auth-context'

export default function Header() {
  const [session, loading] = useSession();

  const authContext = useContext(AuthContext);
  console.log(authContext);
  return (
    <header className='h-20 bg-primaryBlack sticky top-0 z-10'>
      {session ? <nav className='flex h-full justify-around items-center'>
        <Link href='/' passHref>
          <FaWallet className='text-white text-4xl hover:text-primaryRed cursor-pointer' />
        </Link>
        <Link href='/create' passHref>
          <BsFillPlusSquareFill className='text-white text-4xl hover:text-primaryRed cursor-pointer' />
        </Link>
        <Link href='/badges' passHref>
          <FaMedal className='text-white text-4xl hover:text-primaryRed cursor-pointer' />
        </Link>
      </nav> : <nav className='flex h-full justify-around items-center'>locked</nav>
      }    </header>
  )
}
