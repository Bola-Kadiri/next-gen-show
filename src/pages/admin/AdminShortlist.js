import React from 'react'
import "./components/AdminShortlist.css";
import progress from "../../asset/progress.png"
import arrow_down from "../../asset/arrow-down.png"
import search from "../../asset/search.png"
// import flag from "../../asset/flag.png"
// import remove from "../../asset/remove.png"
// import edit from "../../asset/edit.png"
// import checkbox from "../../asset/_Checkbox base.png"
const AdminShortlist = () => {
  return (
    <div className='shortlist'>
         <div className='shortlist-content'>
            <div className='shortlist-progress'>
                 <div className='progress-one'>
                     <img src={progress} alt={progress}/>
                     <div className='total-event'>
                          <p>Total Events</p>
                          <div>15 Events</div>
                     </div>
                 </div>
                 <div className='progress-one'>
                      <img src={progress} alt={progress}/>
                      <div className='total-event'>
                           <p>Total Participants</p>
                           <div>74 Participants</div>
                      </div>
                 </div>
                 <div className='progress-one'>
                      <img src={progress} alt={progress}/>
                      <div className='total-event'>
                           <p>Total Categories</p>
                           <div>174 Categories</div>
                      </div>
                 </div>
            </div>
            <div className='event-search-input'>
                  <div  className='filter-btn'>
                        <button>
                              <img src={arrow_down} alt={arrow_down}/>
                              <span>Filter</span>
                        </button>
                        <div className='row-selected'>
                              <p>1 row</p>
                              <div>selected</div>
                        </div>
                  </div>
                  <div className='admin-search'>
                       <img src={search} alt={search}/>
                       <input type='text' />
                  </div>
            </div>
         </div>
    </div>
  )
}

export default AdminShortlist