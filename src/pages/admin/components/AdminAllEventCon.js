import React from 'react'
import AdminHeader from './AdminHeader'
import AdminNav from './AdminNav'
import AdminAllEvent from '../AdminAllEvent'


const AdminAllEventCon = () => {
  return (
    <div className='admin-all-event'>
    <div className='admin-all-event'>
         <AdminHeader/>
         <div className='flex'>
              <AdminNav/>
              <AdminAllEvent/>
         </div>
    </div>
</div>
  )
}

export default AdminAllEventCon