import React from 'react'
import { NavLink } from 'react-router-dom'

const NewsCard = ({ month }) => {
  return (
    <div className=' cursor-pointer group px-8'>
      <div className='blog-img relative top-0 bottom-0 mb-6 overflow-hidden'>
        <img
          className='transform group-hover:scale-110 overflow-hidden duration-300 transition-all'
          src='https://topbike-store-demo.myshopify.com/cdn/shop/articles/blog-post3_1024x1024.jpg?v=1607478877'
          alt='Blog'
        />
        <div className='calendar flex flex-col items-center justify-center shadow-md w-[48px] h-[48px] lg:w-[68px] lg:h-[68px] absolute top-[12px] right-[12px] lg:top-[30px] lg:right-[30px] bg-white'>
          <span className='day text-sm lg:text-lg'>08</span>
          <span className='divider bg-black h-[1px] w-6/12'></span>
          <span className='month whitespace-nowrap  overflow-hidden w-3/4 text-center text-sm lg:text-lg'>
            {month?.substring(0, 3)}
          </span>
        </div>
      </div>
      <div className='content text-left ml-1'>
        <span className='text-[#83868c] hover:text-primary duration-300'>
          News
        </span>
        <h3 className='py-4 text-[1rem] lg:text-[1.6rem] w-1/2 font-semibold'>
          One Week in Bali: A Great Trip for a Lifetime to Choose
        </h3>
        <p className='whitespace-nowrap text-ellipsis overflow-hidden text-sm font-normal mb-4 w-8/12 text-[#83868c]'>
          Are you planning to have a short trip to Bali? What is best about a
          short visit to a particular place is...
        </p>
        <NavLink
          className={
            'text-black border-black border-b-2 hover:border-b-primary font-bold hover:text-primary duration-300'
          }>
          Readmore
        </NavLink>
      </div>
    </div>
  )
}

export default NewsCard
