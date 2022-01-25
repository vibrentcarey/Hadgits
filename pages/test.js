import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import NavLink from "@material-tailwind/react/NavLink";
import Icon from "@material-tailwind/react/Icon";

import React, { useContext, useState } from 'react'
import { FaMedal, FaLock } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import AuthContext from '../Context/auth-context'
import { BiBadgeCheck } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { signOut, } from 'next-auth/client';
import Modal from '../components/Modal'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
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
    if (confirm === 'Logout') {
      signOut()
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <Navbar color="deepPurple" style={{borderRadius: 'none'}}>
      <Modal title={modalTitle} message={modalMessage} showModal={showModal} closeModal={closeModal} confirm={confirm} submit={submit} />
      <NavbarContainer>
        <NavbarWrapper>
          <div className='flex items-center mb-2'>
            <BiBadgeCheck className='text-white text-xl m-1' />
            <h1 className='text-white text-3xl font-bold '>Hadgits</h1>
          </div>
          {session && <NavbarToggler
            color="white"
            onClick={() => setOpenMenu(!openMenu)}
            ripple="light"
          />}
        </NavbarWrapper>
        {session &&
          <NavbarCollapse open={openMenu} style={{ width: '50%' }}>
            <Nav>
              <NavItem active="light" ripple="light" style={{ margin: '0.4rem 1rem', padding: '0.4rem', width: '25%', minWidth: '120px' }}>
                <Link href='/' passHref>
                  <div className="flex items-center">
                    <FaWallet className='text-white text-2xl hover:text-backgroundPink cursor-pointer active:text-purple-500 inline-block mx-2' />
                    <span className="font-bold text-lg">Habits</span>
                  </div>
                </Link>
              </NavItem>
              <NavItem active="light" ripple="light" style={{ margin: '0.4rem 1rem', padding: '0.4rem', width: '25%', minWidth: '120px' }}>
                <Link href='/' passHref>
                  <div className="flex items-center">
                    <BsFillPlusSquareFill className='text-white text-2xl hover:text-backgroundPink cursor-pointer active:text-purple-500 inline-block mx-2' />
                    <span className="font-bold text-lg">Create</span>
                  </div>
                </Link>
              </NavItem>
              <NavItem active={session && 'light'} ripple="light" style={{ margin: '0.4rem 1rem', padding: '0.4rem', width: '25%', minWidth: '120px' }}>
                <Link href='/' passHref>
                  <div className="flex items-center">
                    <FaMedal className='text-white text-2xl hover:text-backgroundPink cursor-pointer active:text-purple-500 inline-block mx-2' />
                    <span className="font-bold text-lg">Badges</span>
                  </div>
                </Link>
              </NavItem>
              <NavItem active="light" ripple="light" style={{ margin: '0.4rem 1rem', padding: '0.4rem', width: '25%', minWidth: '120px' }}  onClick={confirmLogout}>
                <div className="flex items-center">
                  <FiLogOut className='text-white text-2xl hover:text-backgroundPink cursor-pointer mx-2' />
                  <span className="font-bold text-lg">Logout</span>
                </div>

              </NavItem>
            </Nav>
          </NavbarCollapse>}
      </NavbarContainer>
    </Navbar>
  );
}