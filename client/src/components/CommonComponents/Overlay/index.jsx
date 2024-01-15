import React, { useContext } from 'react'
import './index.scss'
import { GlobalContext } from '../../../context/GlobalContext'

const Overlay = ({ setOpen, open }) => {
  const { isActive, toggleIsActive, setIsActive, setIsOpen, isOpen } =
    useContext(GlobalContext)

  const handleOverlayClick = () => {
    setOpen(false)
    setIsActive(false)
    setIsOpen(false)
  }

  return (
    <div
      onClick={handleOverlayClick}
      className={`overlay fixed w-full h-screen z-20 top-0 bottom-0 left-0 right-0 cursor-pointer ${
        open || isActive || isOpen ? 'active' : ''
      }`}></div>
  )
}

export default Overlay
