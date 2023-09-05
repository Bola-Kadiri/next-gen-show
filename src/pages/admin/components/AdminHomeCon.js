import React from 'react'
import AdminHome from '../AdminHome'
import AdminHeader from './AdminHeader'
import AdminNav from './AdminNav'


const AdminHomeCon = () => {
  return (
    <div className='admin-all-event'>
         <div className='admin-all-event'>
              <AdminHeader/>
              <div className='flex'>
                   <AdminNav/>
                   <AdminHome/>
              </div>
         </div>
    </div>
  )
}

export default AdminHomeCon