import React, { useEffect, useState } from 'react'
import { Table_head } from './AllUser'
import axios from 'axios'


const Booking_ROw = ({ item }) => {
  console.log(item)
  return (
    <tr className='border-b'>
      <td className="px-5 py-5 bg-white text-sm">
        <div className="flex">
          <div className="ml-3">
            <p className="text-gray-900 font-semibold uppercase whitespace-no-wrap">
              {item.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 bg-white text-sm flex flex-col gap-5">
        <p className="text-gray-900 whitespace-no-wrap font-semibold" >{item.email}</p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap font-semibold" >{item.phone}</p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap font-semibold">
          {new Date(item.bookingDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-gray-900 whitespace-no-wrap font-semibold">
         {item.bookingTime} PM
        </p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <span
          className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
        > {item.numberOfPeople}
          <span
            aria-hidden
            className={`absolute inset-0  opacity-50  rounded-full`}
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



function AllBookings() {
  const Headings = {
    Heading_1: "USERNAME",
    Heading_2: "EMAIL",
    Heading_3: "PHONE",
    Heading_4: "BOOKING DATE/TIME",
    Heading_5: "NUMBER OF PEOPLE"
  }

  const [BOOKING_DATA, setBOOKING_DATA] = useState([])
  useEffect(() => {
    const booking_data = async () => {
      const Booking_data = await axios.get("http://localhost:3000/Allbookings", {
        withCredentials: true,
      })
      setBOOKING_DATA(Booking_data.data)
    }

    booking_data()

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
              {BOOKING_DATA.map((item, index) => {
                return (
                  <Booking_ROw item={item} key={index} />
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default AllBookings