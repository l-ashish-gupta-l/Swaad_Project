import React, { useEffect, useState } from 'react'
import LOGO from "../assets/L.webp"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"
import { setuserInfo } from "../REDUX/UserSlice";
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

    const User_data = useSelector(state => state.User)
    // console.log(User_data.Username)
   

    return (
        <div className={`stroke-black drop-shadow-lg  py-5 z-50  text-white w-full flex items-center px-20 font-["Bebas"] justify-between transition-colors duration-300 `}>
            <div className='Logo w-[10%]   flex justify-center items-center mb-2'>
                <Link to="/">
                    <img src={LOGO} alt='LOGO' className={`w-full h-full object-cover ${props.color}`} />
                </Link>
            </div>
            <div className='links  flex justify-center items-center gap-16  h-full  '>
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
                {User_data.Username ? (<Link className={`text-xl ${props.color}`}>Hello, <span className='text-[#E49E27]'>{User_data.Username}</span> </Link>) : (
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