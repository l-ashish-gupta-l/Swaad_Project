import React from 'react'
import HomeBg from "../assets/HomeBg.jpg"
import Mainherobg from "../assets/Mainherobg.png"
import { TypeAnimation } from 'react-type-animation';
import ReactCurvedText from 'react-curved-text';
import Rotate_SVG from '../assets/Rotate_SVG.png'
import Navbar from './Navbar';


function Mainbtn({ Text }) {
    return (
        <button className='px-8 py-2 font-["Bebas"] bg-[#282725] text-white mt-5'>
            {Text}
        </button>
    )
}

function LandingPage() {


    return (
        <div className='relative w-full h-screen'>
            <img src={HomeBg} alt='HomeBg' className='w-full h-full object-cover' />
            <div className='overlay absolute z-10 w-full h-full top-0 left-0 bg-black opacity-65'>
            </div>
            <div className='absolute z-20 w-full h-full top-0 left-0  '>
                <Navbar mode={"light"} />
                <div className='w-fit mt-10  m-auto flex justify-center items-center relative'>
                    <img src={Mainherobg} alt='Mainherobg' className='object-cover w-[38vw]' />
                    <div className='content    absolute font-["Bebas"] flex justify-center items-center flex-col'>
                        <h2 className='uppercase text-2xl'>Experience the taste of INDIA</h2>
                        <h1 className='text-stroke stroke-white mt-3 text-[7vw] whitespace-nowrap leading-none'>GREAT DINING</h1>
                        <TypeAnimation
                            sequence={[
                                'Experence',
                                2000,
                                'RESTAURANT',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-8xl text-white"
                            repeat={Infinity}
                            cursor={false}
                        />
                        <Mainbtn Text={"Authentic experience"} />
                    </div>
                    <div className='w-[150px] h-[150px] p-1 bg-[#DADADA] absolute top-[70%] right-0 rounded-full '>
                        <div className='w-full  h-full animate-spin-slow text-[#392100] rounded-full '>
                            <ReactCurvedText
                                width={300}
                                height={300}
                                cx={70}
                                cy={70}
                                rx={59}
                                ry={59}
                                startOffset={0}
                                reversed={true}
                                text=" •• THE SWAAD  ••       
                                EXPERIENCE THE REAL TASTE OF INDIA"
                                textProps={{ style: { fontSize: 14.5 } }}
                                textPathProps={null}
                                tspanProps={{ fontWeight: "400" }}
                                ellipseProps={null}
                                svgProps={null}
                            >
                            </ReactCurvedText>
                        </div>
                        <div className='absolute w-2/3 h-2/3 rounded-full -translate-x-1/2 -translate-y-1/2 flex justify-center items-center  left-1/2 top-1/2'>
                            <img src={Rotate_SVG} alt='rotate' className='w-4/5 h-4/5 object-cover ml-2' />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default LandingPage
export { Mainbtn }