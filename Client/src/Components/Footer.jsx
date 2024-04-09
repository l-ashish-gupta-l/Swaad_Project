import React from 'react'
import LOGO from "../assets/LOGO.png"


function Footer() {
    return (<>      
      <div className='w-full bg-[#252423] text-[#838181] flex justify-center items-center flex-col border-b-[1px] border-[#9E9B9B]'>
            <div className='image w-full h-[20vh]' >

            </div>
            <div className='Links flex gap-24   font-["para"]'>
                <div className='link  text-center w-[15vw]'>
                    <h1 className='font-bold'>About restaurant</h1>
                    <p className='font-extralight'>Enjoy a wonderful cafe
                        dining experience</p>
                </div>
                <div className='link  text-center w-[15vw]'>
                    <h1 className='font-bold'>About restaurant</h1>
                    <p className='font-extralight'>Enjoy a wonderful cafe
                        dining experience</p>
                </div>
                <div className='link  text-center w-[15vw]'>
                    <h1 className='font-bold'>About restaurant</h1>
                    <p className='font-extralight'>Enjoy a wonderful cafe
                        dining experience</p>
                </div>
                <div className='link  text-center w-[15vw]'>
                    <h1 className='font-bold'>About restaurant</h1>
                    <p className='font-extralight'>Enjoy a wonderful cafe
                        dining experience</p>
                </div>

            </div>
            <div className='Logo'>
                <img src={LOGO} alt='LOGO' className='w-[10vw]' />
            </div>
    </div>
        <div>
            <div className='Links flex justify-between gap-24  font-["para"] bg-[#252423] text-[#838181] px-5 py-3'>
                <div className='link  text-center w-[15vw]'>
                    <h1 className=''>About restaurant</h1>
                    
                </div>
                <div className='link  text-center w-[15vw]'>
                    <h1 className='f'>About restaurant</h1>
                    
                </div>
                

            </div>
        </div>
    </>

    )
}

export default Footer