import React from 'react'
import { NavLink } from 'react-router-dom'

const DropdownItem = ({ to, heading }) => {
  return (
    <li className='dropdown-item'>
      <NavLink to={to} className='dropdown-link'>
        {heading}
      </NavLink>
    </li>
  )
}

export default DropdownItem
