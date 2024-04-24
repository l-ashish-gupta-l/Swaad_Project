import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MenuPAGEBg from '../assets/MenuPAGEBg.jpg'
import GalleryDATA from '../assets/GalleryPhotos'
function BlogPage() {
  return (
    <>
      <Navbar color={'text-[#383632]'} />
      <div className="flex justify-center items-center relative flex-col py-20 ">
        <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '> Latest Blog </h1>
        <p className='font-bold uppercase text-[#D51F0F] text-center'>-STORIES FROM RESTAURANT-</p>
        <img src={MenuPAGEBg} alt="bg" className='absolute -z-10  object-cover top-0 left-0' />
      </div>
      <div className=' mx-auto w-fit  grid grid-cols-3 gap-5 mb-10 '>
        {GalleryDATA.map((item, index) => {
          return (
            <div className='w-80 h-80 overflow-hidden relative rounded-md cursor-pointer'  >
              <img src={item} alt={index} className='object-cover h-full w-full' />
              <div className='w-full p-5 h-full absolute top-0 left-0 bg-black opacity-50'>
                
              </div>
              <div className='w-full h-full absolute top-0 left-0 p-5 flex justify-between items-start flex-col'>
                <button className='bg-white p-2 font-["para"] tracking-wider rounded-sm text-sm text-black font-semibold hover:border hover:border-white hover:text-white hover:bg-transparent duration-300'>
                  BUTTON
                </button>
                <h1 className='font-["Bebas"] text-2xl text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>


              </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default BlogPage