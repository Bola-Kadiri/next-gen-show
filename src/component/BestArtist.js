import React from 'react'
import artist from "../asset/artist.png"
import "../component/BestArtist.css";
import { Link } from 'react-router-dom';


const BestArtist = () => {
  return (
    <div>
    <div className='best-artist'>
    <div className='artist-card'>
          <img src={artist} alt={artist}/>
          <div className='artist-info'>
               <h3>Casandra Billz</h3>
               <span>as Best Artis</span>
               <button><Link to="/participant">vote</Link></button>
          </div>
    </div>
    <div className='artist-card'>
         <img src={artist} alt={artist}/>
          <div className='artist-info'>
               <h3>Casandra Billz</h3>
               <span>as Best Artis</span>
               <button><Link to="/participant">vote</Link></button>
          </div>
    </div>
    <div className='artist-card'>
          <img src={artist} alt={artist}/>
          <div className='artist-info'>
               <h3>Casandra Billz</h3>
               <span>as Best Artis</span>
               <button><Link to="/participant">vote</Link></button>
          </div>
    </div>
</div>
    </div>
  )
}

export default BestArtist