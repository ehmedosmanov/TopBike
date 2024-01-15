import React from 'react'
import Delivery from '../../../../assets/images/free-delivery.png'

const BikeService = () => {
  return (
    <div className='border p-4 text-center flex items-center justify-center flex-col px-10 cursor-pointer'>
      <div>
        <img src={Delivery} alt='Delivery' />
      </div>
      <div className='content mt-4'>
        <h4 className='text-[14px] font-semibold'>Free Shipping</h4>
        <p className='text-[14px]'>Only order from $230</p>
      </div>
    </div>
  )
}

export default BikeService
