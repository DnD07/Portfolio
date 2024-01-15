import React from 'react'
import {getImageUrl} from "../../utils";
import style from './ProjectCard.module.css'

export  const ProjectCard = ({project: {title, imagesrc, description, skills, demo, source}})  => {
  return (
    <div className={style.container}>
                        <img src={getImageUrl(imagesrc)} alt={`image of ${title}`} className={style.image}/>
                        <p className={style.title}>{title}</p>
                        <p className={style.description}>{description}</p>
                        <ul className={style.skills}>
                            {
                               skills.map((skill, id) => {
                                    return <li key={id}>{skill}</li>
                                })
                            }
                        </ul>
                        <div className={style.links}>
                            <a href={demo} className={style.link} >Demo</a>
                            <a href={source} className={style.link}>Source</a>
                            </div>
                    </div>
  )
}
