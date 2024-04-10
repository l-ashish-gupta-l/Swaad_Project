import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MenuPAGEBg from '../assets/MenuPAGEBg.jpg'

function UserINFO() {
    
    const [Details, setDetails] = useState({
        name: "ashish",
        email: "ashish3072002",
        phone: "12212132",
        bookingDate: "25 march",
        time: "12:00",
        numberOfPeople: " 12"
    })

    return (
        <tr>
            <td class="px-5 py-5 bg-white text-sm">
                <div class="flex">
                    <div class="ml-3">
                        <p class="text-gray-900 font-semibold uppercase whitespace-no-wrap">
                            {Details.name}
                        </p>
                        <p class="text-gray-600 whitespace-no-wrap">{Details.email}</p>
                    </div>
                </div>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{Details.phone}</p>
                
            </td>
            <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{ Details.bookingDate}</p>
                <p class="text-gray-600 whitespace-no-wrap">
                    {Details.time}
                </p>
            </td>
            <td class="px-5 py-5 bg-white text-sm">
                <span
                    class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                >
                    <span
                        aria-hidden
                        class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">{Details.numberOfPeople}</span>
                </span>
            </td>
            <td class="px-5 py-5 bg-white text-sm text-right">
                <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                >
                    <svg
                        class="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                        />
                    </svg>
                </button>
            </td>
        </tr>
    )
}


function AdminPanel() {
  return (
      <>
          <Navbar color={'text-[#383632]'} />
          <div className="flex justify-center items-center relative flex-col py-20 ">
              <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '>DASHBOARD</h1>
              <img src={MenuPAGEBg} alt="bg" className='absolute -z-10  object-cover top-0 left-0' />
          </div>
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div
                            class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                        >
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                                        >
                                            Client Name / Client Email
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                                        >
                                            Phone Number
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                                        >
                                            Booking Details
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                                        >
                                            Number of People
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-[#383632]"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                         <UserINFO />                      
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
          <Footer/>
      </>
  )
}

export default AdminPanel