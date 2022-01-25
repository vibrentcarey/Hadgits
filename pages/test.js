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

export default function Navbari() {
  const [openNavbar, setOpenNavbar] = useState(false);
  console.log(openNavbar)
  return (
    <Navbar color="lightBlue" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>Navbar</NavbarBrand>
          <NavbarToggler
            color="white"
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple="light"
          />
        </NavbarWrapper>

        <nav>
          <nav className="flex justify-center">
            <NavItem active="light" ripple="light">
              <Icon name="language" size="xl" />
            </NavItem>
            <NavLink href="#navbar" ripple="light">
              <Icon name="account_circle" size="xl" />
            </NavLink>
            <NavItem ripple="light">
              <Icon name="settings" size="xl" />
            </NavItem>
          </nav>
        </nav>
      </NavbarContainer>
    </Navbar>
  );
}