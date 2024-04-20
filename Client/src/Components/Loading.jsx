import React from 'react'
import Load from '../assets/L.webp'
function Loading() {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-[#D39121] '>
            <img src={Load} alt='loading' />
        </div>
    )
}

export default Loading