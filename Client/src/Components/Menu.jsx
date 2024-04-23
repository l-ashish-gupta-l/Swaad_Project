import React, { useEffect, useState } from 'react'
import Menubg from '../assets/MenuBg.jpg';
import Menudata from '../Menu/MenuData';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../REDUX/CartSlice';

const DishesCard = (item) => {
  const dispatch = useDispatch();
  const ADDTOCART_FUCN = (item) => {
    dispatch(addToCart(item))
  }

  const data = useSelector(state => state.Cart);


  return (
    <div className='w-full h-[25vh] pl-2 flex items-center relative'>
      <div className='img w-20 h-20 rounded-full border-black overflow-hidden'>
        <img src={item.img} alt={item.Name} className='w-full h-full object-cover' />
      </div>
      <div className='ml-5   w-1/2 flex justify-center flex-col '>
        <h1 className='font-["para"] font-bold text-md text-[#383632]'>{item.Name}</h1>

        <p className='font-["para"] font-normal text-sm text-zinc-600 w-3/4'>{item.ingredients.join(', ')}</p>
      </div>
      <div className='ml-14 flex justify-center flex-col '>
        <h1 className='font-["para"] font-bold text-lg text-[#383632]'>${item.price.toFixed(2)}</h1>
        <p className='font-["para] font-normal text-zinc-600'>Price</p>
      </div>
      <button onClick={() => ADDTOCART_FUCN(item)} className='absolute flex py-1 justify-center items-center gap-2 px-5 top-[80%] right-0 text-sm rounded-xl bg-[#282725] text-white font-["Para"]'>Add To Cart
        <span><MdOutlineShoppingCartCheckout /></span>
      </button>
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