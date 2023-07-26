import React from 'react'
import "../../styles/Signup.css"
import logo from "../../asset/The Next Gen SHOW.png";
import input_tick from "../../asset/input-tick.png";
import icon from "../../asset/Icon (5).png"
import eye from "../../asset/eye-slash.png"

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
                 <form className='signup-form'>
                     
                      <div className='email'>
                           <label>Email*</label><br/>
                           <div className='email-container'>
                                <input type="email"/>
                                <img src={input_tick} alt={input_tick}/>
                           </div>
                      </div>
                      <div className='phone'>
                           <lable>Phone number* why? <img src={icon} alt={icon}/></lable><br/>
                           <input type="tel" className='tel'/>
                      </div>
                      <div className='password'>
                           <label>Password*</label><br/>
                          <div className='email-container'>
                               <input type="password"/>
                               <img src={eye} alt={eye}/>
                          </div>
                      </div>
                 </form>
             </div>
         </div>
    </div>
  )
}

export default Signup