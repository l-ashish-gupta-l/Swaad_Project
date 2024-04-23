import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MenuPAGEBg from '../assets/MenuPAGEBg.jpg'
import { useSelector } from 'react-redux'
import { MdOutlineLocalShipping } from "react-icons/md";

function CartDATA({ item }) {
    console.log(item)
    return (
        <tr>
            <td className="px-5 py-5 bg-white text-sm">
                <div className="flex  items-center">
                    <div className='w-14 h-14 rounded-full overflow-hidden'>
                        <img src={item.img} alt='product_image' className='w-full h-full object-cover' />
                    </div>
                    <div className="ml-5">
                        <p className="text-gray-900 font-semibold uppercase whitespace-no-wrap">
                            {item.Name}
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">{item.ingredients.join(", ")}</p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Customised btn</p>

            </td>
            <td className="px-5 py-5 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Quantity btn</p>

            </td>
            <td className="px-5 py-5 bg-white text-sm">
                <span
                    className="relative inline-block px-3 py-1 font-semibold  leading-tight"
                >
                    <span
                        aria-hidden
                        className="absolute inset-0  opacity-50 rounded-full"
                    ></span>
                    <span className="relative">${item.price}</span>
                </span>
            </td>
            <td className="px-5 py-5 bg-white text-sm text-right">
                <button
                    type="button"
                    className="inline-block text-gray-500 hover:text-gray-700"
                >
                    <svg
                        className="inline-block h-6 w-6 fill-current"
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


function CartPage() {
    const Cart_data = useSelector(state => state.Cart.Cart)
    console.log(Cart_data);
    return (
        <>
            <Navbar color={'text-[#383632]'} />
            <div className="flex justify-center items-center relative flex-col py-20 ">
                <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '>CART SECTION</h1>
                <img src={MenuPAGEBg} alt="bg" className='absolute -z-10  object-cover top-0 left-0' />
            </div>
            <div className="container mx-auto px-4 sm:px-8 flex gap-5 ">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div
                            className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                        >
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                                        >
                                            Dishes Name
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                                        >
                                            Customised
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                                        >
                                            Quantity
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                                        >
                                            price
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-[#383632]"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Cart_data.map((item, index) => {
                                        return (
                                            <CartDATA item={item} key={index} />
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className=' py-12 w-2/5'>
                    <div className='  rounded-lg min-w-full overflow-hidden shadow-md '>
                        <div className='top px-5 py-3 font-semibold text-xs  text-left uppercase text-white  bg-[#383632]'>
                            <h1>Bill Details</h1>
                        </div>
                        <div className='content px-5 pt-3'>
                            <div className='border-b flex justify-between items-center py-3 '>
                                <h1 className='font-semibold text-[#383632]'>Item Total</h1>
                                <h1 className='font-bold text-black'>$290</h1>
                            </div>
                            <div className='border-b flex justify-between items-center py-3 '>
                                <h1 className='font-semibold underline underline-offset-2  text-[#383632]'>Delivery Fee for 1.3 km</h1>
                                <h1 className='font-bold text-green-500 '>FREE</h1>
                            </div>
                            <div className='border-b  '>
                                <div className='flex justify-between items-center py-3'>
                                    <h1 className='font-semibold text-[#383632]'>Delivery Tip</h1>
                                    <h1 className='font-bold text-black'> ---</h1>
                                </div>
                                <div className='flex justify-between items-center '>
                                    <h1 className='font-semibold text-[#383632] underline underline-offset-2'>Platform fee</h1>
                                    <h1 className='font-bold text-black'>$2</h1>
                                </div>
                            </div>
                            <div className='border-b flex justify-between items-center py-3 '>
                                <h1 className='font-semibold text-[#383632] underline underline-offset-2'>GST and Restaurant Charges</h1>
                                <h1 className='font-bold text-black'>$5</h1>
                            </div>

                            <div className='border-b flex justify-between items-center py-5 '>
                                <h1 className='font-bold text-[#383632] text-lg'>Item Total</h1>
                                <h1 className='font-bold text-black text-lg'>$290</h1>
                            </div>
                        </div>
                        <div className='p-5'>
                            <button className='w-full py-2 px-5 bg-[#383632] rounded-full  font-["para"] text-white text-xl tracking-wider font-semibold flex gap-5 justify-center items-center'>
                                <h1>Proceed to Pay</h1>
                        </button>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default CartPage