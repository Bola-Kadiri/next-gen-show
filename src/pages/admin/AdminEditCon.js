import React from 'react'

import AdminEdit from './AdminEdit'
import AdminHeader from './components/AdminHeader'
import AdminNav from './components/AdminNav'


const AdminEditCon = () => {
  return (
    <div className='admin-all-event'>
         <div className='admin-all-event'>
              <AdminHeader/>
              <div className='flex'>
                   <AdminNav/>
                   <AdminEdit/>
              </div>
         </div>
    </div>
  )
}

export default AdminEditCon