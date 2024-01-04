import React from 'react'
import { NavLink } from 'react-router-dom'
import MegaDropdown from '../MegaDropdown'
import Dropdown from '../Dropdown'
import NavbarActions from '../NavbarActions'
import './index.scss'

const MainNavbar = () => {
  return (
    <nav id='nav'>
      <div className='navbar hidden lg:grid items-center grid-cols-12 px-4 text-white'>
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
              <Dropdown
                grid={'grid-cols-3'}
                className={
                  'dropdown fixed h-auto bg-white text-black p-8 justify-between gap-10'
                }
              />
            </li>
          </ul>
        </div>
        <NavbarActions />
      </div>
    </nav>
  )
}

export default MainNavbar
