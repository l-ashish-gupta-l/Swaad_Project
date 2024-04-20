import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MenuPAGEBg from '../assets/MenuPAGEBg.jpg'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
function Booking() {
    const form = useForm()
    const { register, handleSubmit, formState } = form
    const { errors } = formState
    let navigate = useNavigate();

    const onSubmit = (data) => {
        try {
            const response = axios.post('http://localhost:3000/create', data, {
                withCredentials: true,
            })
            if (response) {
                navigate('/home');
            }

        } catch (error) {
            console.error('There was an error!', err);
        }
    }

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
                        <form onSubmit={handleSubmit(onSubmit)} noValidate >
                            <div className="mb-5">
                                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Full Name
                                </label>
                                <input type="text" id="name" placeholder="Full Name" {...register("name", {
                                    required: "Username is required",
                                })}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                                <p className='text-red-600 font-semibold'>{errors.name?.message}</p>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Phone Number
                                </label>
                                <input type="text" {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                                        message: "Invalid phone number format"
                                    }
                                })} id="phone" placeholder="Enter your phone number"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                                <p className='text-red-600 font-semibold'>{errors.phone?.message}</p>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Email Address
                                </label>
                                <input type="email" {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                        message: "Email format is incorrect."
                                    }
                                })

                                } id="email" placeholder="Enter your email"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                                <p className='text-red-600 font-semibold'>{errors.email?.message}</p>
                            </div>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Date
                                        </label>
                                        <input type="date" {...register("bookingDate")} id="date"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Time
                                        </label>
                                        <input type="time" id="time" {...register("bookingTime")}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="no_of_person" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Number of Persons
                                </label>
                                <input type="number" {...register("numberOfPeople")} id="no_of_person" placeholder="Number of Persons"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                                <p className='text-red-600 font-semibold'>{errors.numberOfPeople?.message}</p>

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