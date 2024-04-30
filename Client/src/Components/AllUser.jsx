import React from 'react'

function AllUser() {
    return (
        <div class="pb-8">
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                    class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                >
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                                >
                                    Client Name / Client Email
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                                >
                                    Phone Number
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                                >
                                    Booking Details
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#383632] text-left text-xs font-semibold text-white uppercase tracking-wider"
                                >
                                    Number of People
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-[#383632]"
                                ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <UserINFO /> */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default AllUser