import React from 'react'
import logo from "../../../asset/The Next Gen SHOW.png"
import alarm from "../../../asset/Group.png";
import nav_profile from "../../../asset/nav-profile.png";
import "./AdminHeader.css"

const AdminHeader = () => {
  return (
    <div className='admin-header'>
        <div className='admin-header-content'>
             <img src={logo} alt={logo} className='image'/>
             <div className='admin-boss-right'>
                  <img src={alarm} alt={alarm} className='alarm'/>
                  <img src={nav_profile} alt={nav_profile}/>
                  <span>Admin Boss</span>
             </div>
        </div>
    </div>
  )
}

export default AdminHeader