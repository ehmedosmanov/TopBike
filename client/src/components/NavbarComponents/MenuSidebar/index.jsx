import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import { IoArrowForward } from 'react-icons/io5'

const MenuSidebar = ({ open }) => {
  const [activeTab, setActiveTab] = useState('menu')

  const handleTabClick = tab => {
    setActiveTab(tab)
  }
  return (
    <aside
      id='menu-sidebar'
      className={`${
        open ? 'active' : ''
      } fixed z-40 max-w-[420px] bg-white h-screen`}>
      <div className='menu-sidebar-content'>
        <div className='sidebar-heading'>
          <ul className='tabs grid grid-cols-2'>
            <li
              onClick={() => handleTabClick('menu')}
              className={`tab ${
                activeTab === 'menu' ? 'active' : ''
              } flex items-center text-center px-8 py-4 cursor-pointer text-xl gap-2`}>
              <div class='iconmenu p-1 inline-block align-middle'>
                <span className='w-6 h-[2px] block'></span>
                <span className='w-[12px] h-[2px] my-[6px] block'></span>
                <span className='w-6 h-[2px] block'></span>
              </div>
              <p className='hidden extra-small:block'>Menu</p>
            </li>
            <li
              onClick={() => handleTabClick('login')}
              className={`tab  ${
                activeTab === 'login' ? 'active' : ''
              }  flex items-center text-center px-8 py-4 cursor-pointer text-xl gap-2`}>
              <span className='w-[20px] h-[20px] '>
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
                    d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z'></path>
                  <path
                    fill='none'
                    strokeMiterlimit='10'
                    strokeWidth='32'
                    d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z'></path>
                </svg>
              </span>
              <p className='hidden extra-small:block'>Login</p>
            </li>
          </ul>
        </div>
        <div className='tabs-content'>
          <div
            className={`tab-content ${activeTab === 'menu' ? 'active' : ''}`}>
            <div className='menu-content'>
              <ul>
                <li className='flex items-center justify-between border-b cursor-pointer'>
                  <NavLink className={'pl-2 text-lg font-semibold'}>
                    Home
                  </NavLink>
                  <span className='p-6 border-l border-t'>
                    <IoArrowForward />
                  </span>
                </li>
                <li className='flex items-center justify-between border-b cursor-pointer'>
                  <NavLink className={'pl-2 text-lg font-semibold'}>
                    Shop
                  </NavLink>
                  <span className='p-6 border-l border-t'>
                    <IoArrowForward />
                  </span>
                  <div className='tab-menu'>
                    <div className='menu-heading'>
                      <p>Shop</p>
                    </div>
                  </div>
                </li>
                <li className='flex items-center justify-between border-b cursor-pointer'>
                  <NavLink className={'pl-2 text-lg font-semibold'}>
                    Featured
                  </NavLink>
                  <span className='p-6 border-l border-t'>
                    <IoArrowForward />
                  </span>
                </li>
                <li className='flex items-center justify-between border-b cursor-pointer'>
                  <NavLink className={'pl-2 text-lg font-semibold'}>
                    FAQ
                  </NavLink>
                  <span className='p-6 border-l border-t'>
                    <IoArrowForward />
                  </span>
                </li>
                <li className='flex items-center justify-between border-b cursor-pointer'>
                  <NavLink className={'pl-2 text-lg font-semibold'}>
                    Blogs
                  </NavLink>
                  <span className='p-6 border-l border-t'>
                    <IoArrowForward />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`tab-content ${activeTab === 'login' ? 'active' : ''}`}>
            <h1>Content TAB 2 </h1>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default MenuSidebar
