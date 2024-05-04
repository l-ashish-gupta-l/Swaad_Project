import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function UserINFO({ Details }) {
    return (
        <tr>
            <td className="px-5 py-5 bg-white text-sm">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-gray-900 font-semibold uppercase whitespace-no-wrap">
                            {Details.Username}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{Details.phone}</p>

            </td>
            <td className="px-5 py-5 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{Details.email}</p>

            </td>
            <td className="px-5 py-5 bg-white text-sm">
                <span
                    className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                > {Details.isAdmin.toString().toUpperCase()}
                    <span
                        aria-hidden
                        className={`absolute inset-0  opacity-50 ${Details.isAdmin ? "bg-green-300" : "bg-red-300"} rounded-full`}
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
const Table_head = ({ Headings }) => {
    return (
        <thead>
            <tr>
                <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                    {Headings.Heading_1}
                </th>
                <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                    {Headings.Heading_2}
                </th>
                <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                    {Headings.Heading_3}
                </th>
                <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                >
                    {Headings.Heading_4}
                </th>
                <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                >{Headings.Heading_5}</th>
                <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                ></th>
            </tr>
        </thead>
    )
}



function AllUser() {

    const [All_user, setAll_user] = useState([])

    //fetching All Users
    const fetch_all_User = async () => {
        const Users_data = await axios.get("http://localhost:3000/AllUser", {
            withCredentials: true
        })
        setAll_user(Users_data.data)
    }


    useEffect(() => {
        fetch_all_User()
    }, [])


    const Headings = {
        Heading_1: "NAME",
        Heading_2: "PHONE NUMBER",
        Heading_3: "EMAIL",
        Heading_4: "ADMIN"
    }

    return (
        <div className="pb-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                    className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                >
                    <table className="min-w-full leading-normal">
                        <Table_head Headings={Headings} />
                        <tbody>
                            {All_user.map((Details, index) => {
                                // console.log(Details);
                                return (
                                    <UserINFO Details={Details} key={index} />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default AllUser
export { Table_head }