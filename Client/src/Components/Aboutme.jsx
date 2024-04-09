import React from 'react'
import aboutimg from '../assets/About-me-main.jpg'
import { Mainbtn } from './LandingPage'
import { FaTruck } from "react-icons/fa6"
function Heading({ Text }) {
    return (
        <div className='heading relative  '>
            <h1 className='text-center font-["bebas"] text-[#dfdede] text-[14vw] leading-none font-bold'>{Text}</h1>
            <h1 className='absolute  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-["rage"] text-[10vw] whitespace-nowrap text-black'>{Text}</h1>

        </div>
    )
}


function Aboutme() {
    return (
        <div className='w-full  py-10 px-12'>
            <Heading Text={"Taste Unlimeted"} />
            <div className="content">
                <div className='top my-10 flex px-28 gap-10  justify-center items-center '>
                    <div className='left  '>
                        <img src={aboutimg} alt='dises' />
                    </div>
                    <div className='right w-1/2 '>
                        <p className='font-bold text-[#D51F0F]'>SINCE 2000</p>
                        <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '>Wonderful dining
                            experience & food.</h1>
                        <p className='font-["para"] text-[#8D8987]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloremque architecto dolorum dolore eius itaque minus ratione aut. Expedita accusantium fugiat nemo, eligendi facilis corporis.</p>
                        <div className='flex items-center ' >

                            <Mainbtn Text={"About restaurant"} />
                            <h1 className='font-["Bebas"] text-2xl mt-5 ml-10 text-[#383632]' >+91 625 265223</h1>
                        </div>
                    </div>
                </div>
                <div className='bottom  my-20 flex  gap-20   justify-center items-center'>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className='rounded-full w-[60px] h-[60px] border-[1.5px] shadow-xl bg-white flex justify-center items-center'>
                            <FaTruck size={25} color="#383632" />
                        </div>
                        <div className='text '>
                            <h1 className='font-["Bebas"] text-2xl leading-none  text-[#383632] '>FAST DELIVERY</h1>
                            <h3 className=' text-[#8D8987] text-sm'>Within 30 min</h3>
                        </div>
                    </div>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className='rounded-full w-[60px] h-[60px] border-[1.5px] shadow-xl bg-white flex justify-center items-center'>
                            <FaTruck size={25} color="#383632" />
                        </div>
                        <div className='text '>
                            <h1 className='font-["Bebas"] text-2xl leading-none  text-[#383632] '>FAST DELIVERY</h1>
                            <h3 className=' text-[#8D8987] text-sm'>Within 30 min</h3>
                        </div>
                    </div>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className='rounded-full w-[60px] h-[60px] border-[1.5px] shadow-xl bg-white flex justify-center items-center'>
                            <FaTruck size={25} color="#383632" />
                        </div>
                        <div className='text '>
                            <h1 className='font-["Bebas"] text-2xl leading-none  text-[#383632] '>FAST DELIVERY</h1>
                            <h3 className=' text-[#8D8987] text-sm'>Within 30 min</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Aboutme
export {Heading}