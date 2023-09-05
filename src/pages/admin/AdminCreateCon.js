import React from 'react'
import AdminHeader from './components/AdminHeader'
import AdminNav from './components/AdminNav'
import AdminCreate from './AdminCreate'


const AdminCreateCon = () => {
  return (
    <div className='admin-all-event'>
         <div className='admin-all-event'>
              <AdminHeader/>
              <div className='flex'>
                   <AdminNav/>
                   <AdminCreate/>
              </div>
         </div>
    </div>
  )
}

export default AdminCreateCon