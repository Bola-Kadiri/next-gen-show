import React from 'react'
import "../../styles/ConfirmSignUp.css"
import {Link} from "react-router-dom"
import logo from "../../asset/The Next Gen SHOW.png";
import microsoft from"../../asset/microsoft.png";
import gmail from "../../asset/gmail.png"

const ConfirmSignUp = () => {
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
    <div className='confirm-signup-right'>
        <div className='confirm-signup-right-content'>
              <h1>Check your email</h1>
              <p>We’ve sent an email to  stagetimeshow@gmail.com with a link to activate your account </p>
              <div className='social-content'>
                   <div className='gmail'>
                        <img src={gmail} alt={gmail}/>
                        <Link to="/*">Open Gmail</Link>
                   </div>
                   <div className='microsoft'>
                   <img src={microsoft} alt={microsoft}/>
                   <Link to="/*">Open Outlook</Link>
              </div>
              </div>
              <div className='no-email'>
                   <h4>Didn’t get an email? Check your spam folder!</h4>
                   <Link>Re-enter your email and try again</Link>
              </div>

        </div>
    </div>
</div>
  )
}

export default ConfirmSignUp