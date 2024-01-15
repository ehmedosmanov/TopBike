import React from 'react'
import BikeService from './BikeService'

const ServicesBike = () => {
  return (
    <section id='services' className='py-[60px]'>
      <div className='wrapper'>
        <div className='services grid grid-cols-1 md:grid-cols-3 gap-8 '>
          <BikeService />
          <BikeService />
          <BikeService />
        </div>
      </div>
    </section>
  )
}

export default ServicesBike
