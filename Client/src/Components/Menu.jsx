import React, { useEffect, useState } from 'react'
import Menubg from '../assets/MenuBg.jpg';
import Menudata from '../Menu/MenuData';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../REDUX/CartSlice';
import { Link } from 'react-router-dom';
import { TbShoppingBag } from "react-icons/tb";

// console.log(Menudata.Drinks[1])

const DishesCard = ({ dish }) => {

  const dispatch = useDispatch();

  const data = useSelector(state => state.Cart);
  // console.log(data.Cart)


  const [Quantity, setQuantity] = useState(1)
  const ADDTOCART_FUCN = (dish) => {
    // console.log(dish.id)
    const dishesid = data.Cart.find((el) => el.id === dish.id)
    dish.Quantity = Quantity;
    if (!dishesid) {
      console.log(dish)
      dispatch(addToCart(dish))
    } else {
      console.log('Dish is already in the cart')
    }
  }
  const Cart_data = useSelector(state => state.Cart.Cart)
  useEffect(() => {
    localStorage.setItem("Cart_data", JSON.stringify(Cart_data))
  }, [Cart_data])


  return (
    <div className='w-full h-[25vh] pl-2 flex items-center relative'>
      <div className='img w-20 h-20 rounded-full border-black overflow-hidden'>
        <img src={dish.img} alt={dish.name} className='w-full h-full object-cover' />
      </div>
      <div className='ml-5   w-1/2 flex justify-center flex-col '>
        <h1 className='font-["para"] font-bold text-md text-[#383632]'>{dish.name}</h1>

        <p className='font-["para"] font-normal text-sm text-zinc-600 w-3/4'>{dish.ingredients.join(', ')}</p>
      </div>
      <div className='ml-14 flex justify-center flex-col '>
        <h1 className='font-["para"] font-bold text-lg text-[#383632]'>${dish.price.toFixed(2)}</h1>
        <p className='font-["para] font-normal text-zinc-600'>Price</p>
      </div>
      <button onClick={() => ADDTOCART_FUCN(dish)} className='absolute flex py-1 justify-center items-center gap-2 px-5 top-[80%] right-0 text-sm rounded-xl bg-[#282725] text-white font-["Para"]'>Add To Cart
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
  const cartdata = useSelector(state => state.Cart.Cart)

  return (
    <div className=' w-full h-fit relative  '>
      <img src={Menubg} alt="bg" className='w-full h-[120vh] ' />
      <div className='absolute top-0 left-1/2 -translate-x-1/2 py-10  w-[70vw] h-screen flex  flex-col items-center'>
        <div>
          <p className='font-bold uppercase text-[#D51F0F] text-center'>- Choose delicious -</p>
          <h1 className='font-["Bebas"] text-[#383632] text-[5vw] leading-none '>Popular menu</h1>
        </div>
        <Link to={'/cart'} className='flex justify-center px-5  bg-[#383632] my-3 hover:text-[#E49E27] cursor-pointer border-white border   rounded-xl items-center gap-1 relative'>
          <TbShoppingBag size={25} className={`text-white`} />
          <h2 className={`flex justify-center items-center text-lg font-bold text-white`} >{cartdata.length}</h2>
        </Link>

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
            Menudata[Category].map((dish, index) => {
              return (
                // console.log(dish),
                <DishesCard dish={dish} key={index} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Menu