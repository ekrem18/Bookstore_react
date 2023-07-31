import React from 'react'
import { menuIcon } from '../../helper/iconData'
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from './Navbar.style'

const Navbar = () => {
  return (
    <Nav  justify="space-between">
      <Logo>Clarusway Library</Logo>
      <HamburgerIcon>{menuIcon}</HamburgerIcon>
      <Menu>
        <MenuLink>Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/detail/1">Detail</MenuLink>
        <MenuLink>Home</MenuLink>
        <MenuLink>Home</MenuLink>
      </Menu>
      </Nav>
  )
}

export default Navbar