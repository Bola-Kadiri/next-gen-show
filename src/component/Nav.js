import React, {useState} from 'react';
import logo from "../asset/The Next Gen SHOW.png"
import {Link} from "react-router-dom"
import "../component/Nav.css"
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'


const Nav = () => {
     const [mobile, setMobile] = useState(false)
     const handleMobile=()=>{
          setMobile(!mobile)
     }
  return (
    <div className='nav-menu'>
                    <div className='logo-house'>
                        <Link to="/"><img src={logo} alt="img1" className='logo'/></Link>
                    </div>
                    <div className={mobile ? "show" :  "nav-links"}>
                         <li><Link to="/about">About Us</Link></li>
                         <li><Link to="/faq">Events</Link></li>
                         <li><Link to="/talent">Talents</Link></li>
                         <li><Link to="/contact">Contact</Link></li>
                         
                         <li className='join'><Link to="/signup">Join Us</Link></li>
          
                    </div>
                    <div className='btn-join'>
                         <li><Link to="/signup">Join Us</Link></li>
                    </div>
                    <button className="bars" onClick={handleMobile}>{ mobile ? < FaTimes className='mobile-bars' /> : < FaBars className='mobile-bars' />}</button>
               </div>
  )
}

export default Nav