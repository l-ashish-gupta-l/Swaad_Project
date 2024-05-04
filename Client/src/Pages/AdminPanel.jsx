import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MenuPAGEBg from '../assets/MenuPAGEBg.jpg'
import AllUser from '../Components/AllUser'
import AllOrders from '../Components/AllOrders'
import AllBookings from '../Components/AllBookings'

function AdminPanel() {
    const [Content_to_show, setContent_to_show] = useState("All User")
    return (
        <>
            <Navbar color={'text-[#383632]'} />
            <div className="flex justify-center items-center relative flex-col py-20 ">
                <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '>DASHBOARD</h1>
                <img src={MenuPAGEBg} alt="bg" className='absolute -z-10  object-cover top-0 left-0' />
            </div>


            <div class="container mx-auto px-4 sm:px-8">
                <div className='shadow-md border-2 bg-transparent  w-3/5 mx-auto h-10 px-10 py-2 rounded-full flex justify-between items-center '>
                    {["All User", "All Orders", "All Bookings"].map((item, index) => {
                        return (
                            <button key={index} onClick={() => setContent_to_show(item)} className='text-black font-["bebas"] text-xl ' >
                                {item}
                            </button>
                        )
                    })}
                </div>
                {Content_to_show === "All User" && <AllUser />}
                {Content_to_show === "All Orders" && <AllOrders />}
                {Content_to_show === "All Bookings" && <AllBookings />}
            </div>
            <Footer />
        </>
    )
}

export default AdminPanel