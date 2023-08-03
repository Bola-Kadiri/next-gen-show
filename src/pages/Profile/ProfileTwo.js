import React from 'react';
import "../../styles/ProfileTwo.css"
import logo from "../../asset/The Next Gen SHOW.png"
import notify from "../../asset/notification.png"
import nav_profile from "../../asset/nav-profile.png";
import artist from "../../asset/artist.png"
import user_profile from "../../asset/user-profile.png"
import profile_event from "../../asset/profile-event.png"
import bell from "../../asset/bell.png"
import stage from "../../asset/Frame 69.png"

const ProfileTwo = () => {
  return (
    <React.Fragment>
    <div className='profile-one'>
         <div className='bg-profile-one'>   
         </div>
         <div className='bg-profile-one-overlay'>
              <div className='profile-one-container'>
                   <div className='profile-one-content'>
                       <nav>
                            <div className='nav-profile-left'>
                                 <img src={logo} alt={logo}/>
                            </div>
                            <div className='nav-profile-right'>
                                 <img src={notify} alt={notify}/>
                                 <img src={nav_profile} alt={nav_profile}/>
                                 <span>Casandra Billz</span>
                            </div>
                       </nav>
                   </div>
              </div>
         </div>
    </div>
    <div className='profile-one-body'>
        <div className='profile-one-body-content'>
             <div className='profile-one-left'>
                  <div className='inner-profile-one-left'>
                       <img src={artist} alt={artist}/>
                       <h2>Casandra Billz</h2>
                       <div className='input-event'>
                            <input type="text"/>
                            <div className='six'></div>
                       </div>
                       <div className='input-event'>
                            <input type="text"/>
                            <div className='zero'></div>
                       </div>
                       <div className='input-event'>
                            <input type="text"/>
                            <div className='zero'></div>
                       </div>
                       <div className='port'>
                            <label>Portfolio</label><br></br>
                            <input type="text"/>
                       </div>
                       <button>view pubic profile</button>
                  </div>
                  <button>Logout</button>
             </div>
             <div className='profile-one-right'>
             <div className='inner-profile-one-right'>
                  <div className='inner-profile-one-hearder'>
                       <div className='user-profile'>
                            <img src={user_profile} alt={user_profile}/>
                            <span>User info</span>
                       </div>
                       <div className='profile-event'>
                            <img src={profile_event} alt={profile_event}/>
                            <span>My Events</span>
                       </div>
                       <div className='user-notification'>
                            <img src={bell} alt={bell}/>
                            <span>Notification</span>
                       </div>
                       <button>Register for an Event</button>
                  </div>
                  <div className='stage-event'>
                       <div className='stage-event-content'>
                            <div className='stage-event-row'>
                                 <img src={stage} alt={stage}/>
                                 <div className='stage-event-card'></div>
                            </div>
                            <div className='stage-event-row'>
                                 <img src={stage} alt={stage}/>
                                 <div className='stage-event-card'></div>
                            </div>
                            <div className='stage-event-row'>
                                 <img src={stage} alt={stage}/>
                                 <div className='stage-event-card'></div>
                            </div>
                            <div className='stage-pages'>
                                 <div className='stage-one'>1</div>
                                 <div className='stage-two'>2</div>
                            </div>
                       </div>
                  </div>
             </div>
             </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default ProfileTwo