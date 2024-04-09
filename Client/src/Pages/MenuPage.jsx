import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import aboutimg from '../assets/About-me-main.jpg'
import { Mainbtn } from '../Components/LandingPage.jsx'
import MENUBIG from '../assets/MENU.webp'
import MenuPAGEBg from '../assets/MenuPAGEBg.jpg'
import Menu from '../Components/Menu'
function MenuPage() {
  return (<>
    <Navbar color={'text-[#383632]'} />
    <div className='w-full py-10   flex justify-center items-center flex-col relative'>
      <img src={MenuPAGEBg} alt="bg" className='absolute -z-10  object-cover top-0 left-0' />
      <div>
        <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '> OUR MENU </h1>
        <p className='font-bold uppercase text-[#D51F0F] text-center'>- REMARKABLE RECIPES -</p>
      </div>
      <div className="content">
        <div className='top my-10 flex px-28 gap-10  justify-center items-center '>
          <div className='left  '>
            <img src={MENUBIG} alt='dises' />
          </div>
          <div className='right w-1/2 '>
            <p className='font-bold text-[#D51F0F]'>- BEST QUALITY FOOD</p>
            <h1 className='font-["Bebas"] text-[#383632] text-[4vw] leading-none '>The greatest table luxury restaurant.</h1>
            <p className='font-["para"] text-[#8D8987]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloremque architecto dolorum dolore eius itaque minus ratione aut. Expedita accusantium fugiat nemo, eligendi facilis corporis.</p>
            <div className='flex items-center ' >
              <Mainbtn Text={"About restaurant"} />
              <h1 className='font-["Bebas"] text-2xl mt-5 ml-10 text-[#383632]' >+91 625 265223</h1>
            </div>
          </div>
        </div>
      </div>
       <Menu/>
    </div>
    <Footer />
  </>
  )
}

export default MenuPage