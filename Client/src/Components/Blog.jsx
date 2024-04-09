import React from 'react'

function Blog() {
  return (
      <div className='flex justify-center items-center flex-col py-16'>
          <div>
              <p className='font-bold uppercase text-[#D51F0F] text-center'>- From our blog -</p>
              <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '>Recent articles</h1>
          </div>
          <div className='Blogs flex gap-5 w-full h-[60vh] mt-10'>
              <div className='Card w-2/6 h-full border-black border-2'>
              </div>
              
              <div className='Card w-2/6 h-full border-black border-2'>
              </div>
              
              <div className='Card w-2/6 h-full border-black border-2'>
              </div>
              
          </div>
    </div>
  )
}

export default Blog