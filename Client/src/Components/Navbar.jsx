import React, { useEffect, useState } from 'react'
import LOGO from "../assets/LOGO.png"
import { Link } from 'react-router-dom'

function Navbar(props) {


    return (
        <div className={`stroke-black drop-shadow-lg  z-50  text-white w-full flex items-center px-20 font-["Bebas"] justify-between transition-colors duration-300 `}>
            <div className='Logo w-[10%] h-full'>
                <img src={LOGO} alt='LOGO' className='w-full h-full object-cover ' />
            </div>
            <div className='links  flex justify-center items-center gap-16 '>
                {["Home", "Menu", "Gallery", "Blog", "Contact"].map((item, index) => {
                    return (
                        <Link className={`text-xl hover:text-zinc-400 tracking-wider ${props.color}`} key={index}
                            to={{ pathname: `/${item.toLowerCase()}` }}>
                            {item}
                        </Link>

                    )
                })}
            </div>
            <div className='Bookbtn flex justify-center items-center ' >
                <Link to={"/booking"} className='px-10 py-2 bg-[#383632] tracking-widest font-[200] text-sm rounded-full  '>BOOK A TABLE </Link>
            </div>
        </div>
    )
}

export default Navbar