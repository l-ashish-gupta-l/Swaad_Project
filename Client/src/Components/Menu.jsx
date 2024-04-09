import React from 'react'
import Menubg from '../assets/MenuBg.jpg';

function Menu() {
  return (
    <div className='bg-[#FDF8F5] w-full h-screen relative'>
      <img src={Menubg} alt="bg" className='w-full h-full ' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[70vw] h-[80vh] flex  flex-col items-center'>
        <div>
          <p className='font-bold uppercase text-[#D51F0F] text-center'>- Choose delicious -</p>
          <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '>Popular menu</h1>
        </div>
        <div className='Menu w-full'>
          <div className='Headings flex justify-between items-center mt-5 '>
            {["StarTers", "Nonveg", "vegeterian", "Dessert", "Drinks"].map((item, index) => {
              return(
                <button className='font-["Para"] text-[#8D8987]'>{item}</button>
              ) })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Menu