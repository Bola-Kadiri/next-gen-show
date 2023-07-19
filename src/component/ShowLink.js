import React from 'react'
import { Link } from 'react-router-dom'
import "../component/ShowLink.css"


const ShowLink = () => {
  return (
    <div className='stage-show-link'>
         <li><Link to="/event" className='first-show'>ABOUT EVENT</Link></li>
         <li><Link to="/category" className='second-show'>PARTICIPANTS</Link></li>
    </div>
  )
}

export default ShowLink