import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import swiperimg from "../assets/swiper.png"
import { GoDotFill } from "react-icons/go";
import GalleryDATA from '../assets/GalleryPhotos'

function Populardishes() {
  return (
    <div className='w-full flex  flex-col  items-center '>
      <div>
        <p className='font-bold uppercase text-[#D51F0F] text-center'>- Specials choice -</p>
        <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '>Popular dishes</h1>
      </div>
      <div className='Swiper w-full h-full py-10 px-5 ' >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,

          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper cursor-grab"
        >
          {GalleryDATA.map((item, index) => (
            <SwiperSlide className='mb-14 ' key={index}>
              <img src={item} />
              <div className='mt-3 text-center'>
                <h1 className=' text-[#383632] font-["para"]' >Appeteaser blatter</h1>
                <p className=' text-[#8D8987] mt-3 font-["para"] font-light flex justify-center items-center gap-3' ><span><GoDotFill /></span>Cucumber <span><GoDotFill /></span>Cucumber <span><GoDotFill /></span>Cucumber </p>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

    </div>
  )
}

export default Populardishes