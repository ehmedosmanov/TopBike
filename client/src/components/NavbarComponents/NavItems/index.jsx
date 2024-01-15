import React from 'react'
import MegaDropdown from '../MegaDropdown'
import { NavLink } from 'react-router-dom'
import Dropdown from '../Dropdown'

const NavItem = ({ link, title, isDropdown, dropdown, categories }) => {
  return (
    <li className='nav-item'>
      <NavLink to={link} className={'nav-link'}>
        {title}
      </NavLink>
      {/* {isMegaDropdown && (
        <MegaDropdown className={'fixed w-full h-auto  left-0 right-0'} />
      )} */}
      {isDropdown ? (
        <>
          {dropdown &&
            dropdown.map(item => (
              <>
                {console.log(isDropdown)}
                <Dropdown
                  {...item}
                  grid={'grid-cols-3'}
                  className={
                    'dropdown fixed h-auto bg-white text-black p-8 justify-between gap-10'
                  }
                />
              </>
            ))}
        </>
      ) : null}
    </li>
  )
}

export default NavItem
