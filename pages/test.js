import React, { useState } from "react";
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
import { BiBadgeCheck } from 'react-icons/bi'
import {FaLinkedin} from 'react-icons/fa'

export default function Navbari() {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <div>
      <h1 className="text-center mt-20 text-5xl font-bold text-primaryPurple underline">CONTACT / LIVE LINK</h1>
      <div className="grid grid-cols-2 gap-8 mt-8">
      <div className="flex flex-col items-center m-2">
      <FaLinkedin className="text-6xl m-2 text-primaryPurple"/>
      <img src='/linkedin_qr.png' className="rounded-sm shadow-md"/>
      </div>
      <div className="flex flex-col items-center m-2">
      <BiBadgeCheck className="text-6xl m-2 text-primaryPurple"/>
      <img src='/hadgits_qr.png' className="rounded-sm shadow-md"/>
      </div>
      {/* <img src='/mac_mockup.png' className="h-96 "/>
      <img src='/iphone_mockup.png' className="h-96 ml-20"/> */}
        {/* <div className="flex flex-col items-center justify-center">
          <img src='/react_icon_png.png' className="h-20 m-10 mb-2" />
          <h2 className="text-primaryPurple font-bold">React.js</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src='/tailwind_logo.png' className="h-20 m-10 mb-2" />
          <h2 className="text-primaryPurple font-bold">Tailwind CSS</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src='/material_tailwind.png' className="h-20 m-10 mb-2" />
          <h2 className="text-primaryPurple font-bold">Material Tailwind</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src='/Typescript_logo_2020.svg.png' className="h-20 m-10 mb-2" />
          <h2 className="text-primaryPurple font-bold">TypeScript</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src='/next_icon.png' className="h-20 m-10 mb-2" />
          <h2 className="text-primaryPurple font-bold">Next.js</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src='/next_auth.png' className="h-20 m-10 mb-2" />
          <h2 className="text-primaryPurple font-bold">Next Auth</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src='/node_icon.png' className="h-20 m-10 mb-2" />
          <h2 className="text-primaryPurple font-bold">Node.js</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src='/mongo_icon.png' className="h-20 m-10 mb-2" />
          <h2 className="text-primaryPurple font-bold">MongoDB</h2>
        </div> */}

      </div>
    </div>
  );
}