import React from 'react'
import Logo from '../images/Tech-SaraZ-logo-300x99.webp';

export default function LeftSidebar() {
  return (
    <>
        <section className="wrapper left-[-300px] ease-in-out duration-300 md:left-0" id="rap">
    <div id="title">
     <nav className="sidebar">
      <i className="bi bi-x ml-20 cursor-pointer text-white flex justify-end text-3xl md:hidden" onclick="Openbar()"></i>
        <div className="text mb-10 flex justify-center items-center md:mt-10">
           <div className="tech-saraz-img w-4/5 px-2 py-2" style={{border: "3px solid #535454", backgroundColor: "#d3e7f5"}}>
            <img src={Logo} alt="logo" className="w-full"/>
           </div>
        </div>
        <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full">
          <button onclick="showMenu1(true)" className="focus:outline-none focus:text-yellow-400  text-left  text-white flex justify-between items-center w-full py-5 space-x-14  ">
           <p className="text-sm leading-5  uppercase">Client Details</p>
            <svg id="icon1" className="transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
          <div id="menu1" className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 ">
            
              <a href="http://127.0.0.1:5500/src/client-listing.html" className="flex justify-start text-base leading-4 items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">Client Listing</a>
              <a href="http://127.0.0.1:5500/src/addnew-client.html" className="flex justify-start text-base leading-4 items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">Add new client</a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center px-5 border-b border-gray-600 w-full  ">
          <button onclick="showMenu2(true)" className="focus:outline-none focus:text-yellow-400   text-white flex justify-between items-center w-full py-5 space-x-14  ">
            <p className="text-sm leading-5 uppercase">Client Business details</p>
            <svg id="icon2" className="transform rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
          <div id="menu2" className="hidden flex justify-start flex-col items-start pb-5 ">
            
              <a href="http://127.0.0.1:5500/src/website-details.html" className="flex justify-start text-base leading-4 items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">Website Details</a>
              <a href="http://127.0.0.1:5500/src/addnew-website.html" className="flex justify-start text-base leading-4 items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">Add New WebSite</a>
           
          </div>
        </div>
        <div className="flex flex-col justify-between items-center h-auto pb-6 px-5 w-full space-y-32 ">
          <button onclick="showMenu3(true)" className="focus:outline-none focus:text-yellow-400  text-white flex justify-between items-center w-full py-5 space-x-14">
            <p className="text-sm leading-5  uppercase">Credentials</p>
            <svg id="icon3" className="rotate-180 transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
          <div id="menu3" className="hidden flex justify-start flex-col items-start pb-5" style={{marginTop: "0"}}>
              <a href="http://127.0.0.1:5500/src/credentials.html" className="flex justify-start items-center text-base leading-4 space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">Client Credentials</a>
              <a href="http://127.0.0.1:5500/src/add-new-credentials.html" className="flex justify-start items-center text-base leading-4 space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">Add New Credentials</a>
          </div>
        </div>
        <div className="icon-group flex gap-4 absolute bottom-10 left-2/4 -translate-x-2/4 justify-center items-center">
          <a className="w-11 h-11 bg-black flex justify-center items-center tracking-normal" style={{boxShadow:"0 2px 5px gray",color: "#fcb900"}} href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a className="w-11 h-11 bg-black flex justify-center items-center tracking-normal" style={{boxShadow:"0 2px 5px gray",color: "#fcb900"}} href="#"><i className="fa-brands fa-twitter"></i></a>
          <a className="w-11 h-11 bg-black flex justify-center items-center tracking-normal" style={{boxShadow:"0 2px 5px gray",color: "#fcb900"}} href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a className="w-11 h-11 bg-black flex justify-center items-center tracking-normal" style={{boxShadow:"0 2px 5px gray",color: "#fcb900"}} href="#"><i className="fa-brands fa-youtube"></i></a>
        </div>
        <div className="icon-4-hide absolute bottom-28 left-2/4 -translate-x-2/4">
        <div className="icon-group flex gap-3 gap-y-8 items-center md:flex-col xl:hidden md:visible lg:hidden">
          <div className="header-input hidden relative w-full h-14 md:w-full md:hidden">
            <input type="text" id="header-input" placeholder="Search..." className="w-full h-full bg-slate-100 px-5 outline-0 border-x-2" style={{border:"2px solid #1b2735"}}/>
            <a className="absolute right-5 top-1/2 -translate-y-1/2" style={{color: "#000"}} href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
          </div>
          <div className="flex gap-4">
          <a className="w-11 h-11 flex justify-center items-center tracking-normal" style={{boxShadow: "0 2px 5px gray", backgroundColor: "#1b2735", color: "#fff", border: "2px solid #fcb900"}} href="#"><i className="fa-solid fa-calendar-day"></i></a>
          <a className="w-11 h-11 flex justify-center items-center tracking-normal" style={{boxShadow: "0 2px 5px gray", backgroundColor: "#1b2735", color: "#fff", border: "2px solid #fcb900"}} href="#"><i className="fa-regular fa-envelope"></i></a>
          <a className="w-11 h-11 flex justify-center items-center tracking-normal" style={{boxShadow: "0 2px 5px gray", backgroundColor: "#1b2735", color: "#fff", border: "2px solid #fcb900"}} href="#"><i className="fa-regular fa-address-card"></i></a>
          <a className="w-11 h-11 flex justify-center items-center tracking-normal" style={{boxShadow: "0 2px 5px gray", backgroundColor: "#1b2735", color: "#fff", border: "2px solid #fcb900"}} href="#"><i className="fa-regular fa-bell"></i></a>
        </div>
        </div>
      </div>
     </nav>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>  
    </div>
</section>
    </>
  )
}
