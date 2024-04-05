import React from 'react'

export default function Header() {
  return (
    <>
         <header className="w-full h-28" style={{backgroundColor: "#d3e7f5",position: "sticky", top: "0", zIndex: "1000"}}>
    <div className="head-wraper h-28 gap-3 flex items-center w-11/12 m-auto justify-between lg:gap-5">
    <div className="logo-img md:hidden">
      <span className=" text-white text-3xl cursor-pointer w-11 h-11 flex gap-0 justify-center items-center" onclick="Openbar()">
        <i className="bi bi-filter-left px-1 py-1 bg-gray-900"></i>
      </span>
    </div>
    <div className="flex gap-3 items-center hidden md:hidden lg:inline-flex lg:gap-2">
      <a className="w-11 h-11 flex justify-center items-center tracking-normal lg:w-10 lg:h-10 xl:w-11 xl:h-11" style={{boxShadow: "0 2px 5px gray" ,backgroundColor: "#1b2735", color: "#fff", border: "2px solid #fcb900"}}  href="#"><i className="fa-solid fa-calendar-day"></i></a>
      <a className="w-11 h-11 flex justify-center items-center tracking-normal lg:w-10 lg:h-10 xl:w-11 xl:h-11" style={{boxShadow: "0 2px 5px gray" ,backgroundColor: "#1b2735", color: "#fff", border: "2px solid #fcb900"}}  href="#"><i className="fa-regular fa-envelope"></i></a>
      <a className="w-11 h-11 flex justify-center items-center tracking-normal lg:w-10 lg:h-10 xl:w-11 xl:h-11" style={{boxShadow: "0 2px 5px gray" ,backgroundColor: "#1b2735", color: "#fff", border: "2px solid #fcb900"}}  href="#"><i className="fa-regular fa-address-card"></i></a>
      <a className="w-11 h-11 flex justify-center items-center tracking-normal lg:w-10 lg:h-10 xl:w-11 xl:h-11" style={{boxShadow: "0 2px 5px gray" ,backgroundColor: "#1b2735", color: "#fff", border: "2px solid #fcb900"}}  href="#"><i className="fa-regular fa-bell"></i></a>
    </div>
      <div className="header-input relative w-full h-14 md:inline-flex md:mr-5 lg:mr-0 lg:w-full xl:w-full">
        <input type="text" id="header-input" placeholder="Search..." className="w-full h-full bg-slate-100 px-5 outline-0 border-x-2" style={{border: "2px solid #1b2735"}}/>
        <a className="absolute right-5 top-1/2 -translate-y-1/2" style={{color: "#000"}} href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
      </div>
    
    <div className="icon-group flex gap-2 lg:gap-2 xl:gap-5">
      <a className="w-10 h-10 bg-#06070AE0 flex justify-center items-center" href="#"><i className="fa-solid fa-power-off"></i></a>
      <a className="w-10 h-10 flex justify-center items-center" style={{backgroundColor: "#1b2735",border: "2px solid #fcb900",color: "#fff"}} href="#"><i className="fa-solid fa-gear"></i></a>
    </div>
  </div>
  </header>
    </>
  )
}
