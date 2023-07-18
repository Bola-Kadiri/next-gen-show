import React from 'react'
import "../styles/Talents.css"

import ShowLink from '../component/ShowLink'

const Talents = () => {
  return (
    <React.Fragment>
    <div className='talent'>
         <div className='bg-talent'>   
         </div>
         <div className='bg-talent-overlay'>
              <div className='talent-container'>
                   <div className='talent-content'>
                       <h1>The Stage Time</h1>
                        <p>A show brought to you by NextGen</p>
                        <button>JOIN AS A CONTESTANT</button>
                        <p>REGISTERATION ENDS ON 1ST JULY, 2023</p>
                   </div>
              </div>
         </div>
    </div>
    <div className='stage-show'>
         <div className='stage-show-content'> 
              <div className='stage-show-content-overlay'>
                   <div className='stage-show-others'>
                       <ShowLink/>
                       <div className='show-box'></div>
                       <div className='show-text'>
                            <h3>The Stage Time Show</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus 
                            amet. Ut placerat dolor massa metus quisque sodales semper. Hac donec vulputate 
                            pharetra augue eu congue. Lorem ipsum dolor sit amet consectetur. Sit curabitur
                             nulla justo tellus amet. Ut placerat dolor massa metus quisque sodales semper.
                              Hac donec vulputate pharetra augue eu congue.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus 
                            amet. Ut placerat dolor massa metus quisque sodales semper. Hac donec vulputate 
                            pharetra augue eu congue. Lorem ipsum dolor sit amet consectetur. Sit curabitur
                             nulla justo tellus amet. Ut placerat dolor massa metus quisque sodales semper.
                              Hac donec vulputate pharetra augue eu congue.
                            </p>

                       </div>
                   </div>
              </div>
         </div>
        
    </div>
    </React.Fragment>
  )
}

export default Talents