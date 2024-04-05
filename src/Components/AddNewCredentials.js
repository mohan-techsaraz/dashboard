import React from 'react'

export default function AddNewCredentials() {
  return (
    <>
        <div className="w-full bg-slate-300 py-5 px-5 sm:px-10" style={{border: "1px solid #e6e6e6"}}>
    <p className="text-3xl font-bold text-center pt-10">Add New Credentials</p>
    <div className="flex justify-end mt-10 md:pr-10 pt-5 md:pt-0">
    <a href="#" className="btn-download font-semibold flex gap-[10px] items-center" style={{padding: "0 16px",height: "36px",display: "flex", justifyContent: "center", alignItems: "center",gridGap: "10px",background:"#1b2735",color:"#d3e7f5"}}>
      <i className="bx bxs-cloud-download"></i>
      <span className="text">Download</span>
    </a>
  </div>
    <div className="py-10 px-5 mt-5" style={{border: "1px solid #e6e6e6"}}>
          {/* <!-- Country names and Country Name --> */}
          <div className="flex gap-5 flex-col md:flex-row md:max-w-2xl m-auto mt-10">
          <div className="w-full py-10 px-5 font-bold" style={{backgroundColor: "#1b2735"}}><span style={{color: "#fff"}}>Website Name</span>
<select className="form-select w-full h-14 outline-0" id="country" name="country" style={{backgroundColor: "#d3e7f5",padding: "0 8px",borderLeft: "3px solid #fcb900",fontWeight: "500"}}>
 <option value="">Website Name...</option>
 <option value="Afghanistan">Afghanistan</option>
 <option value="Aland Islands">Aland Islands</option>
 <option value="Albania">Albania</option>
 <option value="Algeria">Algeria</option>
</select>
    </div>

<div className="w-full py-10 px-5 font-bold" style={{backgroundColor: "#1b2735"}}><span style={{color: "#fff"}}>Status</span>
<select className="form-select w-full h-14 outline-0" id="country" name="country" style={{backgroundColor: "#d3e7f5",padding: "0 8px",borderLeft: "3px solid #fcb900",fontWeight: "500"}}>
 <option value="">Status</option>
 <option value="Afghanistan">Active</option>
 <option value="Aland Islands">Active</option>
 <option value="Albania">Active</option>
 <option value="Algeria">Active</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-5 mt-5">
<div className="w-full py-10 px-5" style={{backgroundColor: "#1b2735"}}><span className="font-bold text-white">Creadentials Name</span>
    <input type="text" placeholder="Enter Your Name..." className="w-full h-14 outline-0 px-2 font-medium" style={{backgroundColor: "#d3e7f5", borderLeft: "3px solid #fcb900"}}/>
    </div>
    <div className="w-full py-10 px-5" style={{backgroundColor: "#1b2735"}}><span className="font-bold text-white">User Name</span>
        <input type="text" placeholder="User Name..." className="w-full h-14 outline-0 px-2 font-medium text-black" style={{backgroundColor: "#d3e7f5",color: "#000",  borderLeft: "3px solid #fcb900"}}/>
    </div>
    <div className="w-full py-10 px-5" style={{backgroundColor: "#1b2735"}}><span className="font-bold text-white">Password</span>
        <input type="text" placeholder="Enter Your Password..." className="w-full h-14 outline-0 px-2 font-medium" style={{backgroundColor: "#d3e7f5", borderLeft: "3px solid #fcb900"}}/>
    </div>
</div>
<textarea className="py-5 px-4 block mt-10 w-full h-60 border-gray-200 font-semibold text-sm outline-0 disabled:opacity-50 disabled:pointer-events-none" rows="3" placeholder="Notes" style={{border: "1px solid #1b2735"}}></textarea>
    <div className="pt-10 flex justify-center gap-5 font-semibold">
      <button className="w-40 h-14" style={{backgroundColor: "#1b2735",color: "#fff",letterSpacing: "1px"}}>Submit</button>
    </div> 
  </div>    
</div>
    </>
  )
}
