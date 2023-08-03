
import React, {useState} from 'react';
import logo from "../../asset/The Next Gen SHOW.png"
import {Link} from "react-router-dom"
import "../../styles/JoinEventOne.css"
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import nav_profile from "../../asset/nav-profile.png"
import event_user from "../../asset/event-user.png"
import event_envelop from "../../asset/event-envelop.png"


const JoinEventOne = () => {
  const [mobile, setMobile] = useState(false)
  const handleMobile=()=>{
       setMobile(!mobile)
  }
  return (
    <div className='join-event-one'>
    <div className='nav-menu-join'>
    <div className='logo-houses'>
        <Link to="/"><img src={logo} alt="img1" className='logos'/></Link>
    </div>
    <div className={mobile ? "shows" :  "nav-linkss"}>
         <li><Link to="/about">About Us</Link></li>
         <li><Link to="/faq">Events</Link></li>
         <li><Link to="/talent">Talents</Link></li>
         <li><Link to="/contact">Contact</Link></li>
         
       

    </div>
    <div className='btn-joins'>
         <img src={nav_profile} alt={nav_profile}/>
         <span>Casandra Billz</span>
    </div>
    <button className="bars" onClick={handleMobile}>{ mobile ? < FaTimes className='mobile-bars' /> : < FaBars className='mobile-bars' />}</button>
</div>
<div className='join-event-body-one'>
     <div className='join-event-body-one-content'>
          <h2>Join StageX as a Contenstant!</h2>
          <p>Please fill the form below to receive a quote for your entry. Feel 
          free to add as much detail as needed.</p>

          <div className='join-event-one-fill'>
               <div className='join-event-one-fill-content'>
                    <div className='join-one-1'>1</div>
                    <div className='join-one-first-line'>
                         <div className='join-one-first-line-per'></div>
                    </div>
                    <div className='join-one-2'>2</div>
                    <div className='join-one-second-line'></div>
                    <div className='join-one-3'>3</div>
                    <div className='join-one-third-line'></div>
                    <div className='join-one-4'>4</div>

               </div>
          </div>
          <div className='join-event-one-form'>
               <div className='join-event-one-form-content'>
                    <h3>Contact details</h3>
                    <input type="radio" id="profile" name="event" value="profile"/>
                    <label>Use same as on profile</label>
                    <div className='join-event-input'>
                    <div className='join-event-input-content'>
                        <div className='join-event-name-email'>
                             <div className='join-event-name'>
                                  <label>Name</label><br/>
                                  <div className='control-input-name'>
                                       <input type="text"/>
                                       <img src={event_user} alt={event_user}/>
                                  </div>
                             </div>
                             <div className='join-event-email'>
                                  <label>Email</label><br/>
                                  <div className='control-input-name'>
                                       <input type="text"/>
                                       <img src={event_envelop} alt={event_envelop}/>
                                  </div>
                             </div>
                             
                        </div>
                        <div className='join-event-name-email'>
                        <div className='join-event-name'>
                             <label>Name</label><br/>
                             <div className='control-input-name'>
                                  <input type="text"/>
                                  <img src={event_user} alt={event_user}/>
                             </div>
                        </div>
                        <div className='join-event-email'>
                             <label>Email</label><br/>
                             <div className='control-input-name'>
                                  <input type="text"/>
                                  <img src={event_envelop} alt={event_envelop}/>
                             </div>
                        </div>
                        
                   </div>
                   <div className='join-event-name-email'>
                   <div className='join-event-name'>
                        <label>Name</label><br/>
                        <div className='control-input-name'>
                             <input type="text"/>
                             <img src={event_user} alt={event_user}/>
                        </div>
                   </div>
                   <div className='join-event-email'>
                        <label>Email</label><br/>
                        <div className='control-input-name'>
                             <input type="text"/>
                             <img src={event_envelop} alt={event_envelop}/>
                        </div>
                   </div>
                   
              </div>
              <div className='join-event-next'>
                   <button className='join-event-btn'><Link to="/join-event-two">Next</Link></button>
              </div>
                    </div>
               </div>
               </div>
          </div>
     </div>
</div>
<div className='footers'>
<div className='footer-content'>
  <div className='bottom-footer'>
  
       <div className='bottom-footer-content'>
       <div className='one'>
            <img src={logo} alt={logo}/>
            <div className='company'>
                 <h4>COMPANY</h4>
                 <p>How is works</p>
                 <p>Talents</p>
                 <p>Event</p>
            </div>
            </div>
            <div className='two'>                     
            <div className='i'>
            
                 <h4>RESOURCES</h4>
                 <p>Blog post name goes here</p>
                 <p>Blog post name goes here</p>
                 <p>Blog post name goes here</p>
                 <p>See all resources</p>
            </div>
            <div className=''>
                 <h4>ABOUT</h4>
                 <p>Terms and conditions</p>
                 <p>Privacy policy</p>
            </div>
       </div>
       </div>
          <span>Copyright © 2023 The NextGen Show</span>
  </div>

</div>
</div>
</div>
  )
}

export default JoinEventOne