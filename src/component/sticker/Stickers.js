import React from 'react'
import health from "../../asset/health.png"
import together from "../../asset/together.png"
import thepaak from "../../asset/thepaak.png"
import inc from "../../asset/inc.png"
import pipelink from "../../asset/pipelink.png"
import ephicient from "../../asset/ephicient.png"
import "../sticker/Sticker.css"

const Stickers = () => {
  return (
    <div className='sticker'>
         <div className='sticker-content'>
             <div className='first-stickers'>
                  <img src={health} alt={health}/>
                  <img src={ephicient} alt={ephicient}/>
                  <img src={inc} alt={inc}/>
                  <img src={thepaak} alt={thepaak}/>
             </div>
             <div className='second-stickers'>
                  <img src={pipelink} alt={pipelink}/>
                  <img src={together} alt={together}/>
                 
             </div>
         </div>
    </div>
  )
}

export default Stickers