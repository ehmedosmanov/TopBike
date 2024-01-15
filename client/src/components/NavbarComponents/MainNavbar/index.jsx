import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MegaDropdown from '../MegaDropdown'
import Dropdown from '../Dropdown'
import NavbarActions from '../NavbarActions'
import Account from '../Account'
import './index.scss'

import NavItem from '../NavItems'

const MainNavbar = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleNavbarScroll = () => {
      const scrollY = window.scrollY
      setScroll(scrollY > 50)
    }

    window.addEventListener('scroll', handleNavbarScroll)

    return () => {
      window.removeEventListener('scroll', handleNavbarScroll)
    }
  }, [])

  return (
    <nav id='nav'>
      <div
        className={`navbar hidden lg:grid items-center grid-cols-12 px-4 text-white fixed bg-none duration-300  w-full z-[20] ${
          scroll ? 'bg-black opacity-100 top-0 left-0 right-0' : ''
        }`}>
        <div className='nav-logo col-span-2'>
          <div className='logo w-3/6'>
            <img
              src='https://topbike-store-demo.myshopify.com/cdn/shop/files/Untitled-2.png?v=1613575289'
              alt=''
            />
          </div>
        </div>
        <div className='nav-content flex justify-center col-span-8'>
          <ul className='flex'>
            <li className='nav-item'>
              <NavLink to={'/'} className={'nav-link'}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/Shop'} className={'nav-link'}>
                Shop
              </NavLink>
              <MegaDropdown className={'fixed w-full h-auto  left-0 right-0'} />
            </li>
            <li className='nav-item'>
              <NavLink to={'/'} className={'nav-link'}>
                Features
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/'} className={'nav-link'}>
                FAQ
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/'} className={'nav-link'}>
                Blogs
              </NavLink>
              {/* <Dropdown
                grid={'grid-cols-3'}
                className={
                  'dropdown fixed h-auto bg-white text-black p-8 justify-between gap-10'
                }
              /> */}
            </li>
          </ul>
        </div>
        <NavbarActions />
      </div>
      <Account />
    </nav>
  )
}

export default MainNavbar
