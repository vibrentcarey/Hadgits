import React from 'react'
import { FaMedal } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='h-20 bg-primaryBlack sticky top-0 z-10'>
      <nav className='flex h-full justify-around items-center'>
        <Link href='/' passHref>
          <FaWallet className='text-white text-4xl' />
        </Link>
        <Link href='/create' passHref>
          <BsFillPlusSquareFill className='text-white text-4xl' />
        </Link>
        <Link href='/badges' passHref>
          <FaMedal className='text-white text-4xl' />
        </Link>
      </nav>
    </header>
  )
}
