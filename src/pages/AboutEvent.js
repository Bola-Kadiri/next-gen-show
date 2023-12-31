import React from 'react'
import "../styles/AboutEvent.css"
import { CiSearch } from 'react-icons/ci';
import ShowLink from '../component/ShowLink'
import { Link } from 'react-router-dom';
import BestArtist from '../component/BestArtist';


const AboutEvent = () => {
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
                        <ShowLink/>
                        <div className='filter-show'>
                             <div className='search-filter'>
                                  <CiSearch style={{fontSize: "30px"}}/>
                                  <input type="search" placeholder='Search for answers'/>
                             </div>
                             <div className='fiter-btn'></div>
                        </div>
                        <div className='artist-houst'>
                             <div className='artist-header'>
                                   <div className='categ'> <span>Category</span>: <p>BEST ARTIST FEMALE</p></div>
                                   <Link to="/">View all</Link>
                            </div>
                            <BestArtist/>
                    
                        </div>
                        <div className='artist-houst'>
                             <div className='artist-header'>
                                   <div className='categ'> <span>Category</span>: <p>BEST ARTIST FEMALE</p></div>
                                   <Link to="/">View all</Link>
                            </div>
                            <BestArtist/>
                        </div>
                        <div className='artist-houst'>
                             <div className='artist-header'>
                                   <div className='categ'> <span>Category</span>: <p>BEST ARTIST FEMALE</p></div>
                                   <Link to="/">View all</Link>
                            </div>
                            <BestArtist/>
                        </div>
                        <div className='btn-page'>
                             <div className='btn-page-content'>
                                  <button>1</button>
                                  <button>2</button>
                                  <button>3</button>
                             </div>
                        </div>
                   </div>
                 
              </div>
             
         </div>
        
    </div>
    </React.Fragment>
  )
}

export default AboutEvent