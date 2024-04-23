import React, { useEffect, useState } from 'react'
import LOGO from "../assets/L.webp"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"
import { setuserInfo } from "../REDUX/UserSlice";
import { TbShoppingBag } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";

function Navbar(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/Userdata', { withCredentials: true });
                dispatch(setuserInfo(response.data))
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    //data fetch from store
    const User_data = useSelector(state => state.userinfo.User)
    const cartdata = useSelector(state => state.Cart.Cart)

    const Logout = async () => {
        const res = await axios.get("http://localhost:3000/logout", { withCredentials: true })
        if (res.status === 200) {
            window.location.reload()
        }
    }

    return (
        <div className={`stroke-black drop-shadow-lg  py-5 z-50  text-white w-full flex items-center px-20 font-["Bebas"] justify-between transition-colors duration-300 `}>
            <div className='Logo w-[10%]   flex justify-center items-center mb-2'>
                <Link to="/">
                    <img src={LOGO} alt='LOGO' className={`w-full h-full object-cover ${props.color}`} />
                </Link>
            </div>
            <div className='links  flex justify-center items-center gap-16 ml-10 h-full  '>
                {["Home", "Menu", "Gallery", "Blog", "Contact"].map((item, index) => {
                    return (
                        <Link className={`text-xl hover:text-zinc-400 tracking-wider  ${props.color}`} key={index}
                            to={{ pathname: `/${item.toLowerCase()}` }}>
                            {item}
                        </Link>

                    )
                })}
            </div>
            <div className='Bookbtn flex justify-center gap-5 items-center ' >
                {User_data.Username ? (
                    <>
                        < Link className={`text-xl ${props.color}`}>Hello, <span className='text-[#E49E27]'>{User_data.Username}</span> </Link>
                        <div className='flex justify-center bg-transparent hover:text-[#E49E27] cursor-pointer border-white border px-3   rounded-xl items-center gap-1 relative'>
                            <TbShoppingBag size={20} className=' ' />
                            <h2 className='flex justify-center items-center text-md mt-1 '>{cartdata.length}</h2>
                        </div>
                        <button onClick={Logout}><TbLogout size={20} className='hover:text-[#E49E27] cursor-pointer' /></button>
                    </>

                ) : (
                    <>
                        <Link to={"/booking"} className={`px-5 py-2 border tracking-widest font-[200] text-sm rounded-full ${props.color}`}>BOOK A TABLE </Link>
                        <Link to={'/signin'} className={`${props.color}`}>
                            Signin
                        </Link>
                        <Link to={'/signup'} className={`${props.color} text-[#E49E27]`}>
                            Signup
                        </Link>
                    </>
                )}
            </div>


        </div>
    )
}

export default Navbar