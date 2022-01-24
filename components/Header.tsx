import React, { useContext, useState } from 'react'
import { FaMedal, FaLock } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import AuthContext from '../Context/auth-context'
import {BiBadgeCheck} from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { signOut,  } from 'next-auth/client';
import Modal from '../components/Modal'

export default function Header() {
  const [session, loading] = useSession();
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [confirm, setConfirm] = useState('')

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
  const authContext = useContext(AuthContext);
  console.log(authContext);
  return (
    <header className='h-20 bg-purple-800 sticky top-0 z-30 flex items-center justify-between px-8'>
       <Modal title={modalTitle} message={modalMessage} showModal={showModal} closeModal={closeModal} confirm={confirm} submit={submit}/>
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
        <FiLogOut className='text-white text-sm'  onClick={confirmLogout}/> 
      </nav> : <nav className='flex h-full justify-around items-center'><FaLock className='text-white text-2xl'/></nav>
      }    </header>
  )
}
