import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MenuPAGEBg from '../assets/MenuPAGEBg.jpg'
import axios from 'axios';
function Booking() {

    const [Details, setDetails] = useState({
        name: "",
        email: "",
        phone: "",
        bookingDate: "",
        time: "",
        numberOfPeople: " "
    })

    const handleChange = (e) => {
        setDetails({ ...Details, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Details);
        axios.post('http://localhost:3000/create', Details)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };


    return (
        <>
            <Navbar color={'text-[#383632]'} />
            <div className="flex justify-center items-center relative flex-col py-20 ">
                <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '> Reserve Your Table </h1>
                <p className='font-bold uppercase text-[#D51F0F] text-center'>- Book Now -</p>
                <img src={MenuPAGEBg} alt="bg" className='absolute -z-10  object-cover top-0 left-0' />
            </div>
            <div className='content'>
                <div className="flex items-center justify-center p-12">
                    <div className="mx-auto w-full max-w-[550px] bg-white">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Full Name
                                </label>
                                <input type="text" name="name" id="name" placeholder="Full Name" onChange={handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                            </div>
                            <div className="mb-5">
                                <label for="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Phone Number
                                </label>
                                <input type="text" name="phone" id="phone" placeholder="Enter your phone number" onChange={handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                            </div>
                            <div className="mb-5">
                                <label for="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Email Address
                                </label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                            </div>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Date
                                        </label>
                                        <input type="date" name="bookingDate" id="date" onChange={handleChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Time
                                        </label>
                                        <input type="time" name="bookingTime" id="time" onChange={handleChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label for="no_of_person" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Number of Persons
                                </label>
                                <input type="number" name="numberOfPeople" id="no_of_person" placeholder="Number of Persons" onChange={handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                            </div>
                            <div>
                                <button
                                    className="hover:shadow-form w-full rounded-md bg-[#383632] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                    Book Table
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Booking