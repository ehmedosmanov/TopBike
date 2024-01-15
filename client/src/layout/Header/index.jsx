import React from 'react'
import MainNavbar from '../../components/NavbarComponents/MainNavbar'
import './index.scss'
import MobileNavbar from '../../components/NavbarComponents/MobileNavbar'

const Header = () => {
  return (
    <header id='header'>
      <MainNavbar />
      <MobileNavbar />
    </header>
  )
}

export default Header
