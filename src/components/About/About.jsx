import React from 'react'
import './About.module.css'
import  { getImageUrl } from '../../utils'
import style from './About.module.css'

function About() {
  return (
    <section className={style.container} id='about'>
        <h3 className={style.title}>About</h3>
    <div className={style.content}>
        <img className={style.aboutImage} src={getImageUrl('about/aboutImage.png')} alt='me sitting with laptop'/>
   <ul className={style.aboutItems}>
    <li className={style.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")}/>
        <div className={style.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>nvkjsdbvkdsjbvksdjbvkjdsbvksjv</p>
        </div>
    </li>
    <li className={style.aboutItem}>
        <img src={getImageUrl("about/serverIcon.png")}/>
        <div className={style.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>nvkjsdbvkdsjbvksdjbvkjdsbvksjv</p>
        </div>
    </li>
    <li className={style.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")}/>
        <div className={style.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>nvkjsdbvkdsjbvksdjbvkjdsbvksjv</p>
        </div>
    </li>
   </ul>
   
    </div>
   
    </section>
  )
}

export default About