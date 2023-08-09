import React from 'react'
import "../styles/UpcomingEvent.css"
import { Link } from 'react-router-dom'
import upcoming_one from "../asset/upcoming-one.png";
import upcoming_two from "../asset/upcoming-two.png"
import upcoming_three from "../asset/upcoming-three.png"
import upcoming_four from "../asset/upcoming-four.png"
import upcoming_five from "../asset/upcoming-five.png"
import upcoming_six from "../asset/upcoming-six.png"

const UpcomingEvent = () => {
  return (
    <React.Fragment>
    <div className='upcoming'>
         <div className='bg-upcoming'></div>
         <div className='bg-upcoming-overlay'>
              <div className='upcoming-container'>
                   <h1>Upcoming Events</h1>
                   <p>Lorem ipsum dolor sit amet consectetur.</p>
                   <div className='image-stack'>
                        <div className='image-stack-left'>
                             <img src={upcoming_one} className="big-img-left" alt={upcoming_one}/>
                             <div className='image-joint-left'>
                                  <img src={upcoming_two} className='first-img-left' alt={upcoming_two}/>
                                  <img src={upcoming_three} alt={upcoming_three}/>
                             </div>
                        </div>
                        <div className='image-stack-right'>
                             <div className='image-joint-right'>
                                  <img src={upcoming_four} className='first-img-right' alt={upcoming_four}/>
                                  <img src={upcoming_five} alt={upcoming_five}/>
                             </div>
                             <img src={upcoming_six} className='big-img-right' alt={upcoming_six}/>
                             
                        </div>
                   </div>
                  
              </div>
              <div className='other-upcoming-event'>
                   <div className='other-upcoming-event-content'>
                        <h3>Other Upcoming Events</h3>
                        <Link>View  all</Link>
                   </div>
                   <div className='roller-coaster'>
                        <div className='roller-coaster-content'>
                             <div className='roller-coaster-date'>
                                  <p>Start</p>
                                  <h2>6TH</h2>
                                  <h3>June</h3>
                             </div>
                             <div className='roller-coaster-event'>
                                  <h3>Roller Coaster</h3>
                                  <button>View Event</button>
                             </div>
                        </div>
                        <div className='roller-coaster-content'>
                             <div className='roller-coaster-date'>
                                  <p>Start</p>
                                  <h2>6TH</h2>
                                  <h3>June</h3>
                             </div>
                             <div className='roller-coaster-event'>
                                  <h3>Roller Coaster</h3>
                                  <button>View Event</button>
                             </div>
                        </div>
                        <div className='roller-coaster-content'>
                             <div className='roller-coaster-date'>
                                  <p>Start</p>
                                  <h2>6TH</h2>
                                  <h3>June</h3>
                             </div>
                             <div className='roller-coaster-event'>
                                  <h3>Roller Coaster</h3>
                                  <button>View Event</button>
                             </div>
                        </div>
                        <div className='roller-coaster-content'>
                             <div className='roller-coaster-date'>
                                  <p>Start</p>
                                  <h2>6TH</h2>
                                  <h3>June</h3>
                             </div>
                             <div className='roller-coaster-event'>
                                  <h3>Roller Coaster</h3>
                                  <button>View Event</button>
                             </div>
                        </div>
                        <div className='roller-coaster-content'>
                             <div className='roller-coaster-date'>
                                  <p>Start</p>
                                  <h2>6TH</h2>
                                  <h3>June</h3>
                             </div>
                             <div className='roller-coaster-event'>
                                  <h3>Roller Coaster</h3>
                                  <button>View Event</button>
                             </div>
                        </div>
                   </div>
              </div>
         </div>
        
    </div>
    </React.Fragment>
  )
}

export default UpcomingEvent