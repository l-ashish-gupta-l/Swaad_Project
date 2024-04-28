import React from 'react'
import GalleryDATA from '../assets/GalleryPhotos'

const BLOG_CARD = ({ item }) => {
  return (
    <div className='w-96 h-96 overflow-hidden relative rounded-md cursor-pointer'  >
      <img src={item} className='object-cover h-full w-full' />
      <div className='w-full p-5 h-full absolute top-0 left-0 bg-black opacity-50'>
      </div>
      <div className='w-full h-full absolute top-0 left-0 p-10 flex justify-between items-start flex-col'>
        <button className='bg-white p-2 font-["para"] tracking-wider rounded-sm text-sm text-black font-semibold hover:border hover:border-white hover:text-white hover:bg-transparent duration-300'>
          BUTTON
        </button>
        <h1 className='font-["Bebas"] text-2xl text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
      </div>
    </div>
  )
}


function Blog() {
  return (
    <div className='flex justify-center items-center flex-col pb-10'>
      <div className="flex justify-center items-center relative flex-col py-10 ">
        <p className='font-bold uppercase text-[#D51F0F] text-center'>-FROM OUR BLOG-</p>
        <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '> RECENT ARTICLES </h1>
      </div>
      <div className=' mx-auto w-fit  grid grid-cols-3 gap-5 mb-10 '>
        <BLOG_CARD item={GalleryDATA[0]} />
        <BLOG_CARD item={GalleryDATA[2]} />
        <BLOG_CARD item={GalleryDATA[4]} />
      </div>
    </div>
  )
}

export default Blog