import React from 'react'
import { HeartPlus } from 'lucide-react';
import { Star } from 'lucide-react';
const Card = (props) => {
  return (
    <div className='Card' style={{ "--card-bg": `url(${props.img})` }}>
    <div className="top">
    <button><HeartPlus /></button> 
    </div>
    
    <div className="center">

    </div>

    <div className="bottom">
      <div className="tag">
      <h4>< Star size={20}/>4.3</h4>
      <h4>300</h4>
      </div>
    <h1>{props.name},{props.age}</h1>
    <div className="card-overlay">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, facere dicta. Corrupti officia ab esse vel ipsa? Ratione, vel iste!</p>
   <button>Play</button>
   </div>
    </div>
      
    </div>
  )
}

export default Card
