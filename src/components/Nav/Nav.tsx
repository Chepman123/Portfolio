import { Link } from 'react-router-dom';
import Skill from '../Skill/Skill';
import classes from './Nav.module.css';
import { skills, type skillData } from '../../data/SkillsData';

export default function Nav(){
    return <main>
    <nav>
        <h1>Welcome To My Portfolio!</h1>
        <p>Hello. I am Vlad Shlapak. Currently I am studying at Zespół Szkół Komunikacji. I have experience in creating fullstack website and developing video games</p>
        <Link to='/About'>See Details</Link>
    </nav>
    <div className={classes.skills}>
        <h1>Skills</h1>
        <div className={classes.skillsPart}>
        {skills.map((key:skillData)=>{
            const id:number = skills.indexOf(key);
            return <Skill key={id} id={id}/>
        })}
        </div>
    </div>
    </main>
}