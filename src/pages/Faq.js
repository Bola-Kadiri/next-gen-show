import React from 'react'
import "../styles/Faq.css"
import { CiSearch } from 'react-icons/ci';

const Faq = () => {
  return (
    <React.Fragment>
    <div className='faq'>
         <div className='bg-faq'>   
         </div>
         <div className='bg-faq-overlay'>
              <div className='faq-container'>
                   <div className='faq-content'>
                       <h1>How can we help you</h1>
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
              <div></div>
         </div>
    </div>
    </React.Fragment>
  )
}

export default Faq