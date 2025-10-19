import classes from './Skill.module.css';
import { skills } from '../../data/SkillsData';
import { memo } from 'react';

export default function Skill({id}:{id:number}){
    return <div className={classes.div}>
        <h3 className={classes.h3}>{skills[id].title}</h3>
         <img className={classes.img} src={skills[id].src} alt={skills[id].title}/>
    </div>
}