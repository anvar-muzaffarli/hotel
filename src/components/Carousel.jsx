import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Card from './Card'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
  return (
    <div className='row carousel-bg mt-5'>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        "@1.00": {
          slidesPerView: 2,
          spaceBetween: 90,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

       
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>

      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>

      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      
     
    </Swiper>
    </div>
  )
}

export default Carousel