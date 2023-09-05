import React from 'react'
import "./components/AdminAllEvent.css"
import AdminHeader from './components/AdminHeader'
import AdminNav from './components/AdminNav'
import AdminShortlist from './AdminShortlist'


const AdminShortlistCon = () => {
  return (
    <div className='admin-all-event'>
         <div className='admin-all-event'>
              <AdminHeader/>
              <div className='flex'>
                   <AdminNav/>
                   <AdminShortlist/>
              </div>
         </div>
    </div>
  )
}

export default AdminShortlistCon