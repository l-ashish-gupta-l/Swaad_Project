import React, { useEffect, useState } from 'react'
import Menubg from '../assets/MenuBg.jpg';
import Menudata from '../Menu/MenuData';
const DishesCard = ({ Name, ingredients, price, img }) => {
  return (
    <div className='w-full h-[25vh] pl-2 flex items-center'>
      <div className='img w-20 h-20 rounded-full border-black overflow-hidden'>
        <img src={img} alt={Name} className='w-full h-full object-cover' />
      </div>
      <div className='ml-5   w-1/2 flex justify-center flex-col'>
        <h1 className='font-["para"] font-bold text-md text-[#383632]'>{Name}</h1>

        <p className='font-["para"] font-normal text-sm text-zinc-600 w-3/4'>{ingredients.join(', ')}</p>
      </div>
      <div className='ml-14 flex justify-center flex-col'>
        <h1 className='font-["para"] font-bold text-lg text-[#383632]'>${price.toFixed(2)}</h1>
        <p className='font-["para] font-normal text-zinc-600'>Price</p>
      </div>
    </div>
  );
};


function Menu() {
  const [Category, setCategory] = useState("Starters")
  const changeCategory = (Category) => {
    setCategory(Category);
  }

  return (
    <div className=' w-full  relative  '>
      <img src={Menubg} alt="bg" className='w-full h-[110vh]  ' />
      <div className='absolute top-0 left-1/2 -translate-x-1/2 py-10  w-[70vw] h-screen flex  flex-col items-center'>
        <div>
          <p className='font-bold uppercase text-[#D51F0F] text-center'>- Choose delicious -</p>
          <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '>Popular menu</h1>
        </div>
        <div className='Menu w-full mb-5 '>
          <div className='Headings flex justify-between items-center mt-5 px-20'>
            {["Starters", "Nonveg", "Vegeterian", "Dessert", "Drinks"].map((item, index) => {
              return (
                <button key={index} onClick={() => changeCategory(item)} className='font-["Para"] text-[#8D8987]'>{item}</button>
              )
            })}
          </div>

        </div>
        <div className='w-full h-full   grid grid-cols-2 gap-x-16 '>
          {/* map through the dish data */
            Menudata[Category].map((item) => <DishesCard key={item.id} Name={item.name} ingredients={item.ingredients} price={item.price} img={item.img} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Menu