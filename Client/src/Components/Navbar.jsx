import React, { useEffect, useState } from 'react'
import LOGO from "../assets/L.webp"
import DArk_logo from "../assets/DArk_logo.webp"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"
import { setuserInfo } from "../REDUX/UserSlice";
import { TbShoppingBag } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { RiMenu4Line } from "react-icons/ri";
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
        <div className={`stroke-black drop-shadow-lg py-2  md:py-5 z-50 bg-white md:bg-transparent text-white w-full flex items-center px-5 md:px-16 font-["Bebas"] justify-between transition-colors duration-300 `}>
            <div className='Logo w-[30%] md:w-[10%]  flex justify-center items-center mb-2'>
                <Link to="/">
                    <img src={LOGO} alt='LOGO' className={`w-full h-full object-cover ${props.color} hidden md:flex `} />
                </Link>
                <Link to="/">
                    <img src={DArk_logo} alt='LOGO' className={`w-full h-full object-cover ${props.color} md:hidden `} />
                </Link>
            </div>
            <div className='links  flex justify-center items-center gap-16 ml-10 h-full   '>
                {["Home", "Menu", "Gallery", "Blog" ].map((item, index) => (
                    <Link className={`text-xl hover:text-zinc-400 tracking-wider  ${props.color}`} key={index}
                        to={{ pathname: `/${item.toLowerCase()}` }}>
                        {item}
                    </Link>
                ))}
                <Link to={"/booking"} className={`text-lg hover:text-zinc-400 tracking-wider ${props.color}`}>BOOK A TABLE </Link>
                {User_data.isAdmin &&
                    <Link className={`text-xl hover:text-zinc-400 tracking-wider  ${props.color}`} key="admin"
                        to={{ pathname: `/Adminpanel` }}>
                        Dashboard
                    </Link>
                }
            </div>
            <div className='Bookbtn flex justify-center gap-5 items-center ' >
                
                {User_data.Username ? (
                    <>
                        <h1 className={`text-xl ${props.color}`}>Hello, <span className='text-[#E49E27]'>{User_data.Username}</span> </h1>
                        <Link to={'/cart'} className='flex justify-center bg-transparent hover:text-[#E49E27] cursor-pointer border-white border px-3   rounded-xl items-center gap-1 relative'>
                            <TbShoppingBag size={20} className={`${props.color}`} />
                            <h2 className={`flex justify-center items-center text-md mt-1 ${props.color}`} >{cartdata.length}</h2>
                        </Link>
                        <button onClick={Logout}><TbLogout size={20} className={`over:text-[#E49E27] cursor-pointer ${props.color}`} /></button>
                    </>

                ) : (
                    <>
                        
                        <Link to={'/signin'} className={`${props.color}`}>
                            Signin
                        </Link>
                        <Link to={'/signup'} className={`${props.color} text-[#E49E27]`}>
                            Signup
                        </Link>
                    </>
                )}
            </div>
            <div className='hamburger  flex justify-center items-center md:hidden gap-5'>
                <Link to={'/booking'} className='flex justify-center  hover:text-[#E49E27] cursor-pointer bg-[#282725] border px-3   rounded-xl items-center gap-1 relative '>
                    
                    <h2 className='flex justify-center items-center text-md mt-1 text-white font-light'> BOOK A TABLE</h2>
                </Link>
                <button>
                    <RiMenu4Line color='black' size={25} />
                </button>

            </div>
            

        </div>
    )
}

export default Navbar