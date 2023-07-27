import React from 'react'
import "../../styles/Login.css"
import {Link} from "react-router-dom"
import logo from "../../asset/The Next Gen SHOW.png";
import input_tick from "../../asset/input-tick.png";

import eye from "../../asset/eye-slash.png";


const Login = () => {
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
                         <label>Password*</label><br/>
                         <div className='paswd'>
                               <input  type="password"/>
                               <img src={eye} alt={eye}/>
                         </div>
                   </form>
                   <div className='signup-btn'><button>Get Started</button></div>
                   <div className='account'>
                        <span>Don't have an account? <Link to="/signup">Sign up</Link></span>
                   </div>
             </div>
         </div>
    </div>
  )
}

export default Login