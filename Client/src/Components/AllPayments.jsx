import React from 'react'
import { Table_head } from './AllUser'
function AllPayments() {
  const Headings = {
    Heading_1: "NAME",
    Heading_2: "PHONE NUMBER",
    Heading_3: "EMAIL",
    Heading_4: "PAYMENT RECEPT ID"
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
              {/* {All_user.map((Details, index) => {
                // console.log(Details);
                return (
                  <UserINFO Details={Details} key={index} />
                )
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default AllPayments