import React from 'react';
import logo from "../asset/The Next Gen SHOW.png"
import {Link} from "react-router-dom"
import "../component/Nav.css"


const Nav = () => {
  return (
    <div className='nav-menu'>
                    <div className='logo-house'>
                        <Link to="/"><img src={logo} alt="img1" className='logo'/></Link>
                    </div>
                    <div className='nav-links'>
                         <li><Link to="/about">About Us</Link></li>
                         <li><Link to="/event">Events</Link></li>
                         <li><Link to="/talents">Talents</Link></li>
                         <li><Link to="/contact">Contact</Link></li>
                    </div>
                    <div className='btn-join'>
                         <li><Link to="/join">Join Us</Link></li>
                    </div>
               </div>
  )
}

export default Nav