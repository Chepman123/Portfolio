import { useParams } from "react-router-dom";
import { projects } from "../../../data/ProjectsData";
import classes from './ProjectPage.module.css';
import { useEffect, useState } from "react";

export default function ProjectPage() {
    const { projectId } = useParams();
    const id = Number(projectId);

    const [screenshot, setScreenshot] = useState<number>(0);
    const [fade, setFade] = useState<boolean>(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // починаємо зникати
            setTimeout(() => {
                setScreenshot(prev => (prev + 1 >= projects[id].images.length ? 0 : prev + 1));
                setFade(true); // з’являється нове фото
            }, 500); // тривалість “зникання” в ms
        }, 5000);

        return () => clearInterval(interval);
    }, [id]);

    return (
        <article className={classes.article}>
            <h1 className={classes.h1}>{projects[id].title}</h1>

            <img
                src={projects[id].images[screenshot]}
                className={classes.img}
                style={{
                    opacity: fade ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out"
                }}
            />

            <p className={classes.p}>{projects[id].description}</p>

            <div className={classes.buttons}>
                <a href={projects[id].github} className={classes.a}>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        width="40"
                        height="40"
                    />
                    Source Code
                </a>

                <a href={projects[id].link} className={classes.a} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-globe" style={{ fontSize: '40px', marginRight: '8px' }}></i>
                    Link to Site
                </a>
            </div>
        </article>
    );
}
