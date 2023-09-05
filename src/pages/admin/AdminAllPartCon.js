import React from 'react'

import AdminAllPart from './AdminAllPart'
import AdminHeader from './components/AdminHeader'
import AdminNav from './components/AdminNav'



const AdminAllPartCon = () => {
  return (
    <div className='admin-all-event'>
    <div className='admin-all-event'>
         <AdminHeader/>
         <div className='flex'>
              <AdminNav/>
              <AdminAllPart/>
         </div>
    </div>
    </div>
  )
}

export default AdminAllPartCon