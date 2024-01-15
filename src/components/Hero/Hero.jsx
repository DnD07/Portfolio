import React from 'react'
import { getImageUrl } from '../../utils'
import style from './Hero.module.css'

function Hero() {
  return (
    <section className={style.container}>

        <div className={style.content}>
            <h1 className={style.title}>Hi, I'm Dinanath</h1>
            <p className={style.description}>I'm Front-end Developer and </p>
            
            <a href='mailto:07dnd.dahal@gmail.com' className={style.contactBtn}>Contact</a>
            <a href='Dinanath Dahal.pdf' className={style.contactBtn} download>CV</a>
           
            
          
        </div>
            <img src={getImageUrl("hero/heroIInmg.jpg")} alt="Hero" className={style.heroImg}/>
            <div className={style.topBlur}/>
            <div className={style.bottonBlur}/>
    </section>
  )
}

export default Hero;