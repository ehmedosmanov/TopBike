import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import DropdownItem from '../DropdownItem'

const Dropdown = ({ grid, className, heading, items }) => {
  return (
    <div className={`${className} grid ${grid}`}>
      <ul className='dropdown'>
        <h3 className='dropdown-heading text-xl font-semibold  mt-3'>
          {heading}
        </h3>
        <span className='h-[1px] w-20 my-2 bg-blue-500 block'></span>
        {items &&
          items.map(item => (
            <DropdownItem key={item.to} to={item.to} heading={item.heading} />
          ))}
      </ul>
    </div>
  )
}

export default Dropdown
