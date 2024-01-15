import React from 'react'
// import style "./Experience.module.css"
import skills from '../../Data/skills.json'
import { getImageUrl } from '../../utils'
import history from "../../Data/history.json"
import style from "./Experience.module.css"

function Experience() {
  return (
    <section id='experience' className={style.container}>
        <h2 className={style.title}>Experience</h2>
        <div className={style.content}>
            <div className={style.skills}>{
                skills.map((skills, id) => {
                    return(
                        <div key={id} className={style.skillImageContainer}>
                            <div><img src={skills.imagesrc} alt={skills.title}/></div>
                            <p>{skills.title}</p>
                            </div>
                    )
                })
                }</div>
            <ul className={style.history}>
                {
                    history.map((historyItem, id) =>{
                        return(
                            <li key={id} className={style.historyItem}>
                                <img src={getImageUrl(historyItem.imagesrc)} alt={`${historyItem.organization} logo`}/>
                            <div className={style.historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                <p>{`${historyItem.startDate} ${historyItem.endDate}`}</p>
                            <ul>
                                {historyItem.experience.map((experience, id) => {
                                    return(
                                        <li key={id}>{experience}</li>
                                    )
                                })}
                            </ul>
                            </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    </section>
  )
}

export default Experience