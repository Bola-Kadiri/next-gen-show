import React from 'react'
import "../component/Footer.css"
import logo  from "../asset/The Next Gen SHOW.png";

const Footer = () => {
  return (
    <div className='footer'>
         <div className='footer-content'>
           <div className='top-footer'>
                <h1>Subscribe to our Newsletter</h1>
                <p>Join our mailing list to get our latest news</p>
                <div className='mail'>
                     <div className='mail-input'>
                          <input type='text' placeholder='Enter your email'/>
                          <button>Subscribe</button>
                     </div>
                </div>
           </div>
           <div className='bottom-footer'>
                <div className='bottom-footer-content'>
                     <img src={logo} alt={logo}/>
                     <div className='company'>
                          <h4>COMPANY</h4>
                          <p>How is works</p>
                          <p>Talents</p>
                          <p>Event</p>
                     </div>
                     <div className='resources'>
                          <h4>RESOURCES</h4>
                          <p>Blog post name goes here</p>
                          <p>Blog post name goes here</p>
                          <p>Blog post name goes here</p>
                          <p>See all resources</p>
                     </div>
                     <div className='about-footer'>
                          <h4>ABOUT</h4>
                          <p>Terms and conditions</p>
                          <p>Privacy policy</p>
                     </div>
                </div>
                   hfhfhh
           </div>
       
         </div>
    </div>
  )
}

export default Footer