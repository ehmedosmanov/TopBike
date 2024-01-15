import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import SliderImage1 from '../../../assets/images/slideshow_3.webp'
import SliderImage2 from '../../../assets/images/slideshow_3.webp'
import Button from '../../CommonComponents/Button'

const Hero = () => {
  return (
    <div className='hero-slider'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className='mySwiper'>
        <SwiperSlide className=''>
          <div
            className={` z-10  min-h-[100vh] bg-no-repeat bg-center bg-cover flex justify-between items-center flex-wrap`}
            style={{
              backgroundImage: `url("https://topbike-store-demo.myshopify.com/cdn/shop/files/slideshow_3.jpg?v=1613575289")`
            }}>
            <div className='wrapper py-20'>
              <h1 className='text-white font-semibold [font-size:_clamp(2em,5vw,10em)]'>
                FOQGWEOGQWEGQWEG
              </h1>
              <p className='text-white  [font-size:_clamp(1em,1vw,5em)]   '>
                QWOEFOQWEFMQOWEF
              </p>
              <div className='py-4'></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div
            className={` z-10  min-h-[100vh] bg-no-repeat bg-center bg-cover flex justify-between items-center flex-wrap`}
            style={{
              backgroundImage: `url("https://topbike-store-demo.myshopify.com/cdn/shop/files/slideshow_4.jpg?v=1613575294")`
            }}>
            <div className='wrapper py-20'>
              <h1 className='text-white font-semibold [font-size:_clamp(2em,5vw,10em)]'>
                Off Road Bicycle
              </h1>
              <p className='text-white  [font-size:_clamp(1em,1vw,5em)]   '>
                Here to bring your life style to the next level.
              </p>
              <div className='py-4'>
                <Button
                  hoverColor={'hover:bg-primary'}
                  backgroundColor={'bg-none'}
                  borderColor={'border-primary'}>
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
