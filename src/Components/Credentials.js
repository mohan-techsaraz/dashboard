import React from 'react'

export default function Credentials() {
  return (
    <>
        <div className="w-full py-10 px-5 bg-slate-300">
    <div className=" pt-5">
      <p className="text-3xl font-bold text-center">Client Credentials</p>
      <div className="flex justify-end mt-10 mb-5 md:pt-0">
      <a href="#" className="btn-download font-semibold flex gap-[10px] items-center" style={{padding: "0 16px",height: "36px",display: "flex", justifyContent: "center", alignItems: "center",gridGap: "10px",background: "#1b2735",color:"#d3e7f5"}}>
        <i className="bx bxs-cloud-download"></i>
        <span className="text">Download</span>
      </a>
    </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-2xl m-auto pt-10 pb-10">
        <div className="font-bold">Client Name
            <select className="form-select w-full h-14 outline-0 text-white" id="country" name="country" style={{backgroundColor: "#1b2735", padding: "0 8px",borderLeft: "3px solid #fcb900", fontWeight: "500"}}>
              <option value="">Name</option>
              <option value="Afghanistan">John Doe</option>
              <option value="Aland Islands">John Doe</option>
              <option value="Albania">John Doe</option>
              <option value="Algeria">John Doe</option> 
            </select>
        </div>
        <div className="font-bold">Client Account Name
                <select className="form-select w-full h-14 outline-0 text-white" id="country" name="country" style={{backgroundColor: "#1b2735",padding: "0 8px",borderLeft: "3px solid #fcb900", fontWeight: "500"}}>
                  <option value="">Account Name</option>
                  <option value="Afghanistan">Alfreds Futterkiste</option>
                  <option value="Aland Islands">Alfreds Futterkiste</option>
                  <option value="Albania">Alfreds Futterkiste</option>
                  <option value="Algeria">Alfreds Futterkiste</option>
                </select>
        </div>
    </div>

    <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs h-16 text-gray-700 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 text-white">
                        Website Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-white">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-white">
                        Creadentials Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-white">
                        User Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-white">
                        Password
                    </th>
                    <th scope="col" className="px-6 py-3 text-white">
                        Email
                    </th>  
                    <th scope="col" className="px-6 py-3 text-white">
                        Phone
                    </th> 
                    <th scope="col" className="px-6 py-3 text-white">
                        Notes
                    </th> 
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                        Tech Saraz
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        John Doe
                    </th>
                    <td className="px-6 py-4">
                        Alfreds Futterkiste
                    </td>
                    <td className="px-6 py-4">
                        Completed
                    </td>
                    <td className="px-6 py-4">
                        02.03.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                        Tech Saraz
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Juan C. Cargill
                    </th>
                    <td className="px-6 py-4">
                        Alfreds Futterkiste
                    </td>
                    <td className="px-6 py-4">
                        Completed
                    </td>
                    <td className="px-6 py-4">
                        02.03.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                        Tech Saraz
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Johnathan Phelan
                    </th>
                    <td className="px-6 py-4">
                        Alfreds Futterkiste
                    </td>
                    <td className="px-6 py-4">
                        Completed
                    </td>
                    <td className="px-6 py-4">
                        02.03.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                        Tech Saraz
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Darrell Lowe
                    </th>
                    <td className="px-6 py-4">
                        Alfreds Futterkiste
                    </td>
                    <td className="px-6 py-4">
                        Completed
                    </td>
                    <td className="px-6 py-4">
                        02.03.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                        Tech Saraz
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      George T. Cottrell
                    </th>
                    <td className="px-6 py-4">
                        Alfreds Futterkiste
                    </td>
                    <td className="px-6 py-4">
                        Completed
                    </td>
                    <td className="px-6 py-4">
                        02.03.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                        Tech Saraz
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Juan C. Cargill
                    </th>
                    <td className="px-6 py-4">
                        Alfreds Futterkiste
                    </td>
                    <td className="px-6 py-4">
                        Completed
                    </td>
                    <td className="px-6 py-4">
                        02.03.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                        Tech Saraz
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Johnathan Phelan	
                    </th>
                    <td className="px-6 py-4">
                        Alfreds Futterkiste
                    </td>
                    <td className="px-6 py-4">
                        Completed
                    </td>
                    <td className="px-6 py-4">
                        02.03.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                        Tech Saraz
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        John Doe
                    </th>
                    <td className="px-6 py-4">
                        Alfreds Futterkiste
                    </td>
                    <td className="px-6 py-4">
                        Completed
                    </td>
                    <td className="px-6 py-4">
                        02.03.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                        Tech Saraz
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Darrell Lowe
                    </th>
                    <td className="px-6 py-4">
                        Alfreds Futterkiste
                    </td>
                    <td className="px-6 py-4">
                        Completed
                    </td>
                    <td className="px-6 py-4">
                        02.03.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                        Tech Saraz
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      George T. Cottrell	
                    </th>
                    <td className="px-6 py-4">
                        Alfreds Futterkiste
                    </td>
                    <td className="px-6 py-4">
                        Completed
                    </td>
                    <td className="px-6 py-4">
                        02.03.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
                    </td>
                    <td className="px-6 py-4">
                        20.05.2003
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
