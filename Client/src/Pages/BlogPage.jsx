import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MenuPAGEBg from '../assets/MenuPAGEBg.jpg'
function BlogPage() {
  return (
    <>
      <Navbar color={'text-[#383632]'}  />
      <div className="flex justify-center items-center relative flex-col py-20 ">
        <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '> Latest Blog </h1>
        <p className='font-bold uppercase text-[#D51F0F] text-center'>-STORIES FROM RESTAURANT-</p>
        <img src={MenuPAGEBg} alt="bg" className='absolute -z-10  object-cover top-0 left-0' />
      </div>
      <div className=' grid grid-flow-row  bg-black justify-center items-center '>
        <div className='w-4/5 h-4/5  grid grid-flow-col '>
          <div className='w-80 h-80 border'></div>
          <div className='w-80 h-80 border'></div>
          <div className='w-80 h-80 border'></div>
        </div>
        <div className='w-4/5 h-4/5  grid grid-flow-col '>
          <div className='w-80 h-80 border'></div>
          <div className='w-80 h-80 border'></div>
          <div className='w-80 h-80 border'></div>
        </div>
        <div className='w-4/5 h-4/5  grid grid-flow-col '>
          <div className='w-80 h-80 border'></div>
          <div className='w-80 h-80 border'></div>
          <div className='w-80 h-80 border'></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogPage