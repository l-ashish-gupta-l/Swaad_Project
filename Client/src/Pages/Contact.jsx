import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MenuPAGEBg from '../assets/MenuPAGEBg.jpg'
function Contact() {
  return (
      <>
      <Navbar color={'text-[#383632]'} />
      <div className="flex justify-center items-center relative flex-col py-20 ">
        <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '> PHOTO  GALLERY </h1>
        <p className='font-bold uppercase text-[#D51F0F] text-center'>-LUXURY RESTAURANT-</p>
        <img src={MenuPAGEBg} alt="bg" className='absolute -z-10  object-cover top-0 left-0' />
      </div>
          <Footer />
      </>
  )
}

export default Contact