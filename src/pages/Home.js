import React from 'react'
import "../styles/Home.css"
import tab from "../asset/Vector (1).png"
import { Link } from 'react-router-dom'
import user from "../asset/user.png"
import event from "../asset/event.png"
import req from "../asset/req.png"
import shortlist from "../asset/shortlist.png"
import vote from "../asset/vote.png"
import Stickers from '../component/sticker/Stickers'
import person_one from "../asset/person-1.png"
import person_two from "../asset/person-2.png"
import person_three from "../asset/person-3.png"
import zigzag from "../asset/zigzag.png"
const Home = () => {
  return (
<React.Fragment>
    <div className='home'>
         <div className='bg-home'>   
         </div>
         <div className='bg-home-overlay'>
              <div className='home-container'>
                   <div className='home-content'>
                        <h1>Impacting <br/>Lives of Young<br/> People In Africa.</h1>
                        <p>Making youngsters laverage their skills, abilities and talents
                        stand out as a goal getter
                        </p>
                        <div className='home-link'>
                             <Link>Join Us</Link>
                             <div className='bullet'>
                                  <img src={tab} alt="img2"/>
                                  <span>How it works</span>
                             </div>
                        </div>
                   </div>
              </div>
         </div>
    </div>
    <div className='works'>
         <div className='works-content'>
              <h1>How it works</h1>
              <div className='works-para'>
                   <p> Lorem ipsum dolor sit amet consectetur adipisicing 
                   elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid corrupti, deserunt magnam quia veritatis.
                   </p>
              </div>
         </div>
         <div className='home-requirement'>
         <div className='home-requirement-content'>
               <div className='home-req-left'>
                    <div className='home-req-left-content'>
                      <div className='home-icon'>
                          <img src={user} alt="user"/>
                          <span>Create an Account</span>
                      </div>
                      <div className='home-icon'>
                           <img src={event} alt="user"/>
                           <span>Join an Event</span>
                      </div>
                      <div className='home-icon'>
                           <img src={req} alt="user"/>
                           <span>Submit Requirement</span>
                      </div>
                      <div className='home-icon'>
                           <img src={shortlist} alt="user"/>
                           <span>Get Shortlisted</span>
                      </div>
                      <div className='home-icon'>
                           <img src={vote} alt="user"/>
                           <span>Get the Highest Votes</span>
                      </div>
                    </div>
                    <div className='home-req-center'><div className='design'><span>design</span></div></div>
               </div>
              
               <div className='home-req-right'>
                    <div className='home-req-right-content'>
                         <img src={req} alt="img4"/>
                         <h2>Submit Requirements</h2>
                         <p> Lorem ipsum dolor sit amet consectetur adipisicing 
                             elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                             alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                             aliquid corrupti, deserunt magnam quia veritatis.
                         </p>
                    </div>
               </div>
         </div>
               
         </div>
         <div className='patner'>
              <div className='partner-content'>
                   <h2>Our Patners</h2>
                   <p>People who have trust in us</p>
                  
                        <Stickers/>
               
              </div>
         </div>
       
    </div>
    <div className='event'>
         <div className='event-content'>
              <h2>Ongoing Events</h2>
              <div className='event-box'>
                   <div className='event-left'>
                       <h3>Stage Times</h3>
                       <p>Other Event</p>
                       <p>Other Event</p>
                       <p>Other Event</p>
                   </div>
                   <div className='event-right'>
                        <div className='event-card'>
                             <img alt="img"/>
                             <img alt="img"/>
                             <img alt="img"/>
                             <img alt="img"/>
                             <img alt="img"/>
                        </div>
                   </div>
              </div>
         </div>
    </div>
    <div className='people-say'>
         <h1>What people say about Us</h1>
         <div className='people-box'>
              <div className='people-box-content'>
              <div className='box-a'>
                   <p> "elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                   alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                   aliquid."</p>
                   <div className='inner-box'>
                        <img src={person_one} alt={person_one}/>
                        <div className='inner-box-des'>
                             <h4>Emmanuel J</h4>
                             <span>Photographer</span>
                        </div>
                   </div>
              </div>
              <div className='box-a'>
                   <p> "elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                    alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                    aliquid."</p>
                    <div className='inner-box'>
                         <img src={person_two} alt={person_two}/>
                         <div className='inner-box-des'>
                              <h4>John Wood</h4>
                              <span>Software Engineer</span>
                         </div>
                    </div>
              </div>
             <div className='box-a'>
                  <p> "elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae 
                  alias accusamus voluptatum ex cumque facere! Voluptas iure velit 
                  aliquid."</p>
                  <div className='inner-box'>
                       <img src={person_three} alt={person_three}/>
                       <div className='inner-box-des'>
                            <h4>Sidwell Mako</h4>
                            <span>Artist</span>
                       </div>
                  </div>
             </div>
         </div>
         </div>
        
        </div>
        <div className='blog'>
            <div className='blog-header'>
                 <h2>Our Blog</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                 elit. Ipsum, perspiciatis autem? Quasi aliquam facilis quae </p>
                 <img src={zigzag} alt={zigzag}/>
            </div>
        </div>
</React.Fragment>
  )
}

export default Home