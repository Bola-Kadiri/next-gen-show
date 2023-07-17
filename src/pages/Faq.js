import React from 'react'
import "../styles/Faq.css"
import { CiSearch } from 'react-icons/ci';
import down from "../asset/down.png"
import finder from "../asset/finder.png"
import { Link } from 'react-router-dom';

const Faq = () => {
  return (
    <React.Fragment>
    <div className='faq'>
         <div className='bg-faq'>   
         </div>
         <div className='bg-faq-overlay'>
              <div className='faq-container'>
                   <div className='faq-content'>
                       <h1>How can we help you?</h1>
                        <div className='search-box'>
                             <CiSearch style={{fontSize: "30px"}}/>
                             <input type="search" placeholder='Search for answers'/>
                        </div>
                   </div>
              </div>
         </div>
    </div>
    <div className='get-started'>
         <div className='get-started-content'>
             <div className='box-get-started'>
                  <div className='box-get'>
                       <h4>Getting Started</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.
                       Sit curabitur nulla justo tellus amet.</p>
                  </div>
                  <div className='box-get'>
                       <h4>Talents</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.
                       Sit curabitur nulla justo tellus amet.</p>
                       </div>
             </div>
             <div className='box-get-started'>
                  <div className='box-get'>
                       <h4>Events</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.
                       Sit curabitur nulla justo tellus amet.</p>
                  </div>
                  <div className='box-get'>
                       <h4>Categories</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.
                       Sit curabitur nulla justo tellus amet.</p>
                  </div>
             </div>
             <div className='box-get-started'>
                  <div className='box-get'>
                       <h4>Enrolment Payment</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.
                       Sit curabitur nulla justo tellus amet.</p>
                  </div>
                  <div className='box-get'>
                       <h4>Shortlisting</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.
                       Sit curabitur nulla justo tellus amet.</p>
                  </div>
             </div>
             <div className='box-get-started'>
                  <div className='box-get'>
                       <h4>Voting</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.
                       Sit curabitur nulla justo tellus amet.</p>
                  </div>
                  <div className='box-get'>
                       <h4>Prize Winning</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.
                       Sit curabitur nulla justo tellus amet.</p>
                  </div>
             </div>
         </div>
    </div>
    <div className='question'>
         <div className='question-content'>
              <h3>Frequently asked Questions</h3>
              <div className='question-section'>
                   <div className='question-card'>
                        <p>Do you Over Customer Support?</p>
                        <img src={down} alt={down}/>
                   </div>
                   <div className='question-card'>
                        <p>Do you Over Customer Support?</p>
                        <img src={down} alt={down}/>
                   </div>
                   <div className='question-card'>
                        <p>Do you Over Customer Support?</p>
                        <img src={down} alt={down}/>
                   </div>
                   <div className='question-card'>
                        <p>Do you Over Customer Support?</p>
                        <img src={down} alt={down}/>
                   </div>
                   <div className='question-card'>
                        <p>Do you Over Customer Support?</p>
                        <img src={down} alt={down}/>
                   </div>
                   <div className='question-card'>
                        <p>Do you Over Customer Support?</p>
                        <img src={down} alt={down}/>
                   </div>
                   <div className='question-card'>
                        <p>Do you Over Customer Support?</p>
                        <img src={down} alt={down}/>
                   </div>
                   <div className='question-card'>
                        <p>Do you Over Customer Support?</p>
                        <img src={down} alt={down}/>
                   </div>
                   <div className='question-card'>
                        <p>Do you Over Customer Support?</p>
                        <img src={down} alt={down}/>
                   </div>
              </div>
         </div>
    </div>
    <div className='find-section'>
         <div className='find-section-content'>
              <h3>Didn’t find what you are looking for?</h3>
              <p>Our Team is active to attend to your email</p>
              <img src={finder} alt={finder}/>
              <Link to="/contact"><button>Contact Us</button></Link>
         </div>
    </div>
    </React.Fragment>
  )
}

export default Faq