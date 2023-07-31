import React, { useState } from 'react'
import { menuIcon } from '../../helper/iconData'
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from './Navbar.style'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <Nav  justify="space-between" wrap="wrap">
      <Logo>Clarusway Library</Logo>
      <HamburgerIcon onClick={()=> setToggle(!toggle)}>{menuIcon}</HamburgerIcon>
      <Menu showMenu={toggle}>
        <MenuLink>Home</MenuLink>
        <MenuLink>About</MenuLink>
        <MenuLink>Detail</MenuLink>
        <MenuLink>Home</MenuLink>
        <MenuLink>Home</MenuLink>
      </Menu>
      </Nav>
  )
}

export default Navbar