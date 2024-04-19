import React from 'react'
import Navbar from '../Components/Navbar'
import MenuPAGEBg from '../assets/MenuPAGEBg.jpg'
import Footer from '../Components/Footer'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signin() {
    const navigate = useNavigate();
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/loginUser", data, {
                withCredentials: true,
            })
            if (response.status === 200) {
                navigate('/home')
            }
        } catch (err) {
            console.log(err.response.data)
        }
    }
    return (<>
        <Navbar color={'text-[#383632]'} />
        <div className="flex justify-center items-center relative flex-col py-20 ">
            <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '> Welcome Back!</h1>
            <p className='font-bold uppercase text-[#D51F0F] text-center'>- Sign in to Your Flavorful Account-</p>
            <img src={MenuPAGEBg} alt="bg" className='absolute -z-10  object-cover top-0 left-0' />
        </div>
        <div className='content'>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input type="email" id="email" placeholder="Enter your email" {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                                    message: "Email format is incorrect."
                                }
                            })}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                            <p className='text-red-600 font-semibold'>{errors.email?.message}</p>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="mb-3 block text-base font-medium text-[#07074D]">
                                Password
                            </label>
                            <input type="password" id="password" placeholder=" Password" {...register("password", {
                                required: "Create Password"
                            })}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#000000] focus:shadow-md" />
                            <p className='text-red-600 font-semibold'>{errors.password?.message}</p>
                        </div>
                        <div>
                            <button
                                className="hover:shadow-form w-full rounded-md bg-[#383632] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                LOGIN
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

export default Signin