import React from 'react'
import "../../styles/AccountStageOne.css"
import logo from "../../asset/The Next Gen SHOW.png";
import arrow_left from "../../asset/arrow-left.png"
import {Link} from "react-router-dom"
const AccountCareerBuilder = () => {
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
    <div className='account-stage-one'>
        <div className='account-stage-one-content'>
             <div className='account-setup'>
                  <p>Account set up</p>
                  <p>3/4</p>
             </div>
             <div className='level'>
                  <div className='measure'></div>
             </div>
             <img src={arrow_left} alt={arrow_left}/>
             <div className='account-tell-us'>
             <h2>Why are you joining The NextGen Show?</h2>
             <p>We’ll get you started with personalized recommendations based on your focus</p>
             <form>
                  <div className='account-name'>
                       <div className="account-talent">
                            <label>Select youtr talent or skill*</label>
                           <div className='talent-input'>
                                <input type="text"/>
                                <img src={arrow_left} alt={arrow_left}/>
                           </div>
                       </div>
                  </div>
                 
                  <div className='account-next'>
                  <div className='skip'><Link to="/account-portfolio">skip</Link></div>
                  <button><Link to="/account-portfolio">Next</Link></button>
                  </div>
             </form>
        </div>
        </div>
       
   </div>
</div>
   
  )
}

export default AccountCareerBuilder