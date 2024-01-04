import React from 'react'
import './index.scss'

const Overlay = ({ handleOpenClick, open }) => {
  return (
    <div
      onClick={handleOpenClick}
      className={`overlay fixed w-full h-screen z-20 top-0 bottom-0 left-0 right-0 cursor-pointer ${
        open ? 'active' : ''
      }`}></div>
  )
}

export default Overlay
