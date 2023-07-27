import React from 'react'
import "../../styles/Signup.css"
import {Link} from "react-router-dom"
import logo from "../../asset/The Next Gen SHOW.png";
import input_tick from "../../asset/input-tick.png";
import icon from "../../asset/Icon (5).png"
import eye from "../../asset/eye-slash.png";
import vector from "../../asset/Vector (2).png"
import phone from "../../asset/phone.png";
import ellipse from "../../asset/Ellipse 3248.png"
const Signup = () => {
  return (

    <div className='signup'>
         <div className='signup-left'>
              <div className='bg-signup-left'>   
              </div>
              <div className='bg-signup-left-overlay'>
                  <div className='signup-left-container'>
                       <div className='signup-left-content'>
                            <div className='logo-container'>
                                <img src={logo} alt={logo}/>
                                <div></div>
                            </div>
                            <div className='signup-start'>
                                 <h1>Start your<br/> remarkable journey<br/> with us!</h1>
                            </div>
                       </div>
                  </div>
              </div>
         </div>
         <div className='signup-right'>
             <div className='signup-right-content'>
                   <h1>Hi, welcome back</h1>
                   <p>Empower your experience, sign up for free today </p>
                   <form className='form-input'>
                         <label>Email*</label><br/>
                         <div className='email'>
                              <input type="email"/>
                              <img src={input_tick} alt={input_tick}/>
                         </div>
                         <label>Phone number* why <img src={icon} alt={icon}/></label><br/>
                         <div className='phone'>
                               <input  type="tel"/>
                               <img src={phone} alt={phone}/>
                         </div>
                         <label>Password*</label><br/>
                         <div className='paswd'>
                               <input  type="password"/>
                               <img src={eye} alt={eye}/>
                         </div>
                   </form>
                   <div className='procedure'>
                        <div className='procedure-left'>
                             <div className='character-right'>
                                  <img src={vector} alt={vector}/>
                                  <span>One lowercase characte</span>
                             </div>
                             <div className='character-right'>
                                  <img src={vector} alt={vector}/>
                                  <span>One uppercase character</span>
                             </div>
                             <div className='character-right'>
                             <img src={vector} alt={vector}/>
                             <span>8 characters minimum</span>
                        </div>
                            
                        </div>
                        <div className='procedure-right'>
                             
                             <div className='character-left'>
                                  <img src={vector} alt={vector}/>
                                  <span>One special character</span>
                             </div>
                             <div className='character-left'>
                                  <img src={vector} alt={vector}/>
                                  <span>One number</span>
                             </div>
                        </div>
                        
                   </div>
                   <div className='statement'>
                       <div className='statement-content'>
                            <img src={ellipse} alt={ellipse}/>
                            <p>Please exclude me from any future emails regarding Triosale and 
                            related Intuit product and feature updates, marketing best practices, and 
                            promotions.</p>
                       </div>
                       <div className='statement-content'>
                            <div>hello</div>
                            <p>By registering for an account, you are consenting to our 
                       Terms of Service and confirming that you have reviewed and accepted 
                       the Global Privacy Statement.</p>
                       </div>
                      
                   </div>
                   <div className='signup-btn'><button>Get Started</button></div>
                   <div className='account'>
                        <span>Already have an account?  <Link to="/login">Login</Link></span>
                   </div>
             </div>
         </div>
    </div>
  )
}

export default Signup