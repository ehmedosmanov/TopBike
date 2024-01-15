import React from 'react'
import Dropdown from '../Dropdown'
import BicyclePerson from '../../../assets/images/apmenuitem_ihtml_2.webp'
import { useGetParentCategoriesQuery } from '../../../features/category/categoryApiSlice'

const MegaDropdown = ({ className }) => {
  const { data: parentcategories, isLoading: parentLoading } =
    useGetParentCategoriesQuery()

  return (
    <div
      className={`bg-white dropdown ${className} bg-white text-black p-8 z-[4]`}>
      <div className='grid grid-cols-12'>
        <div className='left-side-dropdown col-span-10'>
          <div className={`dropdown-content grid grid-cols-6`}>
            {parentcategories &&
              parentcategories.map(parentItem => (
                <Dropdown
                  key={parentItem._id}
                  className='dropdown-item'
                  heading={parentItem.heading}
                  items={parentItem.subcategories}
                />
              ))}
          </div>
        </div>
        <div className='right-side-dropdown col-span-2'>
          <div className='dropdown-img '>
            <img src={BicyclePerson} alt='BicyclePerson' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MegaDropdown
