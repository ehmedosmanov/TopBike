import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const Dropdown = ({ grid, className }) => {
  return (
    <div className={`${className} grid ${grid}`}>
      <ul className='dropdown'>
        <h3 className='dropdown-heading text-xl font-semibold  mt-3'>
          Clothes
        </h3>
        <span className='h-[1px] w-20 my-2 bg-blue-500 block'></span>
        <li className='dropdown-item'>
          <NavLink to={'/category1'} className={'dropdown-link'}>
            Hoodies
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Jackets
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Pants
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Sweatshirts
          </NavLink>
        </li>
      </ul>
      <ul className='dropdown'>
        <h3 className='dropdown-heading text-xl font-semibold  mt-3'>
          Cycling
        </h3>
        <span className='h-[1px] w-20 my-2 bg-blue-500 block'></span>
        <li className='dropdown-item'>
          <NavLink to={'/category1'} className={'dropdown-link'}>
            E-Bikes
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Bikes
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Bike Accessories
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Bike Accessories
          </NavLink>
        </li>
      </ul>
      <ul className='dropdown'>
        <h3 className='dropdown-heading text-xl font-semibold  mt-3'>
          Swimming
        </h3>
        <span className='h-[1px] w-20 my-2 bg-blue-500 block'></span>
        <li className='dropdown-item'>
          <NavLink to={'/category1'} className={'dropdown-link'}>
            Competition Swimsuits
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Briefs & Suits
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Neoprene Clothing
          </NavLink>
        </li>
      </ul>
      <ul className='dropdown'>
        <h3 className='dropdown-heading text-xl font-semibold  mt-3'>
          Fitness
        </h3>
        <span className='h-[1px] w-20 my-2 bg-blue-500 block'></span>
        <li className='dropdown-item'>
          <NavLink to={'/category1'} className={'dropdown-link'}>
            Sports Nutrition & Body Care
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Heart Rate Monitors & Sports Watches
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Shoes
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Accessories
          </NavLink>
        </li>
      </ul>
      <ul className='dropdown'>
        <h3 className='dropdown-heading text-xl font-semibold  mt-3'>
          Running
        </h3>
        <span className='h-[1px] w-20 my-2 bg-blue-500 block'></span>
        <li className='dropdown-item'>
          <NavLink to={'/category1'} className={'dropdown-link'}>
            Shoes
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Running Clothing
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Running Backpacks & Hydration Packs
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Compression Sleeves & Support
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Textile Care
          </NavLink>
        </li>
      </ul>
      <ul className='dropdown'>
        <h3 className='dropdown-heading text-xl font-semibold  mt-3'>
          Triathlon
        </h3>
        <span className='h-[1px] w-20 my-2 bg-blue-500 block'></span>
        <li className='dropdown-item'>
          <NavLink to={'/category1'} className={'dropdown-link'}>
            Electronics
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Shoes
          </NavLink>
        </li>
        <li className='dropdown-item'>
          <NavLink to={'/category2'} className={'dropdown-link'}>
            Neoprene Clothing
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
