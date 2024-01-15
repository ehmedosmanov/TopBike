import React from 'react'
import Countdown from 'react-countdown'
import Button from '../../CommonComponents/Button'
import './index.scss'

const OnlyOnline = () => {
  const Completionist = () => <span className='text-[26px]'>Time is up!</span>
  const renderer = ({ hours, days, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />
    } else {
      return (
        <div className='countdown-content grid lg:grid-cols-4 grid-cols-2 gap-4'>
          <div className='countdown-time p-4 lg:p-8 bg-[#ffffff78] text-[#ff0000] w-[85px] h-[85px] lg:w-[130px] lg:h-[130px] flex items-center justify-center flex-col text-3xl'>
            <span className='font-semibold'>{hours}</span>
            <span className=' text-[12px] lg:text-[14px] text-black'>
              Hours
            </span>
          </div>
          <div className='countdown-time p-4 lg:p-8 bg-[#ffffff78] text-[#ff0000] w-[85px] h-[85px] lg:w-[130px] lg:h-[130px] flex items-center justify-center flex-col text-3xl'>
            <span className='font-semibold'>{days}</span>
            <span className=' text-[12px] lg:text-[14px] text-black'>Days</span>
          </div>
          <div className='countdown-time p-4 lg:p-8 bg-[#ffffff78] text-[#ff0000] w-[85px] h-[85px] lg:w-[130px] lg:h-[130px] flex items-center justify-center flex-col text-3xl'>
            <span className=' font-semibold'>{minutes}</span>
            <span className=' text-[12px] lg:text-[14px] text-black'>
              Minutes
            </span>
          </div>
          <div className='countdown-time p-4 lg:p-8 bg-[#ffffff78] text-[#ff0000] w-[85px] h-[85px] lg:w-[130px] lg:h-[130px] flex items-center justify-center flex-col text-3xl'>
            <span className=' font-semibold'>{seconds}</span>
            <span className=' text-[12px] lg:text-[14px] text-black'>
              Seconds
            </span>
          </div>
        </div>
      )
    }
  }
  return (
    <section id='only-online'>
      <div className='section-content bg-[url("https://topbike-store-demo.myshopify.com/cdn/shop/files/countdown-v1.jpg?v=1613575291")] py-[16px] lg:py-[100px] bg-no-repeat bg-center bg-cover h-[88vh] '>
        <div className='coundowon-content  pl-8 flex-col grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-wrap flex-col text-center'>
            <div className='heading'>
              <h4 className='text-[60px] text-[#ff0000] font-semibold'>
                Only Online
              </h4>
            </div>
            <div className='countdown py-4 flex text-center items-center justify-center'>
              <Countdown date={Date.now() + 9900000} renderer={renderer}>
                <Completionist />
              </Countdown>
            </div>
            <div className='content flex flex-col gap-4 items-center pb-6'>
              <p className='text-[18px] lg:text-[28px] py-8 font-semibold'>
                GET 30% OFF YOUR ORDER OF $100 OR MORE
              </p>
              <span className='text-xl text-[#ff0000]'>
                USE CODE “TOPBIKE30”
              </span>
              <Button
                backgroundColor={'bg-black'}
                borderColor={'black'}
                hoverColor={'hover:bg-danger'}>
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlyOnline
