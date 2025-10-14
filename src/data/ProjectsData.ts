export interface projectData{
  title:string,
  description:string,
  technologies:string[],
  images:string[],
  github:string,
  link:string
}
export const projects:projectData[]=[
    {
        title:'Chat',
        description:'A full-stack chat application built with Node.js, React, and TypeScript. The project includes: User authentication and logging system. Message sending and storage in a database. Editing and deleting messages functionality. Automated chat creation in the database when a new user registers. The app provides a modern, scalable, and secure real-time messaging experience designed for both personal and team communication',
        technologies:['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'],
        images:['/ChatImages/image(8).png','/ChatImages/image(20).png'],
        github:'https://github.com/Chepman123/chat_project',
        link:''
    },
    {
        title:'Game_Studio_WebSite',
        description:'A React and TypeScript-based website for a game studio featuring a modern and dynamic design. The site includes sections for news and projects, with all content automatically fetched and updated from a database or content management system. The project focuses on clean UI/UX, responsive layouts, and smooth animations to present the studio’s games and updates in a professional and engaging way',
        technologies:['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'],
        images:['/Game Studio/image(9).png','/Game Studio/image(12).png','/Game Studio/image(13).png','/Game Studio/image(14).png','/Game Studio/image(16).png','/Game Studio/image(17).png'],
        github:'https://github.com/Chepman123/pervomens-website',
        link:'https://pervomens-website-git-main-vlad-shlapak.vercel.app/'
    }
    ,
    {
        title:'Dantway',
        description:'A modern website for a dental clinic built with React and TypeScript. The site features automatic data population for clinic information, services, and contact details, ensuring easy content management and real-time updates. The design emphasizes clean aesthetics, responsive layouts, and user-friendly navigation, providing patients with a professional and trustworthy online experience',
        technologies:['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'],
        images:['/Dantway/image(10).png','/Dantway/image(18).png','/Dantway/image(19).png'],
        github:'https://github.com/Chepman123/stomatology-site',
        link:'https://dantway.pl/'
    }
]