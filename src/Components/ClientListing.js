import React from 'react'

export default function ClientListing() {
  return (
    <>
        <div className="bg-slate-300 py-5">
  <p className="text-3xl font-bold text-center pt-10">Client Listing</p>
      <div className="flex justify-end pb-5 mt-10 md:pr-10 md:pt-0">
      <a href="#" className="btn-download font-semibold flex gap-[10px] items-center" style={{padding: "0 16px",height: "36px",display: "flex", justifyContent: "center", alignItems: "center",gridGap: "10px",background:"#1b2735",color:"#d3e7f5"}}>
        <i className="bx bxs-cloud-download"></i>
        <span className="text">Download</span>
      </a>
    </div>

<div className="relative overflow-x-auto shadow-md bg-slate-300">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 text-white">
                    Sl. No
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                    Client Name
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                    Country
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                    State
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                    City
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                    Account Name
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                    Status
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                    Project Start Date
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                    Project End Date
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                    1.
                </td>
                <th scope="row" className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    John Doe
                </th>
                <td className="px-6 py-4">
                    1800917025
                </td>
                <td className="px-6 py-4">
                    user.email
                </td>
                <td className="px-6 py-4">
                    Mexico
                </td>
                <td className="px-6 py-4">
                    Sonora
                </td>
                <td className="px-6 py-4">
                    Colima
                </td>
                <td className="px-6 py-4">
                    Alfreds Futterkiste
                </td>
                <td className="px-6 py-4 color-[#03a32e]">
                  Completed
                </td>
                <td className="px-6 py-4">
                    02.03.2003
                </td>
                <td className="px-6 py-4">
                    20.05.2003
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                    2.
                </td>
                <th scope="row" className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    John Doe
                </th>
                <td className="px-6 py-4">
                    1800917025
                </td>
                <td className="px-6 py-4">
                    user.email
                </td>
                <td className="px-6 py-4">
                    Mexico
                </td>
                <td className="px-6 py-4">
                    Sonora
                </td>
                <td className="px-6 py-4">
                    Colima
                </td>
                <td className="px-6 py-4">
                    Alfreds Futterkiste
                </td>
                <td className="px-6 py-4 " style={{color: "#03a32e"}}>
                  Completed
                </td>
                <td className="px-6 py-4">
                    02.03.2003
                </td>
                <td className="px-6 py-4">
                    20.05.2003
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                    3.
                </td>
                <th scope="row" className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    John Doe
                </th>
                <td className="px-6 py-4">
                    1800917025
                </td>
                <td className="px-6 py-4">
                    user.email
                </td>
                <td className="px-6 py-4">
                    Mexico
                </td>
                <td className="px-6 py-4">
                    Sonora
                </td>
                <td className="px-6 py-4">
                    Colima
                </td>
                <td className="px-6 py-4">
                    Alfreds Futterkiste
                </td>
                <td className="px-6 py-4" style={{color: "#03a32e"}}>
                  Completed
                </td>
                <td className="px-6 py-4">
                    02.03.2003
                </td>
                <td className="px-6 py-4">
                    20.05.2003
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                    4.
                </td>
                <th scope="row" className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    John Doe
                </th>
                <td className="px-6 py-4">
                    1800917025
                </td>
                <td className="px-6 py-4">
                    user.email
                </td>
                <td className="px-6 py-4">
                    Mexico
                </td>
                <td className="px-6 py-4">
                    Sonora
                </td>
                <td className="px-6 py-4">
                    Colima
                </td>
                <td className="px-6 py-4">
                    Alfreds Futterkiste
                </td>
                <td className="px-6 py-4" style={{color: "#03a32e"}}>
                  Completed
                </td>
                <td className="px-6 py-4">
                    02.03.2003
                </td>
                <td className="px-6 py-4">
                    20.05.2003
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                    5.
                </td>
                <th scope="row" className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    John Doe
                </th>
                <td className="px-6 py-4">
                    1800917025
                </td>
                <td className="px-6 py-4">
                    user.email
                </td>
                <td className="px-6 py-4">
                    Mexico
                </td>
                <td className="px-6 py-4">
                    Sonora
                </td>
                <td className="px-6 py-4">
                    Colima
                </td>
                <td className="px-6 py-4">
                    Alfreds Futterkiste
                </td>
                <td className="px-6 py-4" style={{color: "#03a32e"}}>
                  Completed
                </td>
                <td className="px-6 py-4">
                    02.03.2003
                </td>
                <td className="px-6 py-4">
                    20.05.2003
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                    6.
                </td>
                <th scope="row" className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    John Doe
                </th>
                <td className="px-6 py-4">
                    1800917025
                </td>
                <td className="px-6 py-4">
                    user.email
                </td>
                <td className="px-6 py-4">
                    Mexico
                </td>
                <td className="px-6 py-4">
                    Sonora
                </td>
                <td className="px-6 py-4">
                    Colima
                </td>
                <td className="px-6 py-4">
                    Alfreds Futterkiste
                </td>
                <td className="px-6 py-4" style={{color: "#03a32e"}}>
                  Completed
                </td>
                <td className="px-6 py-4">
                    02.03.2003
                </td>
                <td className="px-6 py-4">
                    20.05.2003
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                    7.
                </td>
                <th scope="row" className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    John Doe
                </th>
                <td className="px-6 py-4">
                    1800917025
                </td>
                <td className="px-6 py-4">
                    user.email
                </td>
                <td className="px-6 py-4">
                    Mexico
                </td>
                <td className="px-6 py-4">
                    Sonora
                </td>
                <td className="px-6 py-4">
                    Colima
                </td>
                <td className="px-6 py-4">
                    Alfreds Futterkiste
                </td>
                <td className="px-6 py-4" style={{color: "#03a32e"}}>
                  Completed
                </td>
                <td className="px-6 py-4">
                    02.03.2003
                </td>
                <td className="px-6 py-4">
                    20.05.2003
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                    8.
                </td>
                <th scope="row" className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    John Doe
                </th>
                <td className="px-6 py-4">
                    1800917025
                </td>
                <td className="px-6 py-4">
                    user.email
                </td>
                <td className="px-6 py-4">
                    Mexico
                </td>
                <td className="px-6 py-4">
                    Sonora
                </td>
                <td className="px-6 py-4">
                    Colima
                </td>
                <td className="px-6 py-4">
                    Alfreds Futterkiste
                </td>
                <td className="px-6 py-4" style={{color: "#03a32e"}}>
                  Completed
                </td>
                <td className="px-6 py-4">
                    02.03.2003
                </td>
                <td className="px-6 py-4">
                    20.05.2003
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                    9.
                </td>
                <th scope="row" className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    John Doe
                </th>
                <td className="px-6 py-4">
                    1800917025
                </td>
                <td className="px-6 py-4">
                    user.email
                </td>
                <td className="px-6 py-4">
                    Mexico
                </td>
                <td className="px-6 py-4">
                    Sonora
                </td>
                <td className="px-6 py-4">
                    Colima
                </td>
                <td className="px-6 py-4">
                    Alfreds Futterkiste
                </td>
                <td className="px-6 py-4" style={{color:"#03a32e"}}>
                  Completed
                </td>
                <td className="px-6 py-4">
                    02.03.2003
                </td>
                <td className="px-6 py-4">
                    20.05.2003
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                    10.
                </td>
                <th scope="row" className="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    John Doe
                </th>
                <td className="px-6 py-4">
                    1800917025
                </td>
                <td className="px-6 py-4">
                    user.email
                </td>
                <td className="px-6 py-4">
                    Mexico
                </td>
                <td className="px-6 py-4">
                    Sonora
                </td>
                <td className="px-6 py-4">
                    Colima
                </td>
                <td className="px-6 py-4">
                    Alfreds Futterkiste
                </td>
                <td className="px-6 py-4" style={{color: "#03a32e"}}>
                  Completed
                </td>
                <td className="px-6 py-4">
                    02.03.2003
                </td>
                <td className="px-6 py-4">
                    20.05.2003
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
    </>
  )
}
