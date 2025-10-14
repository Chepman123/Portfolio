import classes from './Footer.module.css';

export default function Footer(){
    return <footer>
        <h1 className={classes.h1}>Contacts</h1>
        <div className={classes.div}>
        <h2>+48787296201</h2>
        <h2>VladShlapak333@gmail.com</h2>
        <a href="https://github.com/Chepman123" className={classes.a} target="_blank" rel="noopener noreferrer">
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
    alt="GitHub" 
    width="40" 
    height="40"
  />
</a></div>
    </footer>
}