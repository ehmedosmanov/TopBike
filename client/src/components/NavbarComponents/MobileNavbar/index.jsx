import React, { useContext } from 'react'
import DarkLogo from '../../../assets/images/LOGO.avif'
import NavbarActions from '../NavbarActions'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import MenuSidebar from '../MenuSidebar'
import Overlay from '../../CommonComponents/Overlay'
import { GlobalContext } from '../../../context/GlobalContext'
const MobileNavbar = () => {
  const [open, setOpen] = useState(false)
  const { isActive, toggleIsActive } = useContext(GlobalContext)
  const handleOpenClick = () => {
    setOpen(!open)
    toggleIsActive()
  }
  console.log(open)

  return (
    <>
      <MenuSidebar open={open} />
      <nav id='mobile-nav'>
        <div className='mobile-navbar lg:hidden  w-full top-0 justify-between items-center flex  bg-white p-4'>
          <div className='icon-menu cursor-pointer'>
            <div
              className='iconmenu p-1 inline-block align-middle'
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
          <div className='nav-actions col-span-2 flex justify-end gap-4'>
            <span className='search cursor-pointer w-[17px] md:w-[24px]'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 512 512'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z'></path>
              </svg>
            </span>
            <span className='basket cursor-pointer w-[17px] md:w-[24px]'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 512 512'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='32'
                  d='M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32'></path>
              </svg>
            </span>
          </div>
        </div>
      </nav>
      <Overlay open={open} setOpen={setOpen} />
    </>
  )
}

export default MobileNavbar
