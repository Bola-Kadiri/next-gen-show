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
                  <img src={health} alt={health}  style={{width: "274px"}}/>
                  <img src={ephicient} alt={ephicient} style={{width: "235px"}}/>
                  <img src={inc} alt={inc} style={{width: "225px"}}/>
                  <img src={thepaak} alt={thepaak} style={{width: "230px"}}/>
             </div>
             <div className='second-stickers'>
                  <img src={pipelink} alt={pipelink} width={{style: "246px"}}/>
                  <img src={together} alt={together} width={{style: "285px"}}/>
                 
             </div>
         </div>
    </div>
  )
}

export default Stickers