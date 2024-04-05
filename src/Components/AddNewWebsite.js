import React from 'react'

export default function AddNewWebsite() {
  return (
    <>
        <div className="w-full bg-slate-300 py-5 px-5">
  <p className="text-3xl font-bold text-center pt-10">Add New WebSite</p>
      <div className="flex justify-end pb-5 mt-10 md:pr-10 pt-5 md:pt-0">
      <a href="#" className="btn-download font-semibold flex gap-[10px] items-center" style={{padding: "0 16px",height: "36px",display: "flex", justifyContent: "center", alignItems: "center", gridGap: "10px",background:"#1b2735",color:"#d3e7f5"}}>
        <i className="bx bxs-cloud-download"></i>
        <span className="text">Download</span>
      </a>
    </div>
    <div className="py-10 px-5" style={{border: "1px solid #f5edda"}}> <span className="text-3xl md:text-4xl font-bold text-center"> Fill the form. <br/> It's <span style={{color: "#057e96",fontWeight: "600",fontFamily: 'Gill Sans',textDecoration: "underline"}}>Easy.</span> </span>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-5 mt-10">
        <div><span className="font-bold">Website Name</span>
        <input type="text" placeholder="Name..." className="w-full h-14 outline-0 px-2 font-medium" style={{backgroundColor: "#1b2735",padding: "0 8px",borderLeft: "3px solid #fcb900",fontWeight: "500", color: "#fff"}}/>
        </div>  
          {/* <!-- Country names and Country Name --> */}
          <div className="font-bold"> Client Name
<select className="form-select w-full h-14 outline-0 text-white" id="country" name="country" style={{backgroundColor: "#1b2735",padding: "0 8px",borderLeft: "3px solid #fcb900",fontWeight: "500"}}>
 <option value="">Client Name...</option>
 <option value="John Doe">John Doe</option>
 <option value="John Doe">John Doe</option>
 <option value="John Doe">John Doe</option>
 <option value="John Doe">John Doe</option>
</select>
    </div>

<div className="font-bold">Account Name
<select className="form-select w-full h-14 outline-0 text-white" id="country" name="country" style={{backgroundColor: "#1b2735",padding: "0 8px",borderLeft: "3px solid #fcb900",fontWeight: "500"}}>
 <option value="">Account Name...</option>
 <option value="Alfreds Futterkiste">Alfreds Futterkiste</option>
 <option value="Alfreds Futterkiste">Alfreds Futterkiste</option>
 <option value="Alfreds Futterkiste">Alfreds Futterkiste</option>
 <option value="Alfreds Futterkiste">Alfreds Futterkiste</option>
</select>
</div>

<div className="font-bold">Website Status
<select className="form-select w-full h-14 outline-0 text-white" id="country" name="country" style={{backgroundColor: "#1b2735",padding: "0 8px",borderLeft: "3px solid #fcb900",fontWeight: "500"}}>
 <option value="">Status</option>
 <option value="Completed">Completed</option>
 <option value="Completed">Completed</option>
 <option value="Completed">Completed</option>
 <option value="Completed">Completed</option>
</select>
</div>

<div className="font-bold">Website Starting Date
  <input id="datepicker" className="form-select w-full h-14 outline-0 text-white flatpickr-input" type="text" placeholder="Starting Date" style={{backgroundColor: "#1b2735",padding: "0 8px",borderLeft: "3px solid #fcb900",fontWeight: "500"}} readonly="readonly"/>
</div>      

<div className="font-bold">Website Ending Date
    <input id="datepicker" className="form-select w-full h-14 outline-0 text-white flatpickr-input" type="text" placeholder="Ending Date" style={{backgroundColor: "#1b2735",padding: "0 8px",borderLeft: "3px solid #fcb900",fontWeight: "500"}} readonly="readonly"/>
</div>
</div>
    <div className="pt-10 flex justify-center gap-5 font-semibold">
      <button className="w-40 h-14" style={{backgroundColor: "#1b2735", color: "#fff",letterSpacing: "1px"}}>Submit</button>
    </div> 
  </div>    
</div>
    </>
  )
}
