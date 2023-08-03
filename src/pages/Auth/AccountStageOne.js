import React from 'react'
import "../../styles/AccountStageOne.css"
import logo from "../../asset/The Next Gen SHOW.png";
import arrow_left from "../../asset/arrow-left.png"
import {Link} from "react-router-dom"
const AccountStageOne = () => {
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
                  <p>1/4</p>
             </div>
             <div className='level'>
                  <div className='measure'></div>
             </div>
             <img src={arrow_left} alt={arrow_left}/>
             <div className='account-tell-us'>
                  <h2>Tell us a bit about you</h2>
                  <p>That will help us better account setup for you</p>
                  <form>
                  <div className='account-name'>
                       <div className="account-first-name">
                            <label>First name</label><br/>
                            <input type="text"/>
                       </div>
                       <div className="account-last-name">
                            <label>Last name</label><br/>
                            <input type="text"/>
                       </div>
                  </div>
                  <div className='account-nick-name'>
                       <label>Stage/Nickname</label><br/>
                       <input type="text"/>
                  </div>
                  <div className='account-next'>
                       <div className='skip'><Link to="/stage-two">skip</Link></div>
                       <button><Link to="/stage-two" className='next'>Next</Link></button>
                  </div>
             </form>
        </div>
        </div>
       
   </div>
</div>
   
  )
}

export default AccountStageOne