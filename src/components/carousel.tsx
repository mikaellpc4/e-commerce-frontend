import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import { BiShoppingBag } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'


SwiperCore.use([Navigation, Pagination, Autoplay])

export const Carousel = ({ className = '' }) => {
  const slides = []

  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide className='w-full grid lg:grid-cols-2 md:grid-flow-col' key={`slide-${i}`} tag='li'>
        <div className='lg:hidden absolute bg-black inset-0 bg-opacity-40'></div>
        <Image src={`https://picsum.photos/id/${i}/1920/1080`} width={1920} height={1080} alt={`Slide ${i}`}
          className='h-[100%] w-[100%] object-cover'
        />
        <div className="
          flex 
          absolute 
          lg:static 
          lg:text-black 
          text-white 
          flex-col 
          items-start 
          justify-center 
          p-4 
          lg:py-0
          px-[15%]
          py-[10%]
          ">
          <h1 className='font-bold lg:text-6xl text-4xl' > Summer is coming </h1>
          <h1 className='font-bold lg:text-6xl text-4xl' > Upto 80% OFF </h1>
          <h1 className='my-5 lg:text-xl '> Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</h1>
          <div className='shadow-md shadow-yellow-400'>
            <Link className='flex px-4 py-3 gap-3 bg-yellow-300' href={`/catalog/${i}`}>
              <span className='text-md my-auto mr-2 font-bold text-gray-900'> Compre agora </span>
              <span className='border border-cyan-400 h-10' />
              <BiShoppingBag className='my-auto' size={30} />
            </Link>
          </div>
        </div>
        <div className='hidden'>

        </div>
      </SwiperSlide>
    )
  }

  return (
    <React.Fragment>
      <Swiper
        className={`lg:h-[600px] h-[450px] border bg-cyan-400 select-none ${className}`}
        tag="section"
        wrapperTag='ul'
        id="main"
        navigation
        autoplay={{
          delay: 6000,
          disableOnInteraction: false
        }}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  )
}
