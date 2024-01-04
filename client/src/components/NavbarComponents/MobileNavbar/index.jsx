import React from 'react'
import DarkLogo from '../../../assets/images/LOGO.avif'
import NavbarActions from '../NavbarActions'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import MenuSidebar from '../MenuSidebar'
import Overlay from '../../CommonComponents/Overlay'
const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  const handleOpenClick = () => {
    setOpen(!open)
  }
  console.log(open)

  return (
    <>
      <MenuSidebar open={open} />
      <nav id='mobile-nav'>
        <div className='mobile-navbar lg:hidden fixed z-10 w-full top-0 justify-between items-center flex  bg-white p-4'>
          <div className='icon-menu cursor-pointer'>
            <div
              class='iconmenu p-1 inline-block align-middle'
              onClick={handleOpenClick}>
              <span className='bg-black w-6 h-[2px] block'></span>
              <span className='bg-black w-[12px] h-[2px] my-[6px] block'></span>
              <span className='bg-black w-6 h-[2px] block'></span>
            </div>
          </div>
          <div className='w-[100px] inline-block sm:absolute sm:left-0 sm:right-0 sm:my-0 sm:mx-auto'>
            <div className=''>
              <NavLink to={'/'}>
                <img src={DarkLogo} alt='' />
              </NavLink>
            </div>
          </div>
          <NavbarActions />
        </div>
      </nav>
      <Overlay open={open} handleOpenClick={handleOpenClick} />
    </>
  )
}

export default MobileNavbar
