import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MenuPAGEBg from '../assets/MenuPAGEBg.jpg'
import GalleryDATA from '../assets/GalleryPhotos'
function Gallery() {
  return (
    <>
      <Navbar color={'text-[#383632]'} />
      <div className="flex justify-center items-center relative flex-col py-20 ">
        <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '> PHOTO  GALLERY </h1>
        <p className='font-bold uppercase text-[#D51F0F] text-center'>-LUXURY RESTAURANT-</p>
        <img src={MenuPAGEBg} alt="bg" className='absolute -z-10  object-cover top-0 left-0' />
      </div>
      <div className=' mx-auto w-fit  grid grid-cols-3 gap-5 mb-10 '>
        {GalleryDATA.map((item, index) => {
          return (
            <div className='w-80 h-80 overflow-hidden relative rounded-md after:w-full after:h-full after:bg-black after:opacity-50 after:absolute after:-z-10 after:top-0 after:left-0 after:hover:z-10 cursor-pointer'  >
              <img src={item} alt={index} className='object-cover h-full w-full' />
            </div>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default Gallery