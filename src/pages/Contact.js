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
                        <div className='contact-btn'>
                             <Link><button>Contact Us</button></Link>
                        </div>
                   </div>
              </div>
         </div>
    </div>
    <div className='form-contact'>
         <form className='form-contact-content'>
              <div className='contact-left'>
                   <div className='contact-input-left'>
                        <p>Phone</p>
                        <input type='tel'placeholder='+234 908 8867 843'/>
                   </div>
                   <div className='contact-input-left'>
                        <p>Email</p>
                        <input type='email' placeholder='help@thenextgenshow.com'/>
                   </div>
                   <div className='contact-input-left'>
                        <p>Office</p>
                        <input type='text' placeholder='78, Westhill Estate, Abuja'/>
                   </div>
              </div>
              <div className='contact-right'>
                   <div className='contact-right-header'>
                        <h4>Send us a message</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.
                        Sit curabitur nulla justo tellus amet.</p>
                   </div>
                   <div className='contact-right-content'>
                        <input type='text' placeholder='First Name'/>
                        <input type='text' placeholder='Last Name'/>          
                   </div>
                   <input type='email' placeholder='Email address'/>
                   <textarea>Message</textarea>
                   <button>Send message</button>
              </div>
         </form>
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