import React from 'react'
import LOGO from "../assets/LOGO.png"
import footer_bg from "../assets/FOoter_bg.jpg"

function Footer() {
    return (<>
        <div className='w-full h-[80vh]  overflow-hidden text-[#838181] flex  relative justify-between items-center flex-col border-b-[1px] border-[#9E9B9B]'>
            <div className='image w-full h-fit absolute -z-10' >
                <img src={footer_bg} alt="bg" className='w-full h-full   ' />
            </div>
            <div className='Links flex justify-center items-center gap-24 w-full  font-["para"] mt-[20%]'>
                <div className='link  text-center w-[15vw]'>
                    <h1 className='font-bold '>About restaurant</h1>
                    <p className='font-extralight'>Enjoy a wonderful cafe
                        dining experience</p>
                </div>
                <div className='link  text-center w-[15vw]'>
                    <h1 className='font-bold'>LET'S TALK</h1>
                    <p className='font-extralight'>Phone: 1-800-222-000</p>
                    <p className='font-extralight'>Phone: 1-800-222-000</p>
                </div>
                <div className='link  text-center w-[15vw]'>
                    <h1 className='font-bold'>BOOK A TABLE</h1>
                    <p className='font-extralight'>info@yourdomain.com</p>
                    <p className='font-extralight'>info@yourdomain.com</p>
                </div>
                <div className='link  text-center w-[15vw]'>
                    <h1 className='font-bold'>CONTACT US</h1>
                    <p className='font-extralight'>Lorem ipsum consectetur adipiscing onsectetur.</p>
                </div>

            </div>
                <div className='w-full  bg-green-500'>
                    <div className='Links flex justify-between gap-24  font-["para"]  text-[#838181] px-5 py-3'>
                        <div className='link  text-center w-[15vw]'>
                            <h1 className=''>About restaurant</h1>

                        </div>
                        <div className='link  text-center w-[15vw]'>
                            <h1 className='f'>About restaurant</h1>

                        </div>


                    </div>
                </div>

        </div>

    </>

    )
}

export default Footer