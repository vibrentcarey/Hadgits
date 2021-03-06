import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";

import React, { useContext, useEffect, useState } from "react";
import { FaMedal } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { BsFillPlusSquareFill } from "react-icons/bs";
import Link from "next/link";
import { useSession } from "next-auth/client";
import { BiBadgeCheck } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/client";
import Modal from "../components/Modal";
import { useRouter } from "next/router";

//TODO: Style active links
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [session, loading] = useSession();
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [confirm, setConfirm] = useState("");

  const confirmLogout = () => {
    setModalTitle("Are You Sure You Want To Logout?");
    setModalMessage(
      "Please confirm logout, you can always sign in again later."
    );
    setConfirm("Logout");
    setShowModal(true);
  };
  const submit = () => {
    if (confirm === "Logout") {
      signOut();
    }
  };

  const router = useRouter();

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [router.route]);

  return (
    <Navbar color="deepPurple">
      <Modal
        title={modalTitle}
        message={modalMessage}
        showModal={showModal}
        closeModal={closeModal}
        confirm={confirm}
        submit={submit}
      />
      <NavbarContainer>
        <NavbarWrapper>
          <div className="flex items-center mb-2">
            <BiBadgeCheck className="text-white text-xl m-1" />
            <h1 className="text-white text-3xl font-bold ">Hadgits</h1>
            <p>3rd party package broke navbar, will be fixed soon ????</p>
          </div>
          {session && (
            <NavbarToggler
              color="white"
              onClick={() => setOpenMenu(!openMenu)}
              ripple="light"
            />
          )}
        </NavbarWrapper>
        {session && (
          <NavbarCollapse open={openMenu}>
            <Nav>
              <div
                className="bg-purple-400 text-white rounded-md my-2 max-w-sm p-1"
              >
                <Link href="/" passHref>
                  <div className="flex items-center hover:cursor-pointer">
                    <FaWallet className="text-white text-2xl hover:text-backgroundPink cursor-pointer active:text-purple-500 inline-block mx-2" />
                    <span className="font-bold text-lg">Habits</span>
                  </div>
                </Link>
              </div>
              <div
                className="bg-purple-400 text-white rounded-md my-2 max-w-sm p-1"
              >
                <Link href="/create" passHref>
                  <div className="flex items-center hover:cursor-pointer">
                    <BsFillPlusSquareFill className="text-white text-2xl hover:text-backgroundPink cursor-pointer active:text-purple-500 inline-block mx-2" />
                    <span className="font-bold text-lg">Create</span>
                  </div>
                </Link>
              </div>
              <div
                className="bg-purple-400 text-white rounded-md my-2 p-1 max-w-sm"
              >
                <Link href="/badges" passHref>
                  <div className="flex items-center hover:cursor-pointer">
                    <FaMedal className="text-white text-2xl hover:text-backgroundPink cursor-pointer active:text-purple-500 inline-block mx-2" />
                    <span className="font-bold text-lg text-white">Badges</span>
                  </div>
                </Link>
              </div>
              <div
                className="bg-purple-400 text-white rounded-md my-2 max-w-sm p-1"
                onClick={confirmLogout}
              >
                <div className="flex items-center hover:cursor-pointer">
                  <FiLogOut className="text-white text-2xl hover:text-backgroundPink cursor-pointer mx-2" />
                  <span className="font-bold text-lg">Logout</span>
                </div>
              </div>
              {/* </NavItem> */}
            </Nav>
          </NavbarCollapse>
        )}
      </NavbarContainer>
    </Navbar>
  );
}
