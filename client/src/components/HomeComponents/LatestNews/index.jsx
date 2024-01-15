import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './index.scss'
import NewsCard from './NewsCard'

const LatestNews = () => {
  const breakpoints = {
    1200: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
  return (
    <section id='latest-news' className='px-4 py-[60px]'>
      <div className='heading'>
        <h3 className='text-center text-2xl lg:text-[60px]'>LATEST NEWS</h3>
      </div>
      <div className='slider-news py-10'>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          draggable={true}
          breakpoints={breakpoints}
          className='mySwiper'>
          <SwiperSlide>
            <NewsCard month={'December'} />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default LatestNews
