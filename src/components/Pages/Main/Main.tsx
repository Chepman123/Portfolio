import { projects, type projectData } from "../../../data/ProjectsData";
import Nav from "../../Nav/Nav";
import ProjectCard from "../../ProjectCard/ProjectCard";
import classes from './Main.module.css'
export default function Main(){
    return(<>
    <Nav/>
    <div className={classes.div}>
        <h1>My Projects</h1>
        <section className={classes.section}>
            {projects.map((project:projectData)=>{
                return <ProjectCard data={project}/>;
            })}
        </section>
    </div>
    </>)
}