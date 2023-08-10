import React from 'react';
import "../styles/Participant.css"
import participant from "../asset/participant.png";
import { Link } from 'react-router-dom';


const Participant = () => {
  return (
    <React.Fragment>
    <div className='participant'>
         <div className='bg-participant'>   
         </div>
         <div className='bg-participant-overlay'>
              <div className='participant-container'>
                   <div className='participant-content'>
                        <div className='participant-body'>
                              <img src={participant} alt={participant}/>
                              <div className='participant-profile'>
                                   <h3>Casandra Billz</h3>
                                   <p>Afrobeat Artist</p>
                                   <h5>Total Number Votes so far</h5>
                                   <div className='no-participant'>
                                        <div className='actual-count'>78</div>
                                        <div className='participant-length'></div>
                                   </div>
                                   <span>VOTING ENDS on 31st July, 2023 at 23:59</span>
                              </div>
                        </div>
                   </div>
              </div>
         </div>
    </div>
    <div className='participant-body-one'>
         <div className='participant-body-one-content'>
              <div className='participant-body-one-content-left'>
                   <div  className='participant-body-profile'>
                       <Link to="/profile" className="header-profile">PROFILE</Link>
                       <Link to="/portfolio" className='hearder-portfolio'>PORTFOLIO</Link>
                   </div>
                   <p className='participant-right-para'>Lorem ipsum dolor sit amet consectetur. Sit curabitur 
                   nulla justo tellus amet. Ut placerat dolor massa metus quisque 
                   sodales semper. Hac donec vulputate pharetra augue eu congue. 
                    ipsum dolor sit amet consectetur. Sit curabitur nulla justo 
                    tellus amet. Ut placerat dolor massa metus quisque sodales semper. 
                     donec vulputate pharetra augue eu congue.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur 
                   nulla justo tellus amet. Ut placerat dolor massa metus quisque 
                   sodales semper. Hac donec vulputate pharetra augue eu congue. 
                    ipsum dolor sit amet consectetur. Sit curabitur nulla justo 
                    tellus amet. Ut placerat dolor massa metus quisque sodales semper. 
                     donec vulputate pharetra augue eu congue.
                    </p>
              </div>
              <div className='participant-body-one-content-right'>
                  <div className='participant-body-one-inner'>
                       <p>Ensure the contestant is who you actually want to vote. 
                          There would be no refund or reversal of vote if you choose 
                          a wrong contestant.
                       </p>
                       <form>
                       <div className='total-vote'>
                           <label>Total number of votes you want</label><br/>
                           <input type="number" placeholder='Your total number of votes'/>
                       </div>
                       <div className='total-vote'>
                           <label>Full Name</label><br/>
                           <input type="number" placeholder='Your total number of votes'/>
                       </div>
                       <div className='total-vote'>
                           <label>Email address</label><br/>
                           <input type="number" placeholder='Your total number of votes'/>
                       </div>
                       <div className='total-vote'>
                           <label>Phone Number</label><br/>
                           <input type="number" placeholder='Your total number of votes'/>
                       </div>
                       <span>Each vote costs NGN 100.00</span>
                       <div className='vote-btn'><button>VOTE</button></div>
                  </form>
                  </div>
                  
              </div>

              </div>
    </div>
    </React.Fragment>
  )
}

export default Participant