import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import './index.scss'
import { IoCloseSharp } from 'react-icons/io5'
import Logo from '../../../assets/images/LOGO.avif'
import Login from './Login'
import Register from './Register'
import ResetPassword from './ResetPassword'

const Account = () => {
  const {
    isActive,
    toggleIsActive,
    setIsActive,
    setActiveComponent,
    activeComponent,
    setIsOpen,
    isOpen,
    toggleIsOpen
  } = useContext(GlobalContext)

  return (
    <div
      className={`${
        isOpen ? 'active' : ''
      }  account-popup fixed shadow-md max-w-[450px] md:max-w-[600px] top-0 left-0 bottom-0 right-0 h-[600px] bg-white m-auto z-50 p-[50px]`}>
      <span
        onClick={() => {
          setActiveComponent('login')
          toggleIsOpen()
          setIsOpen(false)
          setIsActive(false)
        }}
        className=' cursor-pointer close-icon hover:rotate-180 hover:text-primary duration-300 text-4xl absolute -top-[35px] -right-[10px]'>
        <IoCloseSharp />
      </span>
      <div className='account-content text-black'>
        <div className='account-heading flex items-center flex-col justify-center'>
          <div className='logo text-center w-3/12  pb-[20px]'>
            <img src={Logo} alt='' />
          </div>
          <div className='bg-[#ccc] w-10/12 text-center h-[1px] '></div>
        </div>
      </div>
      <div className='account'>
        {activeComponent === 'login' && <Login />}
        {activeComponent === 'register' && <Register />}
        {activeComponent === 'resetPassword' && <ResetPassword />}
      </div>
    </div>
  )
}

export default Account
