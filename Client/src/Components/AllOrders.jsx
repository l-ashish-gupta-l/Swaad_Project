import React, { useEffect, useState } from 'react'
import { Table_head } from './AllUser'
import axios from 'axios'

const ALL_orders_ROw = ({ item }) => {
  return (
    <tr className='border-b'>
      <td className="px-5 py-5 bg-white text-sm">
        <div className="flex">
          <div className="ml-3">
            <p className="text-gray-900 font-semibold uppercase whitespace-no-wrap">
              {item.Username}
            </p>
            <p className="text-gray-900 font-semibold uppercase whitespace-no-wrap">
              {item.phone}
            </p>
            <p className="text-gray-900 font-semibold  whitespace-no-wrap">
              {item.Email}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 bg-white text-sm flex flex-col gap-5">
        {item.CartItem.map((product, index) => (<div className=''>
          <div className='flex gap-5'>
            <label className='font-semibold' >Product Name -</label>
            <p className="text-gray-900 whitespace-no-wrap">{product.name}</p>
          </div>
          <div className='flex gap-5 '>
            <label className='font-semibold' > Quantity-</label>
            <p className="text-gray-900 whitespace-no-wrap">{product.Quantity}</p>
          </div>
          <div className='flex gap-5 '>
            <label className='font-semibold' > Price-</label>
            <p className="text-gray-900 whitespace-no-wrap">{product.Quantity * product.price} $</p>
          </div>

        </div>))}
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap font-semibold" >{item.Total_bill_to_pay}(includeing $7 for Tax)</p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap font-semibold">{item.OrderId}</p>
      </td>

      <td className="px-5 py-5 bg-white text-sm">
        <span
          className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
        > {item.status}
          <span
            aria-hidden
            className={`absolute inset-0  opacity-50 ${item.status === "Paid" ? "bg-green-300" : "bg-red-300"} rounded-full`}
          >

          </span>
        </span>
      </td>
      <td className="px-5 py-5 bg-white text-sm text-right">
        <button
          type="button"
          className="inline-block text-gray-500 hover:text-gray-700"
        >
          <svg
            className="inline-block h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
            />
          </svg>
        </button>
      </td>
    </tr >
  )
}



function AllOrders() {
  const Headings = {
    Heading_1: "USER DETAILS",
    Heading_2: "ORDER",
    Heading_3: "TOTAL",
    Heading_4: "ORDER RECEPT ID",
    Heading_5: "STATUS"
  }
  const [Cart_Data, setCart_Data] = useState([]);
  useEffect(() => {
    const fetch_order_data = async () => {
      const order_data = await axios.get("http://localhost:3000/Allorders", {
        withCredentials: true,
      })
      setCart_Data(order_data.data)
    }

    fetch_order_data()

  }, [])
  return (
    <div className="pb-8">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div
          className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
        >
          <table className="min-w-full leading-normal">
            <Table_head Headings={Headings} />
            <tbody>
              {Cart_Data.map((item, index) => {
                return (
                  <ALL_orders_ROw item={item} key={index} />
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default AllOrders