import React from 'react'
import Dropdown from '../Dropdown'
import BicyclePerson from '../../../assets/images/apmenuitem_ihtml_2.webp'

const MegaDropdown = ({ className }) => {
  return (
    <div className={`dropdown ${className} bg-white text-black p-8 z-[4]`}>
      <div className='grid grid-cols-12'>
        <div className='left-side-dropdown col-span-10'>
          <Dropdown className={'dropdown-content'} grid={'grid-cols-6'} />
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
