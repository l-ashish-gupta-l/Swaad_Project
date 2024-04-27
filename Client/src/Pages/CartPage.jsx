import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MenuPAGEBg from '../assets/MenuPAGEBg.jpg'
import { useSelector } from 'react-redux'
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { RemovetoItemInCart, removeFromCart, addQTYtoItemInCart } from '../REDUX/CartSlice'
import axios from 'axios'
import logo from "../assets/L.webp"

function CartDATA({ item }) {
    const Dispatch = useDispatch();
    const remove_cart_prd = (id) => {
        Dispatch(removeFromCart(id))
    }
    const [isOpen, setIsOpen] = useState(false);


    const addqty = (item) => {
        Dispatch(addQTYtoItemInCart(item));
    }

    const rmvqty = (item) => {
        if (item.Quantity <= 1) {
            Dispatch(removeFromCart(item.id))
        } else {
            Dispatch(RemovetoItemInCart(item));
        }

    }
    return (
        <tr>
            <td className="px-5 py-5 bg-white text-sm">
                <div className="flex  items-center">
                    <div className='w-14 h-14 rounded-full overflow-hidden'>
                        <img src={item.img} alt='product_image' className='w-full h-full object-cover' />
                    </div>
                    <div className="ml-5">
                        <p className="text-gray-900 font-semibold uppercase whitespace-no-wrap">
                            {item.name}
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">{item.ingredients.join(", ")}</p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 bg-white text-sm">
                <div className="relative inline-block text-left">
                    <div>
                        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 " id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={() => setIsOpen(!isOpen)}>
                            Customise
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 1</a>
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 2</a>
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 3</a>
                            </div>
                        </div>
                    )}
                </div>


            </td>
            <td className="px-8 py-5 bg-white text-sm">
                <div className="flex items-center justify-center w-10 bg-green-300 text-white  rounded-md ">
                    <button onClick={() => rmvqty(item)} className="px-2 py-1 rounded-md bg-green-500 hover:bg-green-600">-</button>
                    <span className="mx-2 font-bold text-white ">{item.Quantity}</span>
                    <button onClick={() => addqty(item)} className="px-2 py-1 rounded-md bg-green-500 hover:bg-green-600">+</button>
                </div>

            </td>
            <td className="px-5 py-5 bg-white text-sm">
                <span
                    className="relative inline-block px-3 py-1 font-semibold  leading-tight"
                >
                    <span
                        aria-hidden
                        className="absolute inset-0  opacity-50 rounded-full"
                    ></span>
                    <span className="relative">${item.price * item.Quantity}</span>
                </span>
            </td>
            <td className="px-5 py-5 bg-white text-sm text-right">
                <button
                    type="button"
                    onClick={() => remove_cart_prd(item.id)}
                    className="flex justify-center items-center w-8 h-8 rounded-full  bg-red-300 text-gray-500 hover:text-gray-700"
                >
                    <MdDeleteOutline size={20} className='text-red-700' />
                </button>
            </td>
        </tr>
    )
}


function CartPage() {
    const Cart_data = useSelector(state => state.Cart.Cart)
    const [Total_Price, setTotal_Price] = useState(0)
    const TOTAL_CART_DATA = useSelector(state => state.Cart.Cart)

    useEffect(() => {
        let total = 0;
        TOTAL_CART_DATA.forEach(item => {
            total += item.price * item.Quantity;
        });
        setTotal_Price(total);
    }, [TOTAL_CART_DATA]);

    // console.log(typeof(Total_Price))
    const TOTAL_BILL_PRICE = (Total_Price + 2 + 5).toFixed(2)


    useEffect(() => {
        localStorage.setItem("Cart_data", JSON.stringify(Cart_data))
    }, [Cart_data])



    //CHECKOUT HANDLER
    const User_data = useSelector(state => state.userinfo.User)
    const Checkout = async (Amount) => {
        // console.log(Amount)
        const { data: key } = await axios.post("http://localhost:3000/getKey", {}, {
            withCredentials: true,
        })

        const { data } = await axios.post("http://localhost:3000/Checkout", { Amount, Cart_data }, {
            withCredentials: true,
        })


        const options = {
            key,
            amount: data.amount, // Amount is in currency subunits. 
            currency: "USD",
            name: "RESTAURANT",
            description: "YOUR FOOD IS READY TO GO!",
            image: logo,
            order_id: data.id,
            callback_url: "http://localhost:3000/Payment",
            prefill: {
                name: User_data.Username,
                email: User_data.email,
                contact: User_data.phone
            },
            notes: {
                address: "To be added"
            },
            theme: {
                color: "#383632"
            }
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();
    }

    return (
        <>
            <Navbar color={'text-[#383632]'} />
            <div className="flex justify-center items-center relative flex-col py-20 ">
                <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '>CART SECTION</h1>
                <img src={MenuPAGEBg} alt="bg" className='absolute -z-10  object-cover top-0 left-0' />
            </div>
            <div className="container mx-auto px-4 sm:px-8 flex gap-5 ">
                <div className="py-8 w-full">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div
                            className="inline-block min-w-full shadow-md rounded-lg "
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
                {Total_Price > 0 && <div className=' py-12 w-2/5'>
                    <div className='  rounded-lg min-w-full overflow-hidden shadow-md '>
                        <div className='top px-5 py-3 font-semibold text-xs  text-left uppercase text-white  bg-[#383632]'>
                            <h1>Bill Details</h1>
                        </div>
                        <div className='content px-5 pt-3'>
                            <div className='border-b flex justify-between items-center py-3 '>
                                <h1 className='font-semibold text-[#383632]'>Item Total</h1>
                                <h1 className='font-bold text-black'>${Total_Price}</h1>
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
                                <h1 className='font-bold text-black text-lg'>${TOTAL_BILL_PRICE}</h1>
                            </div>
                        </div>
                        <div className='p-5'>
                            <button onClick={() => Checkout(TOTAL_BILL_PRICE)} className='w-full py-2 px-5 bg-[#383632] rounded-full  font-["para"] text-white text-xl tracking-wider font-semibold flex gap-5 justify-center items-center'>
                                <h1>Proceed to Pay</h1>
                            </button>
                        </div>
                    </div>

                </div>}
            </div>

            <Footer />
        </>
    )
}

export default CartPage