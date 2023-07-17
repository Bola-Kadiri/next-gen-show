import React from 'react'
import "../styles/About.css"

const About = () => {
  return (
     <React.Fragment>
    <div className='about'>
         <div className='bg-about'>   
         </div>
         <div className='bg-about-overlay'>
              <div className='about-container'>
                   <div className='about-content'>
                       <h1>About Us</h1>
                   </div>
              </div>
         </div>
    </div>
    <div className='vission'>
         <div className='vission-content'>
               <h1>Introduction</h1>
               <p>The Next Gen Talents Show is a Social Enterprise that uses talents and abilities  as a tool
                  to facilitate opportunities for youth employment and engagement.
               </p>
               <p>It caters  to young people from more than 20 countries inAfrica that are passionate about any
                  form of they've got.
               </p>
         </div>
    </div>
    </React.Fragment>
  )
}

export default About