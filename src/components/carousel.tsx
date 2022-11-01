import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router-dom'


SwiperCore.use([Navigation, Pagination, Autoplay])

export const Carousel = ({ className = '' }) => {
  const slides = []

  for (let i = 0; i < 10; i++) {
    slides.push(
      <SwiperSlide className='w-full grid grid-cols-2' key={`slide-${i}`} tag='li'>
        <img className='h-full max-w-full' src={`https://picsum.photos/id/${i + 1}/500/300`} alt={`Slide ${i}`} />
        <div className="max-w-full h-full flex flex-col p-44 items-start">
          <h1 className='font-bold text-6xl'> Summer is coming </h1>
          <h1 className='font-bold text-6xl text-cyan-100'> Upto 80% OFF </h1>
          <p className='my-5 text-xl'> Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
          <div className='shadow-md shadow-yellow-400'>
            <Link className='flex px-4 py-3 gap-3 bg-yellow-300' to={`/catalog/${i}`}>
              <span className='text-md my-auto mr-2 font-bold text-gray-900'> Compre agora </span>
              <span className='border border-cyan-400 h-10' />
              <BiShoppingBag className='my-auto' size={30} />
            </Link>
          </div>
        </div>
      </SwiperSlide>
    )
  }

  return (
    <React.Fragment>
      <Swiper
        className={`h-[600px] max-w-100 border bg-cyan-400 select-none ${className}`}
        tag="section"
        wrapperTag='ul'
        id="main"
        navigation
        autoplay={{
          delay: 6000,
          disableOnInteraction: false
        }}
      >
        <div className='swiper-button-prev text-yellow-300 pointer-events-none' />
        {slides}
        <div className='swiper-button-next text-yellow-300 pointer-events-none' />
      </Swiper>
    </React.Fragment>
  )
}
