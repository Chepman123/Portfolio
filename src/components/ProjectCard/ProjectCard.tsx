import classes from './ProjectCard.module.css'
import { type projectData,projects } from '../../data/ProjectsData';
import { Link } from 'react-router-dom';
export default function ProjectCard({data}:{data:projectData}){
    return <Link to={`/${projects.indexOf(data)}`} className={classes.div}>
        <div className={classes.title}>
            <h2>{data.title}</h2>
            {data.technologies.map((technology:string)=>{
                return <img src={technology}/>
            })}
        </div>
        <img className={classes.img} src={data.images[0]}/>
    </Link>
}