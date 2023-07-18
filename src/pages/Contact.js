import React from 'react'
import "../styles/Contact.css"
import { Link } from 'react-router-dom'
import map from "../asset/Mapsicle Map.png"

const Contact = () => {
  return (
    <React.Fragment>
    <div className='contact'>
         <div className='bg-contact'>   
         </div>
         <div className='bg-contact-overlay'>
              <div className='contact-container'>
                   <div className='contact-content'>
                       <h1>You’ve got vital info for us?</h1>
                        <p>Do well and reach out to us</p>
                        <Link><button>Contact Us</button></Link>
                   </div>
              </div>
         </div>
    </div>
    <div className='form-contact'>
         <div className='form-contact-content'>
              <div className='contact-left'></div>
              <div className='contact-right'></div>
         </div>
    </div>
    <div className='map'>
         <div className='map-content'>
              <h3>Find us on the Map</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet. </p>
              <img src={map} alt={map}/>
         </div>
    </div>
    </React.Fragment>
  )
}

export default Contact