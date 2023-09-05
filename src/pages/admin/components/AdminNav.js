import React from 'react'
import {Link} from "react-router-dom"

import "./AdminNav.css"
import home from "../../../asset/home.png"
import all_event from "../../../asset/all-event.png"
import all_participant from "../../../asset/all-participant.png"
import list from "../../../asset/list.png"
import create from "../../../asset/create.png"

const AdminNav = () => {
  return (
    <div className='admin-nav'>
         <div className='admin-nav-content'>
              <div className='nav-box-home'>
                 <img src={home} alt={home}/>
                 <Link to="/admin/admin-home">Home</Link>
              </div>
              <div className='nav-box-home'>
                 <img src={all_event} alt={all_event}/>
                 <Link to="/admin/admin-all-event">All Events</Link>
              </div>
              <div className='nav-box-home'>
                 <img src={all_participant} alt={all_participant}/>
                 <Link to="/admin/admin-all-participant">All Participants</Link>
              </div>
              <div className='nav-box-home'>
                 <img src={list} alt={list}/>
                 <Link to="/admin/admin-shortlist">Shortlisted</Link>
              </div>
              <div className='create-btn'>
              <Link to="/admin/admin-create">
                    <img src={create} alt={create}/>
                    <span>Create</span>
              </Link>
           </div>
         </div>
        
    </div>
  )
}

export default AdminNav