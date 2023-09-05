import React from 'react'
import AdminHeader from './AdminHeader'
import AdminNav from './AdminNav'
import AdminAll from '../AdminAll'
const AdminAllCon = () => {
  return (
    <div className='admin-all-event'>
         <div className='admin-all-event'>
              <AdminHeader/>
              <div className='flex'>
                   <AdminNav/>
                   <AdminAll/>
              </div>
         </div>
    </div>
  )
}

export default AdminAllCon