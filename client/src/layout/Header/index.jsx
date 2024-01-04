import React from 'react'
import MainNavbar from '../../components/NavbarComponents/MainNavbar'
import './index.scss'

const Header = () => {
  return (
    <header id='header' className='fixed bg-black top-0 w-full z-[1]'>
      <MainNavbar />
    </header>
  )
}

export default Header
