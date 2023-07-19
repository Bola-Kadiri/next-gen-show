import React from 'react'
import "../styles/Category.css"

import BestArtist from '../component/BestArtist';


const Category = () => {
  return (
    <React.Fragment>
    <div className='about-event'>
         <div className='bg-about-event'>   
         </div>
         <div className='bg-about-event-overlay'>
              <div className='about-event-container'>
                   <div className='about-event-content'>
                       <h1>The Stage Time</h1>
                        <p>A show brought to you by NextGen</p>
                        <button>JOIN AS A CONTESTANT</button>
                        <span>REGISTERATION ENDS ON 1ST JULY, 2023</span>
                   </div>
              </div>
         </div>
    </div>
    <div className='about-event-artist'>
         <div className='about-event-artist-content'> 
              <div className='about-event-artist-contentoverlay'>
                   <div className='about-event-others'>
                        <div className='artist-houst'>
                             <div className='artist-header'>
                                   <div className='categ'> <span>Category</span>: <p>BEST ARTIST FEMALE</p></div>
                            </div>
                            <BestArtist/>
                    
                        </div>
                        <div className='artist-houst'>
                             
                            <BestArtist/>
                        </div>
                        <div className='artist-houst'>
                             
                            <BestArtist/>
                        </div>
                   </div>
                 
              </div>
             
         </div>
        
    </div>
    </React.Fragment>
  )
}

export default Category