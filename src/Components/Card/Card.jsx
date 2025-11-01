import React from 'react'
import { HeartPlus } from 'lucide-react';
import { Star } from 'lucide-react';
import styles from './Card.module.css';
const Card = (props) => {
  return (
    <div className={styles.Card} style={{ "--card-bg": `url(${props.img})` }}>
    <div className={styles.top}>
    <button><HeartPlus /></button> 
    </div>
    
    <div className={styles.center}>

    </div>

    <div className={styles.bottom}>
      <div className={styles.tag}>
      <h4>< Star size={20}/>4.3</h4>
      <h4>300</h4>
      </div>
    <h1>{props.name},{props.age}</h1>
    <div className={styles.cardoverlay}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, facere dicta. Corrupti officia ab esse vel ipsa? Ratione, vel iste!</p>
   <button>Play</button>
   </div>
    </div>
      
    </div>
  )
}

export default Card
