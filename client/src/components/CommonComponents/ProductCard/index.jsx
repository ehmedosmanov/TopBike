import React from 'react'
import { IoHeartOutline, IoBagOutline, IoSearch } from 'react-icons/io5'
import Countdown from 'react-countdown'

const ProductCard = ({
  isSale,
  price,
  discount,
  image,
  title,
  saleEndDate
}) => {
  const Completionist = () => <span className='text-[26px]'>Time is up!</span>
  const renderer = ({ hours, days, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />
    } else {
      return (
        <div className='countdown-content flex gap-4'>
          <div className='countdown-time'>
            <span className='font-semibold'>{hours}</span>
            <span className=' text-[8px] lg:text-[11px]'>Hours</span>
          </div>
          <div className='countdown-time'>
            <span className='font-semibold'>{days}</span>
            <span className=' text-[8px] lg:text-[11px]'>Days</span>
          </div>
          <div className='countdown-time'>
            <span className=' font-semibold'>{minutes}</span>
            <span className=' text-[8px] lg:text-[11px]'>Minutes</span>
          </div>
          <div className='countdown-time'>
            <span className=' font-semibold'>{seconds}</span>
            <span className=' text-[8px] lg:text-[11px]'>Seconds</span>
          </div>
        </div>
      )
    }
  }
  return (
    <div className='cursor-pointer group'>
      <div className='product-img relative top-0 bottom-0 overflow-hidden'>
        <img src={image} alt='Product' />
        <span className='sale px-4 py-1 bg-red-600 font-semibold text-[12px] text-white absolute top-0 left-8'>
          SALE
        </span>
        <div className='product-actions absolute top-0 right-0 flex flex-col gap-4 overflow-hidden translate-x-8 group-hover:translate-x-0 duration-300 transition-all'>
          <span className=' product-action'>
            <IoHeartOutline />
          </span>
          <span className=' product-action'>
            <IoBagOutline />
          </span>
          <span className=' product-action'>
            <IoSearch />
          </span>
        </div>
      </div>
      {isSale && saleEndDate && (
        <div className='countdown py-10'>
          <Countdown date={new Date(saleEndDate)} renderer={renderer}>
            <Completionist />
          </Countdown>
        </div>
      )}
      <div className='product-content'>
        <h4 className='text-semibold'>{title}</h4>
        <div className='prices text-lg'>
          <span className='text-primary font-bold'>{price}</span>
          {discount && (
            <span className='discount text-[#ccc] text-[12px] ml-2 font-bold line-through'>
              ${discount}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
